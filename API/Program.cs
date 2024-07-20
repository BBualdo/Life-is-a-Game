using Contracts;
using Data;
using Data.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<LiagDbContext>(options =>
  options.UseSqlServer(builder.Configuration.GetConnectionString("Default")));

builder.Services.AddAuthorization();

builder.Services.AddIdentity<User, IdentityRole>(options =>
  {
    options.User.RequireUniqueEmail = true;
  })
  .AddEntityFrameworkStores<LiagDbContext>()
  .AddSignInManager<SignInManager<User>>();

builder.Services.ConfigureApplicationCookie(options =>
{
  options.Cookie.HttpOnly = false;
  options.Cookie.SecurePolicy = CookieSecurePolicy.Always;
  options.Cookie.SameSite = SameSiteMode.None;
  options.Cookie.Name = "LIAGToken";
  options.ExpireTimeSpan = TimeSpan.FromMinutes(60);
  options.SlidingExpiration = true;
});

builder.Services.AddAuthentication();

builder.Services.AddScoped<IAuthService, AuthService>();

builder.Services.AddCors(options =>
  options.AddPolicy("default", policyBuilder => 
    policyBuilder.AllowCredentials().AllowAnyHeader().AllowAnyMethod().WithOrigins("http://localhost:3000"))
  );

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
  app.UseSwagger();
  app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors("default");

app.UseAuthorization();

app.MapControllers();

app.Run();