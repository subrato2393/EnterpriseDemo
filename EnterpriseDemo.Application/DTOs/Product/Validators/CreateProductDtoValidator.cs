using FluentValidation;

namespace EnterpriseDemo.Application.DTOs.Product.Validators
{
    public class CreateProductDtoValidator : AbstractValidator<CreateProductDto>
    {
        public CreateProductDtoValidator()
        {
            Include(new IProductDtoValidator());
        }
    }
}
