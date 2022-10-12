using Microsoft.EntityFrameworkCore;
using System.Diagnostics.CodeAnalysis;

namespace BlogApp.Models
{
    public class BlogAppContext : DbContext
    {
        public BlogAppContext(DbContextOptions<BlogAppContext> options)
            : base(options)
        {
        }

        public DbSet<BlogAppItems> BlogAppItems { get; set; } = null!;
    }
}