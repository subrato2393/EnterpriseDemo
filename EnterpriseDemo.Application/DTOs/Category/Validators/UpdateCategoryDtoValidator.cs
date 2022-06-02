using FluentValidation;
using System;
using System.Collections.Generic;
using System.Text;

namespace EnterpriseDemo.Application.DTOs.Category.Validators
{
    public class UpdateCategoryDtoValidator : AbstractValidator<CategoryDto>
    {
        public UpdateCategoryDtoValidator()
        {
            Include(new ICategoryDtoValidator());

            RuleFor(p => p.CategoryId).NotNull().WithMessage("{PropertyName} must be present");
        }
    }
}
