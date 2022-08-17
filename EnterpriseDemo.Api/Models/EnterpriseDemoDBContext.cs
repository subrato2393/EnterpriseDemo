using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace EnterpriseDemo.Api.Models
{
    public partial class EnterpriseDemoDBContext : DbContext
    {
        public EnterpriseDemoDBContext()
        {
        }

        public EnterpriseDemoDBContext(DbContextOptions<EnterpriseDemoDBContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Acceptance> Acceptances { get; set; }
        public virtual DbSet<Category> Categories { get; set; }
        public virtual DbSet<Product> Products { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=DESKTOP-NPQJR1U;Database=EnterpriseDemoDB;user id=sa;password=B@ngl@d3sh;Trusted_Connection=true;MultipleActiveResultSets=true;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Acceptance>(entity =>
            {
                entity.ToTable("Acceptance");

                entity.Property(e => e.AcceptanceName).HasMaxLength(450);

                entity.Property(e => e.Code).HasMaxLength(450);

                entity.Property(e => e.Name).HasMaxLength(450);

                entity.Property(e => e.Price).HasMaxLength(450);

                entity.HasOne(d => d.Category)
                    .WithMany(p => p.Acceptances)
                    .HasForeignKey(d => d.CategoryId)
                    .HasConstraintName("FK_Acceptance_Category");
            });

            modelBuilder.Entity<Category>(entity =>
            {
                entity.ToTable("Category");

                entity.Property(e => e.Name).HasMaxLength(450);
            });

            modelBuilder.Entity<Product>(entity =>
            {
                entity.ToTable("Product");

                entity.Property(e => e.Code).HasMaxLength(450);

                entity.Property(e => e.Name).HasMaxLength(450);

                entity.Property(e => e.Qty).HasMaxLength(450);

                entity.HasOne(d => d.Category)
                    .WithMany(p => p.Products)
                    .HasForeignKey(d => d.CategoryId)
                    .HasConstraintName("FK_Product_Category");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
