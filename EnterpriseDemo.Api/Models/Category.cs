using System;
using System.Collections.Generic;

namespace EnterpriseDemo.Api.Models
{
    public partial class Category
    {
        public Category()
        {
            Acceptances = new HashSet<Acceptance>();
            Products = new HashSet<Product>();
        }

        public int CategoryId { get; set; }
        public string Name { get; set; }

        public virtual ICollection<Acceptance> Acceptances { get; set; }
        public virtual ICollection<Product> Products { get; set; }
    }
}
