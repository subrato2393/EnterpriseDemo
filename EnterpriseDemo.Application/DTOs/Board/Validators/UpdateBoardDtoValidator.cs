using FluentValidation;
using System;
using System.Collections.Generic;
using System.Text;

namespace EnterpriseDemo.Application.DTOs.Board.Validators
{
    public class UpdateBoardDtoValidator : AbstractValidator<BoardDto>
    {
        public UpdateBoardDtoValidator()
        {
            Include(new IBoardDtoValidator());

            RuleFor(p => p.BoardId).NotNull().WithMessage("{PropertyName} must be present");
        }
    }
}
