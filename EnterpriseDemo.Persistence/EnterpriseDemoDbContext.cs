using EnterpriseDemo.Domain;
using Microsoft.EntityFrameworkCore;

namespace EnterpriseDemo.Persistence
{
    public class EnterpriseDemoDbContext : AuditableDbContext
    {
        public EnterpriseDemoDbContext(DbContextOptions<EnterpriseDemoDbContext> options)
            : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Board>(entity =>
            {

            });
            modelBuilder.Entity<Category>(entity =>
            {
             
            });

            modelBuilder.Entity<Product>(entity =>
            {
                entity.HasOne(d => d.Category)
                    .WithMany(p => p.Products)
                    .HasForeignKey(d => d.CategoryId)
                    .HasConstraintName("FK_Product_Category");
            });

        }
        public virtual DbSet<Board> Boards { get; set; } = null!;
        public virtual DbSet<Category> Category { get; set; } = null!;
        public virtual DbSet<Product> Product { get; set; } = null!;
    } 
}
