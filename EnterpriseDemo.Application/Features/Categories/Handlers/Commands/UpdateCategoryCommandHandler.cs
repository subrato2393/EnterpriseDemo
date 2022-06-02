using AutoMapper;
using EnterpriseDemo.Application.DTOs.Category.Validators;
using EnterpriseDemo.Application.Exceptions;
using EnterpriseDemo.Application.Contracts.Persistence;
using EnterpriseDemo.Domain;
using MediatR;
using EnterpriseDemo.Application.Features.Categories.Requests.Commands;

namespace EnterpriseDemo.Application.Features.Categories.Handlers.Commands
{
    public class UpdateCategoryCommandHandler : IRequestHandler<UpdateCategoryCommand, Unit>
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public UpdateCategoryCommandHandler(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        public async Task<Unit> Handle(UpdateCategoryCommand request, CancellationToken cancellationToken)
        {
            var validator = new UpdateCategoryDtoValidator();
            var validationResult = await validator.ValidateAsync(request.CategoryDto);

            if (validationResult.IsValid == false)
                throw new ValidationException(validationResult);

            var Category = await _unitOfWork.Repository<Category>().Get(request.CategoryDto.CategoryId);

            if (Category is null)
                throw new NotFoundException(nameof(Category), request.CategoryDto.CategoryId);

            _mapper.Map(request.CategoryDto, Category);

            await _unitOfWork.Repository<Category>().Update(Category);
            await _unitOfWork.Save();

            return Unit.Value;
        }
    }
}
