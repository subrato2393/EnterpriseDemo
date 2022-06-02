using System;
using System.Threading.Tasks;

namespace EnterpriseDemo.Application.Contracts.Persistence
{
    public interface IUnitOfWork : IDisposable
    {
        //ILeaveAllocationRepository LeaveAllocationRepository { get; }
        //ILeaveRequestRepository LeaveRequestRepository { get; }
        //ILeaveTypeRepository LeaveTypeRepository { get; }
        IEnterpriseDemoRepository<TEntity> Repository<TEntity>() where TEntity : class;
        Task Save();
    }
}
