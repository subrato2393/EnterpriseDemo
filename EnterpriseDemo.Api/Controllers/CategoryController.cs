using EnterpriseDemo.Application;
using EnterpriseDemo.Application.DTOs.Category;
using EnterpriseDemo.Application.DTOs.Common;
using EnterpriseDemo.Application.Features.Categories.Requests.Commands;
using EnterpriseDemo.Application.Features.Categories.Requests.Queries;
using EnterpriseDemo.Application.Responses;
using EnterpriseDemo.Shared.Models;

namespace EnterpriseDemo.Api.Controllers;

[Route(SMSRoutePrefix.Category)]
[ApiController]
public class CategoryController : ControllerBase
{
    private readonly IMediator _mediator;

    public CategoryController(IMediator mediator)
    {
        _mediator = mediator;
    }
     
    [HttpGet]
    [Route("get-categories")]
    public async Task<ActionResult<List<CategoryDto>>> Get([FromQuery] QueryParams queryParams)
    {
        var categories = await _mediator.Send(new GetCategoryListRequest { QueryParams = queryParams });
        return Ok(categories);
    }


    [HttpGet]
    [Route("get-categorydetail/{id}")]
    public async Task<ActionResult<CategoryDto>> Get(int id)
    {
        var categories = await _mediator.Send(new GetCategoryDetailRequest { CategoryId = id });
        return Ok(categories);
    }

    [HttpPost]
    [ProducesResponseType(200)]
    [ProducesResponseType(400)]
    [Route("save-category")]
    public async Task<ActionResult<BaseCommandResponse>> Post([FromBody] CreateCategoryDto category)
    {
        var command = new CreateCategoryCommand { CategoryDto = category };
        var response = await _mediator.Send(command);
        return Ok(response);
    }

    [HttpPut]
    [ProducesResponseType(StatusCodes.Status204NoContent)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    [ProducesDefaultResponseType]
    [Route("update-category/{id}")]
    public async Task<ActionResult> Put([FromBody] CategoryDto category)
    {
        var command = new UpdateCategoryCommand { CategoryDto = category };
        await _mediator.Send(command);
        return NoContent();
    }

    [HttpDelete]
    [ProducesResponseType(StatusCodes.Status204NoContent)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    [ProducesDefaultResponseType]
    [Route("delete-category/{id}")]
    public async Task<ActionResult> Delete(int id)
    {
        var command = new DeleteCategoryCommand { CategoryId = id };
        await _mediator.Send(command);
        return NoContent();
    }

    // relational data

    [HttpGet]
    [Route("get-selectedcategories")]
    public async Task<ActionResult<List<SelectedModel>>> GetSelectedCategory()
    {
        var selectedCategory = await _mediator.Send(new GetSelectedCategoryRequest { });
        return Ok(selectedCategory);
    }
}

