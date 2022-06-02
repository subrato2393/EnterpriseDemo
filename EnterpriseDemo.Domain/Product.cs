using System;
using System.Collections.Generic;
using EnterpriseDemo.Domain.Common;

namespace EnterpriseDemo.Domain
{
    public  class Product 
    {
        public int ProductId { get; set; }
        public string? Name { get; set; }
        public string? Code { get; set; }
        public string? Qty { get; set; }
        public double? Price { get; set; }
        public int? Status { get; set; }
        public int? CategoryId { get; set; }

        public virtual Category? Category { get; set; }
    }
}
