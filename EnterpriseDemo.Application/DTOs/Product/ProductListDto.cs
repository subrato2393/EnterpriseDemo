namespace EnterpriseDemo.Application.DTOs.Product
{
    public class ProductListDto : IProductDto
    {
        public string? Name { get; set; }
        public string? Code { get; set; }
        public string? Qty { get; set; }
        public double? Price { get; set; }
        public int? Status { get; set; }
    }
}
