using AutoMapper;
using EnterpriseDemo.Application.DTOs.Board;
using EnterpriseDemo.Application.Features.Boards.Requests.Queries;
using EnterpriseDemo.Application.Contracts.Persistence;
using MediatR;
using System.Threading;
using System.Threading.Tasks;

namespace EnterpriseDemo.Application.Features.Boards.Handlers.Queries
{
    public class GetBoardDetailRequestHandler : IRequestHandler<GetBoardDetailRequest, BoardDto>
    {
       // private readonly IBoardRepository _BoardRepository;
        private readonly IMapper _mapper;
        private readonly IEnterpriseDemoRepository<EnterpriseDemo.Domain.Board> _BoardRepository;
        public GetBoardDetailRequestHandler(IEnterpriseDemoRepository<EnterpriseDemo.Domain.Board>  BoardRepository, IMapper mapper)
        {
            _BoardRepository = BoardRepository;
            _mapper = mapper;
        }
        public async Task<BoardDto> Handle(GetBoardDetailRequest request, CancellationToken cancellationToken)
        {
            var Board = await _BoardRepository.Get(request.BoardId);
            return _mapper.Map<BoardDto>(Board);
        }
    }
}
