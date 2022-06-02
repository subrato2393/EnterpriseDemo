using EnterpriseDemo.Identity.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using EnterpriseDemo.Identity.Configurations;

namespace EnterpriseDemo.Identity
{
    public class EnterpriseDemoIdentityDbContext : IdentityDbContext<ApplicationUser>
    {
        public EnterpriseDemoIdentityDbContext(DbContextOptions<EnterpriseDemoIdentityDbContext> options)
            : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.ApplyConfiguration(new RoleConfiguration());
            modelBuilder.ApplyConfiguration(new UserConfiguration());
            modelBuilder.ApplyConfiguration(new UserRoleConfiguration());
        }
    }
}
