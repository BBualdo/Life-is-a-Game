using Microsoft.AspNetCore.DataProtection;
using Microsoft.EntityFrameworkCore;
using MissionsApi;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();

// Własna baza tej usługi (database-per-service)
builder.Services.AddDbContext<MissionsDbContext>(o =>
    o.UseNpgsql(builder.Configuration.GetConnectionString("Db")));

// TE SAME ustawienia co w core-api: ta sama nazwa aplikacji i ten sam katalog z kluczami.
// Tylko wtedy ciasteczko wystawione przez core-api da się tu odszyfrować.
var dataProtection = builder.Services.AddDataProtection().SetApplicationName("liag");
var keysPath = builder.Configuration["DataProtection:KeysPath"];
if (!string.IsNullOrEmpty(keysPath)) dataProtection.PersistKeysToFileSystem(new DirectoryInfo(keysPath));

// Ta usługa NIE loguje użytkowników – tylko czyta ciasteczko. "Identity.Application" to nazwa schematu
// używana przez ASP.NET Identity w core-api; nazwa schematu wchodzi do klucza szyfrowania, więc musi być identyczna.
builder.Services.AddAuthentication("Identity.Application")
    .AddCookie("Identity.Application", o =>
    {
        o.Cookie.Name = builder.Configuration["Auth:CookieName"] ?? "LIAGToken";
        o.Events.OnRedirectToLogin = ctx => { ctx.Response.StatusCode = 401; return Task.CompletedTask; };
        o.Events.OnRedirectToAccessDenied = ctx => { ctx.Response.StatusCode = 403; return Task.CompletedTask; };
    });
builder.Services.AddAuthorization();

// Klient HTTP do core-api (wywołanie usługa -> usługa)
builder.Services.AddHttpClient<ICoreClient, CoreClient>(c =>
{
    c.BaseAddress = new Uri(builder.Configuration["Services:CoreUrl"] ?? "http://core-api:8080");
    c.DefaultRequestHeaders.Add("X-Internal-Key", builder.Configuration["Internal:Key"] ?? "");
});

builder.Services.AddScoped<MissionsService>();

var app = builder.Build();

using (var scope = app.Services.CreateScope())
{
    scope.ServiceProvider.GetRequiredService<MissionsDbContext>().Database.EnsureCreated();
}

app.Use(async (ctx, next) =>
{
    ctx.Response.Headers["X-Instance"] = Environment.MachineName;
    await next();
});

app.UseAuthentication();
app.UseAuthorization();
app.MapControllers();
app.MapGet("/healthz", () => "ok");

app.Run();
