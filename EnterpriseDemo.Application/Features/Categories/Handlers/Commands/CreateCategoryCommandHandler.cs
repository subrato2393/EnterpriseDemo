using AutoMapper;
using EnterpriseDemo.Application.DTOs.Category.Validators;
using EnterpriseDemo.Application.Contracts.Persistence;
using EnterpriseDemo.Domain;
using MediatR;
using EnterpriseDemo.Application.Responses;
using EnterpriseDemo.Application.Features.Categories.Requests.Commands;

namespace EnterpriseDemo.Application.Features.Categories.Handlers.Commands
{
    public class CreateCategoryCommandHandler : IRequestHandler<CreateCategoryCommand, BaseCommandResponse>
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public CreateCategoryCommandHandler(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        public async Task<BaseCommandResponse> Handle(CreateCategoryCommand request, CancellationToken cancellationToken)
        {
            var response = new BaseCommandResponse();
            var validator = new CreateCategoryDtoValidator();
            var validationResult = await validator.ValidateAsync(request.CategoryDto);

            if (validationResult.IsValid == false)
            {
                response.Success = false;
                response.Message = "Creation Failed";
                response.Errors = validationResult.Errors.Select(q => q.ErrorMessage).ToList();
            }
            else 
            {
                var category = _mapper.Map<Category>(request.CategoryDto);

                category = await _unitOfWork.Repository<Category>().Add(category);
                try
                {
                    await _unitOfWork.Save();
                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex.ToString());
                }

                response.Success = true;
                response.Message = "Creation Successful";
                response.Id = category.CategoryId;
            }

            return response;
        }
    }
}
