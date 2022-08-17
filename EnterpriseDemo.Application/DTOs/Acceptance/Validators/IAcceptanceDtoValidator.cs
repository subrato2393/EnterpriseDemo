using FluentValidation;

namespace EnterpriseDemo.Application.DTOs.Acceptance.Validators
{
    public class IAcceptanceDtoValidator : AbstractValidator<IAcceptanceDto>
    {
        public IAcceptanceDtoValidator()
        {
            //RuleFor(p => p.AcceptanceId)
            //    .NotEmpty().WithMessage("{PropertyName} is required.")
            //    .NotNull()
            //    .MaximumLength(50).WithMessage("{PropertyName} must not exceed {ComparisonValue} characters.");


        }
    }
}
