using AutoMapper;
using EnterpriseDemo.Application.DTOs.Category;
using EnterpriseDemo.Application.Contracts.Persistence;
using MediatR;
using EnterpriseDemo.Application.Features.Categories.Requests.Queries;

namespace EnterpriseDemo.Application.Features.Categories.Handlers.Queries
{
    public class GetCategoryDetailRequestHandler : IRequestHandler<GetCategoryDetailRequest, CategoryDto>
    {
       // private readonly ICategoryRepository _CategoryRepository;
        private readonly IMapper _mapper;
        private readonly IEnterpriseDemoRepository<EnterpriseDemo.Domain.Category> _CategoryRepository;
        public GetCategoryDetailRequestHandler(IEnterpriseDemoRepository<EnterpriseDemo.Domain.Category>  CategoryRepository, IMapper mapper)
        {
            _CategoryRepository = CategoryRepository;
            _mapper = mapper;
        }
        public async Task<CategoryDto> Handle(GetCategoryDetailRequest request, CancellationToken cancellationToken)
        {
            var Category = await _CategoryRepository.Get(request.CategoryId);
            return _mapper.Map<CategoryDto>(Category);
        }
    }
}
