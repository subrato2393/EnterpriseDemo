using AutoMapper;
using EnterpriseDemo.Application.DTOs.Acceptance;
using EnterpriseDemo.Application.Contracts.Persistence;
using MediatR;
using EnterpriseDemo.Application.Features.Acceptances.Requests.Queries;

namespace EnterpriseDemo.Application.Features.Acceptances.Handlers.Queries
{
    public class GetAcceptanceDetailRequestHandler : IRequestHandler<GetAcceptanceDetailRequest, AcceptanceDto>
    {
        // private readonly IAcceptanceRepository _AcceptanceRepository;
        private readonly IMapper _mapper;
        private readonly IEnterpriseDemoRepository<EnterpriseDemo.Domain.Acceptance> _AcceptanceRepository;
        public GetAcceptanceDetailRequestHandler(IEnterpriseDemoRepository<EnterpriseDemo.Domain.Acceptance> AcceptanceRepository, IMapper mapper)
        {
            _AcceptanceRepository = AcceptanceRepository;
            _mapper = mapper;
        }
        public async Task<AcceptanceDto> Handle(GetAcceptanceDetailRequest request, CancellationToken cancellationToken)
        {
            var Acceptance = await _AcceptanceRepository.Get(request.AcceptanceId);
            return _mapper.Map<AcceptanceDto>(Acceptance);
        }
    }
}
