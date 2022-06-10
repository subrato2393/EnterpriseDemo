using MediatR;
using EnterpriseDemo.Application.Contracts.Persistence;
using EnterpriseDemo.Application.Features.Products.Requests.Queries;
using EnterpriseDemo.Domain;
using EnterpriseDemo.Shared.Models;

namespace EnterpriseDemo.Application.Features.Products.Handlers.Queries
{
    public class GetSelectedProductRequestHandler : IRequestHandler<GetSelectedProductRequest, List<SelectedModel>>
    {
        private readonly IEnterpriseDemoRepository<Product> _productRepository;


        public GetSelectedProductRequestHandler(IEnterpriseDemoRepository<Product> productRepository)
        {
            _productRepository = productRepository;
        } 

        public async Task<List<SelectedModel>> Handle(GetSelectedProductRequest request, CancellationToken cancellationToken)
        {
            ICollection<Product> products = await _productRepository.FilterAsync(x => x.ProductId>0);
            List<SelectedModel> selectModels = products.Select(x => new SelectedModel
            {
                Text = x.Name, 
                Value = x.ProductId
            }).ToList();
            return selectModels;
        }
    }
}
