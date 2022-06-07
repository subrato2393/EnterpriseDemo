namespace EnterpriseDemo.Application.DTOs.Product
{
    public class CreateProductListDto : IProductDto
    {
        public int? ProductId { get; set; }
        public int? CategoryId { get; set; }
        public List<ProductListDto>? Product { get; set; }
    }
}
