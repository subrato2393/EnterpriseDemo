using AutoMapper;
using EnterpriseDemo.Domain;
using EnterpriseDemo.Application.DTOs.Board;
using EnterpriseDemo.Application.DTOs.Category;
using EnterpriseDemo.Application.DTOs.Product;

namespace EnterpriseDemo.Application.Profiles
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            #region Board Mappings
            CreateMap<Board, BoardDto>().ReverseMap();
            CreateMap<Board, CreateBoardDto>().ReverseMap();
            #endregion
             
            #region Category Mappings
            CreateMap<Category, CategoryDto>().ReverseMap();
            CreateMap<Category, CreateCategoryDto>().ReverseMap();
            #endregion

            #region Product Mappings
            CreateMap<Product, ProductDto>().ReverseMap();
            CreateMap<Product, CreateProductDto>().ReverseMap();
            #endregion
        }
    }

}
