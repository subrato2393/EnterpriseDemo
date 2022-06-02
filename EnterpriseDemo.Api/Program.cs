using EnterpriseDemo.Api.Extensions;
using EnterpriseDemo.Api.Middleware;
using EnterpriseDemo.Application;
using EnterpriseDemo.Identity;
using EnterpriseDemo.Persistence;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;


var builder = WebApplication.CreateBuilder(args);

// add service to container

builder.Services.AddHttpContextAccessor();

builder.Services.ConfigureApplicationServices();
builder.Services.ConfigureInfrastructureServices(builder.Configuration);
builder.Services.ConfigurePersistenceServices(builder.Configuration);
builder.Services.ConfigureIdentityServices(builder.Configuration);
builder.Services.AddSwaggerDocumentation();
builder.Services.AddControllers().AddNewtonsoftJson();

builder.Services.AddCors(o =>
{
    o.AddPolicy("CorsPolicy",
        builder => builder.AllowAnyOrigin()
        .AllowAnyMethod()
        .AllowAnyHeader());
});

// configure the http request pipeline
var app = builder.Build();
//if (env.IsDevelopment())
//{
//    app.UseDeveloperExceptionPage();
//}

app.UseMiddleware<ExceptionMiddleware>();

//app.UseAuthentication();
app.UseSwaggerDocumention();


app.UseDefaultFiles();
app.UseStaticFiles();
//app.UseStaticFiles(new StaticFileOptions
//{
//    FileProvider = new PhysicalFileProvider(
//                 Path.Combine(Directory.GetCurrentDirectory(), "Content")
//             ),
//    RequestPath = "/content"
//});
//app.MapFallbackToController("Index", "Fallback");
//app.UseAuthorization();

app.UseCors("CorsPolicy");

app.UseHttpsRedirection();

app.MapControllers();

await app.RunAsync();



