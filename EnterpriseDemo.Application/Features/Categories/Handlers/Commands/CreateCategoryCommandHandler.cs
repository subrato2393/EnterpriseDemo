using AutoMapper;
using EnterpriseDemo.Application.DTOs.Category.Validators;
using EnterpriseDemo.Application.Exceptions;
using EnterpriseDemo.Application.Contracts.Persistence;
using EnterpriseDemo.Domain;
using MediatR;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using EnterpriseDemo.Application.Responses; 
using System.Linq;
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
                var Category = _mapper.Map<Category>(request.CategoryDto);

                Category = await _unitOfWork.Repository<Category>().Add(Category);
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
                response.Id = Category.CategoryId;
            }

            return response;
        }
    }
}
