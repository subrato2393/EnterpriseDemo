using FluentValidation;

namespace EnterpriseDemo.Application.DTOs.Product.Validators
{
    public class IProductDtoValidator : AbstractValidator<IProductDto>
    {
        public IProductDtoValidator()
        {
            RuleFor(p => p.Name)
                .NotEmpty().WithMessage("{PropertyName} is required.")
                .NotNull()
                .MaximumLength(50).WithMessage("{PropertyName} must not exceed {ComparisonValue} characters.");

            
        }
    }
}
