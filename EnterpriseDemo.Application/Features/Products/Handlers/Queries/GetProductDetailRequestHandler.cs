using AutoMapper;
using EnterpriseDemo.Application.DTOs.Product;
using EnterpriseDemo.Application.Features.Products.Requests.Queries;
using EnterpriseDemo.Application.Contracts.Persistence;
using MediatR;

namespace EnterpriseDemo.Application.Features.Products.Handlers.Queries
{
    //public class GetProductDetailRequestHandler : IRequestHandler<GetProductDetailRequest, ProductDto>
    //{
    //   // private readonly IProductRepository _ProductRepository;
    //    private readonly IMapper _mapper;
    //    private readonly IEnterpriseDemoRepository<EnterpriseDemo.Domain.Product> _ProductRepository;
    //    public GetProductDetailRequestHandler(IEnterpriseDemoRepository<EnterpriseDemo.Domain.Product>  ProductRepository, IMapper mapper)
    //    {
    //        _ProductRepository = ProductRepository;
    //        _mapper = mapper;
    //    }
    //    public async Task<ProductDto> Handle(GetProductDetailRequest request, CancellationToken cancellationToken)
    //    {
    //        var Product = await _ProductRepository.Get(request.ProductId);
    //        return _mapper.Map<ProductDto>(Product);
    //    }
    //}
}
