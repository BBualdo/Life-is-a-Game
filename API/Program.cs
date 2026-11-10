using Contracts;
using Data;
using Data.Models;
using Microsoft.AspNetCore.DataProtection;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Repository;
using Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<LiagDbContext>(options =>
  options.UseNpgsql(builder.Configuration.GetConnectionString("Db")));

var dataProtection = builder.Services.AddDataProtection().SetApplicationName("liag");
var keysPath = builder.Configuration["DataProtection:KeysPath"];
if (!string.IsNullOrEmpty(keysPath)) dataProtection.PersistKeysToFileSystem(new DirectoryInfo(keysPath));

builder.Services.AddAuthentication();

builder.Services.AddIdentity<User, IdentityRole>(options =>
  {
    options.User.RequireUniqueEmail = true;
    options.User.AllowedUserNameCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-._@+ ";
  })
  .AddEntityFrameworkStores<LiagDbContext>()
  .AddSignInManager<SignInManager<User>>()
  .AddTokenProvider<DataProtectorTokenProvider<User>>(TokenOptions.DefaultProvider);

var sameSite = Enum.Parse<SameSiteMode>(builder.Configuration["Auth:SameSite"] ?? "None");
var securePolicy = Enum.Parse<CookieSecurePolicy>(builder.Configuration["Auth:SecurePolicy"] ?? "Always");

builder.Services.ConfigureApplicationCookie(options =>
{
  options.Cookie.HttpOnly = false;
  options.Cookie.SecurePolicy = securePolicy;
  options.Cookie.SameSite = sameSite;
  options.Cookie.Name = "LIAGToken";
  options.ExpireTimeSpan = TimeSpan.FromMinutes(60);
  options.SlidingExpiration = true;
  options.Events.OnRedirectToLogin = ctx =>
  {
    ctx.Response.StatusCode = 401;
    return Task.CompletedTask;
  };
  options.Events.OnRedirectToAccessDenied = ctx =>
  {
    ctx.Response.StatusCode = 403;
    return Task.CompletedTask;
  };
});

builder.Services.AddHttpClient();

builder.Services.AddScoped<IAchievementsRepository, AchievementsRepository>();
builder.Services.AddScoped<IMissionsRepository, MissionsRepository>();
builder.Services.AddScoped<ISubtasksRepository, SubtasksRepository>();
builder.Services.AddScoped<IErrorLogsRepository, ErrorLogsRepository>();
builder.Services.AddScoped<IAuthService, AuthService>();
builder.Services.AddScoped<IGithubService, GithubService>();
builder.Services.AddScoped<IFacebookService, FacebookService>();
builder.Services.AddScoped<IGoogleService, GoogleService>();
builder.Services.AddScoped<IAchievementsService, AchievementsService>();
builder.Services.AddScoped<IMissionsService, MissionsService>();
builder.Services.AddScoped<ISubtasksService, SubtasksService>();
builder.Services.AddScoped<ILevelsService, LevelsService>();
builder.Services.AddScoped<IProfileService, ProfileService>();
builder.Services.AddScoped<ILogsService, LogsService>();
builder.Services.AddScoped<IEmailService, AzureEmailService>();

builder.Services.AddCors(options =>
  options.AddPolicy("default", policyBuilder => 
    policyBuilder.AllowCredentials().AllowAnyHeader().AllowAnyMethod().WithOrigins("http://localhost:3000"))
  );

var app = builder.Build();

using (var scope = app.Services.CreateScope())
{
  var dbContext = scope.ServiceProvider.GetRequiredService<LiagDbContext>();
  dbContext.Database.EnsureCreated();
}

app.Services.GetRequiredService<IDataProtectionProvider>().CreateProtector("warmup").Protect("x");

if (app.Environment.IsDevelopment())
{
  app.UseSwagger();
  app.UseSwaggerUI();
}

app.Use(async (ctx, next) =>
{
  ctx.Response.Headers["X-Instance"] = Environment.MachineName;
  await next();
});

// app.UseHttpsRedirection();

app.UseCors("default");

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.MapGet("/healthz", () => "ok");

app.Run();