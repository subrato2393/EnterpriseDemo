using FluentValidation;
using System;
using System.Collections.Generic;
using System.Text;

namespace EnterpriseDemo.Application.DTOs.Acceptance.Validators
{
    public class UpdateAcceptanceDtoValidator : AbstractValidator<AcceptanceDto>
    {
        public UpdateAcceptanceDtoValidator()
        {
            Include(new IAcceptanceDtoValidator());

            RuleFor(p => p.AcceptanceId).NotNull().WithMessage("{PropertyName} must be present");
        }
    }
}
