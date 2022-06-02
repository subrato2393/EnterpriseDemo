using MediatR;
using EnterpriseDemo.Application.Contracts.Persistence;
using EnterpriseDemo.Application.Features.Boards.Requests.Queries;
using EnterpriseDemo.Domain;
using EnterpriseDemo.Shared.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace EnterpriseDemo.Application.Features.Boards.Handlers.Queries
{
    public class GetSelectedBoardRequestHandler : IRequestHandler<GetSelectedBoardRequest, List<SelectedModel>>
    {
        private readonly IEnterpriseDemoRepository<Board> _BoardRepository;


        public GetSelectedBoardRequestHandler(IEnterpriseDemoRepository<Board> BoardRepository)
        {
            _BoardRepository = BoardRepository;
        }

        public async Task<List<SelectedModel>> Handle(GetSelectedBoardRequest request, CancellationToken cancellationToken)
        {
            ICollection<Board> codeValues = await _BoardRepository.FilterAsync(x => x.IsActive);
            List<SelectedModel> selectModels = codeValues.Select(x => new SelectedModel
            {
                Text = x.BoardName,
                Value = x.BoardId
            }).ToList();
            return selectModels;
        }
    }
}
