using EnterpriseDemo.Application.Contracts.Persistence;
using EnterpriseDemo.Persistence.Repositories;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace EnterpriseDemo.Persistence
{
    public static class PersistenceServicesRegistration
    {
        public static IServiceCollection ConfigurePersistenceServices(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddDbContext<EnterpriseDemoDbContext>(options =>
               options.UseSqlServer(
                   configuration.GetConnectionString("EnterpriseDemoConnectionString")));


            services.AddScoped(typeof(IEnterpriseDemoRepository<>), typeof(EnterpriseDemoRepository<>));
            services.AddScoped<IUnitOfWork, UnitOfWork>();
            return services;
        }
    }
}
