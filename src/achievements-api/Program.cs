using AchievementsApi;
using Microsoft.AspNetCore.DataProtection;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();

builder.Services.AddDbContext<AchievementsDbContext>(o =>
    o.UseNpgsql(builder.Configuration.GetConnectionString("Db")));

var dataProtection = builder.Services.AddDataProtection().SetApplicationName("liag");
var keysPath = builder.Configuration["DataProtection:KeysPath"];
if (!string.IsNullOrEmpty(keysPath)) dataProtection.PersistKeysToFileSystem(new DirectoryInfo(keysPath));

builder.Services.AddAuthentication("Identity.Application")
    .AddCookie("Identity.Application", o =>
    {
        o.Cookie.Name = builder.Configuration["Auth:CookieName"] ?? "LIAGToken";
        o.Events.OnRedirectToLogin = ctx => { ctx.Response.StatusCode = 401; return Task.CompletedTask; };
        o.Events.OnRedirectToAccessDenied = ctx => { ctx.Response.StatusCode = 403; return Task.CompletedTask; };
    });
builder.Services.AddAuthorization();

builder.Services.AddHttpClient<ICoreClient, CoreClient>(c =>
{
    c.BaseAddress = new Uri(builder.Configuration["Services:CoreUrl"] ?? "http://core-api:8080");
    c.DefaultRequestHeaders.Add("X-Internal-Key", builder.Configuration["Internal:Key"] ?? "");
});

builder.Services.AddScoped<AchievementsService>();

var app = builder.Build();

using (var scope = app.Services.CreateScope())
{
    // Przy pierwszym uruchomieniu tworzy tabele i wstawia katalog osiągnięć (HasData z AchievementSeeder)
    scope.ServiceProvider.GetRequiredService<AchievementsDbContext>().Database.EnsureCreated();
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
