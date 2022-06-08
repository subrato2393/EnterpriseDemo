namespace EnterpriseDemo.Application.DTOs.Product
{
    public class ProductDto : IProductDto
    {
        public int ProductId { get; set; }
        public string? Name { get; set; }
        public string? Code { get; set; }
        public string? Qty { get; set; }
        public double? Price { get; set; } 
        public int? Status { get; set; } 
        public int? CategoryId { get; set; }
        public string? CategoryName { get; set; }
    }
}
