using AutoMapper;
using EnterpriseDemo.Application.DTOs.Product;
using EnterpriseDemo.Application.Features.Products.Requests.Queries;
using EnterpriseDemo.Application.Contracts.Persistence;
using MediatR;
using EnterpriseDemo.Domain;

namespace EnterpriseDemo.Application.Features.Products.Handlers.Queries
{
    public class GetProductDetailRequestHandler : IRequestHandler<GetProductDetailRequest, ProductDto>
    {
        private readonly IMapper _mapper;
        private readonly IEnterpriseDemoRepository<Product> _productRepository;
        public GetProductDetailRequestHandler(IEnterpriseDemoRepository<Product> productRepository, IMapper mapper)
        {
            _productRepository = productRepository;
            _mapper = mapper;
        }
        public async Task<ProductDto> Handle(GetProductDetailRequest request, CancellationToken cancellationToken)
        {
            var Product = await _productRepository.Get(request.ProductId);
            return _mapper.Map<ProductDto>(Product);
        }
    }
}
