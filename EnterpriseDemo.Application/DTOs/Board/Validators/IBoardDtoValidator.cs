using FluentValidation;
using EnterpriseDemo.Application.DTOs.Board;
using System;
using System.Collections.Generic;
using System.Text;

namespace EnterpriseDemo.Application.DTOs.Board.Validators
{
    public class IBoardDtoValidator : AbstractValidator<IBoardDto>
    {
        public IBoardDtoValidator()
        {
            RuleFor(p => p.BoardName)
                .NotEmpty().WithMessage("{PropertyName} is required.")
                .NotNull()
                .MaximumLength(50).WithMessage("{PropertyName} must not exceed {ComparisonValue} characters.");

            
        }
    }
}
