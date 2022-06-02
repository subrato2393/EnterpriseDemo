using MediatR;
using EnterpriseDemo.Application.Contracts.Persistence;
using EnterpriseDemo.Domain;
using EnterpriseDemo.Shared.Models;
using EnterpriseDemo.Application.Features.Categories.Requests.Queries;

namespace EnterpriseDemo.Application.Features.Categories.Handlers.Queries
{
    public class GetSelectedCategoryRequestHandler : IRequestHandler<GetSelectedCategoryRequest, List<SelectedModel>>
    {
        private readonly IEnterpriseDemoRepository<Category> _CategoryRepository;


        public GetSelectedCategoryRequestHandler(IEnterpriseDemoRepository<Category> CategoryRepository)
        {
            _CategoryRepository = CategoryRepository;
        }

        public async Task<List<SelectedModel>> Handle(GetSelectedCategoryRequest request, CancellationToken cancellationToken)
        {
            ICollection<Category> codeValues = await _CategoryRepository.FilterAsync(x => x.CategoryId>0);
            List<SelectedModel> selectModels = codeValues.Select(x => new SelectedModel
            {
                Text = x.Name,
                Value = x.CategoryId
            }).ToList();
            return selectModels;
        }
    }
}
