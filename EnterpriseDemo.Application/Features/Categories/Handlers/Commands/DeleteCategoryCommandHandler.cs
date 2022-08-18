using AutoMapper;
using EnterpriseDemo.Application.Exceptions;
using EnterpriseDemo.Application.Contracts.Persistence;
using EnterpriseDemo.Domain;
using MediatR;
using EnterpriseDemo.Application.Features.Categories.Requests.Commands;

namespace EnterpriseDemo.Application.Features.Categories.Handlers.Commands
{
    public class DeleteCategoryCommandHandler : IRequestHandler<DeleteCategoryCommand>
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public DeleteCategoryCommandHandler(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        public async Task<Unit> Handle(DeleteCategoryCommand request, CancellationToken cancellationToken)
        {
            var category = await _unitOfWork.Repository<Category>().Get(request.CategoryId);

            if (category == null)
                throw new NotFoundException(nameof(category), request.CategoryId);

            await _unitOfWork.Repository<Category>().Delete(category);
            await _unitOfWork.Save();

            return Unit.Value;
        }
    }
}
