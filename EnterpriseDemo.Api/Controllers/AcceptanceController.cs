using EnterpriseDemo.Application;
using EnterpriseDemo.Application.DTOs.Acceptance;
using EnterpriseDemo.Application.DTOs.Common;
using EnterpriseDemo.Application.Features.Acceptances.Requests.Commands;
using EnterpriseDemo.Application.Features.Acceptances.Requests.Queries;
using EnterpriseDemo.Application.Responses;
using EnterpriseDemo.Shared.Models;

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

    [HttpGet]
    [Route("get-acceptances")]
    public async Task<ActionResult<List<AcceptanceDto>>> Get([FromQuery] QueryParams queryParams)
    {
        var Acceptances = await _mediator.Send(new GetAcceptanceListRequest { QueryParams = queryParams });
        return Ok(Acceptances);
    } 
      
    //[HttpGet]
    //[Route("get-acceptances-by-categoryid")]
    //public async Task<ActionResult<List<AcceptanceDto>>> GetAcceptanceByCategoryId(int categoryId)
    //{
    //    var Acceptances = await _mediator.Send(new GetAcceptancesByCategoryIdRequest
    //    {
    //        CategoryId = categoryId
    //    }); 
    //    return Ok(Acceptances);
    //}

    [HttpGet]
    [Route("get-acceptancedetail/{id}")]
    public async Task<ActionResult<AcceptanceDto>> Get(int id)
    {
        var Acceptances = await _mediator.Send(new GetAcceptanceDetailRequest { AcceptanceId = id });
        return Ok(Acceptances);
    }

    [HttpPost]
    [ProducesResponseType(200)]
    [ProducesResponseType(400)]
    [Route("save-acceptance-list")]
    public async Task<ActionResult<BaseCommandResponse>> Post([FromBody] CreateAcceptanceListDto Acceptance)
    {
        var command = new CreateAcceptanceCommand 
        { 
            AcceptanceListDto = Acceptance
        };
        var response = await _mediator.Send(command);
        return Ok(response);
    }

    [HttpPut]
    [ProducesResponseType(StatusCodes.Status204NoContent)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    [ProducesDefaultResponseType]
    [Route("update-acceptance/{id}")]
    public async Task<ActionResult> Put([FromBody] AcceptanceDto Acceptance)
    {
        var command = new UpdateAcceptanceCommand { AcceptanceDto = Acceptance };
        await _mediator.Send(command);
        return NoContent();
    }

    [HttpDelete]
    [ProducesResponseType(StatusCodes.Status204NoContent)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    [ProducesDefaultResponseType]
    [Route("delete-acceptance/{id}")]
    public async Task<ActionResult> Delete(int id)
    {
        var command = new DeleteAcceptanceCommand { AcceptanceId = id };
        await _mediator.Send(command);
        return NoContent();
    }

    // relational data

    [HttpGet]
    [Route("get-selectedAcceptances")]
    public async Task<ActionResult<List<SelectedModel>>> GetSelectedAcceptance()
    {
        var selectedAcceptance = await _mediator.Send(new GetSelectedAcceptanceRequest { });
        return Ok(selectedAcceptance);
    }
}

