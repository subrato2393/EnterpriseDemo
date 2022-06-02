﻿using System;
using System.Collections.Generic;
using EnterpriseDemo.Domain.Common;

namespace EnterpriseDemo.Domain
{
    public class Category
    {
        public Category()
        {
            Products = new HashSet<Product>();
        }

        public int CategoryId { get; set; }
        public string? Name { get; set; }

        public virtual ICollection<Product> Products { get; set; }
    }
}
