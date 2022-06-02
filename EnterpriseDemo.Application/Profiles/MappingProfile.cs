﻿using AutoMapper;
using EnterpriseDemo.Domain;
using EnterpriseDemo.Application.DTOs.Board;
using EnterpriseDemo.Application.DTOs.Category;

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
        }
    }

}