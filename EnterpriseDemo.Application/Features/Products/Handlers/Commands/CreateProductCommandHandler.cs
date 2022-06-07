using AutoMapper;
using EnterpriseDemo.Application.DTOs.Product.Validators;
using EnterpriseDemo.Application.Features.Products.Requests.Commands;
using EnterpriseDemo.Application.Contracts.Persistence;
using EnterpriseDemo.Domain;
using MediatR;
using EnterpriseDemo.Application.Responses;

namespace EnterpriseDemo.Application.Features.Products.Handlers.Commands
{
    public class CreateProductCommandHandler : IRequestHandler<CreateProductCommand, BaseCommandResponse>
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public CreateProductCommandHandler(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        public async Task<BaseCommandResponse> Handle(CreateProductCommand request, CancellationToken cancellationToken)
        {
            var response = new BaseCommandResponse();
            var productList = request.ProductListDto;

            var products = productList.Product.Select(x => new Product()
            {
                CategoryId=productList.CategoryId,
                ProductId = productList.ProductId.Value,
                Code = x.Code,
                Name=x.Name,
                Price=x.Price,
                Qty=x.Qty,
                Status=0
            });

            await _unitOfWork.Repository<Product>().AddRangeAsync(products);
            await _unitOfWork.Save();

            return response;
        }
    }
}
