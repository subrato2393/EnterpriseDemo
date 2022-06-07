using EnterpriseDemo.Application;
using EnterpriseDemo.Application.DTOs.Product;
using EnterpriseDemo.Application.DTOs.Common;
using EnterpriseDemo.Application.Features.Products.Requests.Commands;
using EnterpriseDemo.Application.Features.Products.Requests.Queries;
using EnterpriseDemo.Application.Responses;
using EnterpriseDemo.Shared.Models;

namespace EnterpriseDemo.Api.Controllers;

[Route(SMSRoutePrefix.Product)]
[ApiController]
public class ProductController : ControllerBase
{
    private readonly IMediator _mediator;

    public ProductController(IMediator mediator)
    {
        _mediator = mediator;
    }

    //[HttpGet]
    //[Route("get-products")]
    //public async Task<ActionResult<List<ProductDto>>> Get([FromQuery] QueryParams queryParams)
    //{
    //    var Products = await _mediator.Send(new GetProductListRequest { QueryParams = queryParams });
    //    return Ok(Products);
    //}

    

    //[HttpGet]
    //[Route("get-productdetail/{id}")]
    //public async Task<ActionResult<ProductDto>> Get(int id)
    //{
    //    var Products = await _mediator.Send(new GetProductDetailRequest { ProductId = id });
    //    return Ok(Products);
    //}

    [HttpPost]
    [ProducesResponseType(200)]
    [ProducesResponseType(400)]
    [Route("save-product-list")]
    public async Task<ActionResult<BaseCommandResponse>> Post([FromBody] CreateProductListDto product)
    {
        var command = new CreateProductCommand 
        { 
            ProductListDto = product
        };
        var response = await _mediator.Send(command);
        return Ok(response);
    }

    //[HttpPut]
    //[ProducesResponseType(StatusCodes.Status204NoContent)]
    //[ProducesResponseType(StatusCodes.Status404NotFound)]
    //[ProducesDefaultResponseType]
    //[Route("update-product/{id}")]
    //public async Task<ActionResult> Put([FromBody] ProductDto Product)
    //{
    //    var command = new UpdateProductCommand { ProductDto = Product };
    //    await _mediator.Send(command);
    //    return NoContent();
    //}

    [HttpDelete]
    [ProducesResponseType(StatusCodes.Status204NoContent)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    [ProducesDefaultResponseType]
    [Route("delete-product/{id}")]
    public async Task<ActionResult> Delete(int id)
    {
        var command = new DeleteProductCommand { ProductId = id };
        await _mediator.Send(command);
        return NoContent();
    }

    // relational data

    [HttpGet]
    [Route("get-selectedproducts")]
    public async Task<ActionResult<List<SelectedModel>>> GetSelectedProduct()
    {
        var selectedProduct = await _mediator.Send(new GetSelectedProductRequest { });
        return Ok(selectedProduct);
    }
}

