using AutoMapper;
using EnterpriseDemo.Application.DTOs.Category;
using EnterpriseDemo.Application.Contracts.Persistence;
using MediatR;
using EnterpriseDemo.Application.Features.Categories.Requests.Queries;
using EnterpriseDemo.Domain;

namespace EnterpriseDemo.Application.Features.Categories.Handlers.Queries
{
    public class GetCategoryDetailRequestHandler : IRequestHandler<GetCategoryDetailRequest, CategoryDto>
    {
        private readonly IMapper _mapper;
        private readonly IEnterpriseDemoRepository<Category> _categoryRepository;
        public GetCategoryDetailRequestHandler(IEnterpriseDemoRepository<Category>  categoryRepository, IMapper mapper)
        {
            _categoryRepository = categoryRepository;
            _mapper = mapper;
        }
        public async Task<CategoryDto> Handle(GetCategoryDetailRequest request, CancellationToken cancellationToken)
        {
            var category = await _categoryRepository.Get(request.CategoryId);
            return _mapper.Map<CategoryDto>(category);
        }
    }
}
