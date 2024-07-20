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

builder.Services.AddIdentity<User, IdentityRole>()
  .AddEntityFrameworkStores<LiagDbContext>()
  .AddSignInManager<SignInManager<User>>();

builder.Services.AddScoped<IAuthService, AuthService>();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
  app.UseSwagger();
  app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();