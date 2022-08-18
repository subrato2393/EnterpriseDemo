using AutoMapper;
using EnterpriseDemo.Application.DTOs.Product.Validators;
using EnterpriseDemo.Application.Exceptions;
using EnterpriseDemo.Application.Features.Products.Requests.Commands;
using EnterpriseDemo.Application.Contracts.Persistence;
using EnterpriseDemo.Domain;
using MediatR;

namespace EnterpriseDemo.Application.Features.Products.Handlers.Commands
{
    public class UpdateProductCommandHandler : IRequestHandler<UpdateProductCommand, Unit>
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public UpdateProductCommandHandler(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        public async Task<Unit> Handle(UpdateProductCommand request, CancellationToken cancellationToken)
        {
            var validator = new UpdateProductDtoValidator();
            var validationResult = await validator.ValidateAsync(request.ProductDto);

            if (validationResult.IsValid == false)
                throw new ValidationException(validationResult);

            var product = await _unitOfWork.Repository<Product>().Get(request.ProductDto.ProductId);

            if (product is null)
                throw new NotFoundException(nameof(product), request.ProductDto.ProductId);

            _mapper.Map(request.ProductDto, product);

            await _unitOfWork.Repository<Product>().Update(product);
            await _unitOfWork.Save();

            return Unit.Value;
        }
    }
}
