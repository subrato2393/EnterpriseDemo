using EnterpriseDemo.Application;
using EnterpriseDemo.Application.DTOs.Acceptance;
using EnterpriseDemo.Application.Features.Acceptances.Requests.Commands;
using EnterpriseDemo.Application.Responses;

namespace EnterpriseDemo.Api.Controllers;

[Route(SMSRoutePrefix.Acceptance)]
[ApiController]
public class AcceptanceController : ControllerBase
{
    private readonly IMediator _mediator;

    public AcceptanceController(IMediator mediator)
    {
        _mediator = mediator;
    }

    [HttpPost]
    [ProducesResponseType(200)]
    [ProducesResponseType(400)]
    [Route("save-acceptance-list")]
    public async Task<ActionResult<BaseCommandResponse>> Post([FromBody] CreateAcceptanceListDto acceptance)
    {
        var command = new CreateAcceptanceCommand 
        { 
            AcceptanceListDto = acceptance 
        };
        var response = await _mediator.Send(command);
        return Ok(response);
    }
}

