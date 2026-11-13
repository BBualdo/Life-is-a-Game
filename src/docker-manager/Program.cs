using System.Net;
using System.Security.Cryptography;
using System.Text;
using DockerManager;
using Microsoft.OpenApi.Models;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(o =>
{
    o.AddSecurityDefinition("ApiKey", new OpenApiSecurityScheme
    {
        Name = "X-Api-Key", In = ParameterLocation.Header, Type = SecuritySchemeType.ApiKey
    });
    o.AddSecurityRequirement(new OpenApiSecurityRequirement
    {
        {
            new OpenApiSecurityScheme { Reference = new OpenApiReference { Type = ReferenceType.SecurityScheme, Id = "ApiKey" } },
            Array.Empty<string>()
        }
    });
});

builder.Services.AddSingleton<DockerApi>();
builder.Services.AddSingleton<ManagerService>();

var app = builder.Build();

var apiKey = app.Configuration["MANAGER_API_KEY"]
             ?? throw new InvalidOperationException("Brak zmiennej MANAGER_API_KEY");

app.UseSwagger();
app.UseSwaggerUI();
app.UseDefaultFiles();
app.UseStaticFiles();

app.Use(async (ctx, next) =>
{
    if (ctx.Request.Path.StartsWithSegments("/api"))
    {
        var provided = ctx.Request.Headers["X-Api-Key"].ToString();
        var ok = CryptographicOperations.FixedTimeEquals(Encoding.UTF8.GetBytes(provided), Encoding.UTF8.GetBytes(apiKey));
        if (!ok)
        {
            ctx.Response.StatusCode = StatusCodes.Status401Unauthorized;
            await ctx.Response.WriteAsync("Unauthorized: brak lub zły X-Api-Key");
            return;
        }
    }
    await next();
});

app.Use(async (ctx, next) =>
{
    try { await next(); }
    catch (NotManagedException ex)     { ctx.Response.StatusCode = 403; await ctx.Response.WriteAsync(ex.Message); }
    catch (ArgumentException ex)       { ctx.Response.StatusCode = 400; await ctx.Response.WriteAsync(ex.Message); }
    catch (DockerApiException ex)      { ctx.Response.StatusCode = (int)ex.Status; await ctx.Response.WriteAsync(ex.Message); }
    catch (HttpRequestException ex)    { ctx.Response.StatusCode = 502; await ctx.Response.WriteAsync($"Brak połączenia z Docker API: {ex.Message}"); }
});

var api = app.MapGroup("/api");

api.MapGet("/info", (ManagerService m) => m.InfoAsync());
api.MapGet("/containers", (ManagerService m) => m.ListAsync());
api.MapGet("/containers/{id}", (string id, ManagerService m) => m.InspectAsync(id));
api.MapPost("/containers/{id}/start",   async (string id, ManagerService m) => { await m.StartAsync(id);   return Results.NoContent(); });
api.MapPost("/containers/{id}/stop",    async (string id, ManagerService m) => { await m.StopAsync(id);    return Results.NoContent(); });
api.MapPost("/containers/{id}/restart", async (string id, ManagerService m) => { await m.RestartAsync(id); return Results.NoContent(); });
api.MapGet("/containers/{id}/logs", async (string id, int? tail, ManagerService m) =>
    Results.Text(await m.LogsAsync(id, tail ?? 100), "text/plain"));
api.MapGet("/containers/{id}/stats", (string id, ManagerService m) => m.StatsAsync(id));
api.MapPost("/containers/{id}/limits", async (string id, int memoryMb, ManagerService m) =>
{
    await m.SetMemoryLimitAsync(id, memoryMb);
    return Results.NoContent();
});
api.MapPost("/services/{name}/scale", (string name, int replicas, ManagerService m) => m.ScaleAsync(name, replicas));

api.MapGet("/events", async (HttpContext ctx, ManagerService m) =>
{
    ctx.Response.Headers.ContentType = "text/event-stream";
    ctx.Response.Headers.CacheControl = "no-cache";
    await m.StreamEventsAsync(async line =>
    {
        await ctx.Response.WriteAsync($"data: {line}\n\n", ctx.RequestAborted);
        await ctx.Response.Body.FlushAsync(ctx.RequestAborted);
    }, ctx.RequestAborted);
});

app.MapGet("/healthz", () => "ok");

app.Run();
