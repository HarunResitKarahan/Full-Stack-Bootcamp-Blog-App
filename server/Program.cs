using Microsoft.EntityFrameworkCore;
using BlogApp.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddDbContext<BlogAppContext>(opt =>
    opt.UseInMemoryDatabase("BlogAppList"));
//builder.Services.AddSwaggerGen(c =>
//{
//    c.SwaggerDoc("v1", new() { Title = "TodoApi", Version = "v1" });
//});
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
// builder.Services.AddEndpointsApiExplorer();
// builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
    // app.UseSwagger();
    // app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
