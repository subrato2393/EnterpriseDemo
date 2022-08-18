using AutoMapper;
using EnterpriseDemo.Application.Exceptions;
using EnterpriseDemo.Application.Features.Products.Requests.Commands;
using EnterpriseDemo.Application.Contracts.Persistence;
using EnterpriseDemo.Domain;
using MediatR;

namespace EnterpriseDemo.Application.Features.Products.Handlers.Commands
{
    public class DeleteProductCommandHandler : IRequestHandler<DeleteProductCommand>
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public DeleteProductCommandHandler(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        } 

        public async Task<Unit> Handle(DeleteProductCommand request, CancellationToken cancellationToken)
        {
            var product = await _unitOfWork.Repository<Product>().Get(request.ProductId);

            if (product == null)
                throw new NotFoundException(nameof(product), request.ProductId);

            await _unitOfWork.Repository<Product>().Delete(product);
            await _unitOfWork.Save();

            return Unit.Value;
        }
    }
}
