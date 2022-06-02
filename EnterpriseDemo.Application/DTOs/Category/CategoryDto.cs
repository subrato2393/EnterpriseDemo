using EnterpriseDemo.Application.DTOs.Common;
using System;
using System.Collections.Generic;
using System.Text;

namespace EnterpriseDemo.Application.DTOs.Category
{
    public class CategoryDto : ICategoryDto
    {
        public int CategoryId { get; set; }
        public string? Name { get; set; }
    }
}
