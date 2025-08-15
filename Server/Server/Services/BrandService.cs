using Microsoft.AspNetCore.Mvc;
using Server.DTOs.BrandDTOs;
using Server.Interfaces;
using Server.Utilities;
using Server.Models;
using Server.Data;

namespace Server.Services
{
    public class BrandService : IBrandService
    {
        private readonly AppDbContext _context;
        public BrandService(AppDbContext context)
        {
            _context = context;
        }
        public async Task<ServiceResult<bool>> AddBrandAsync(BrandAddRequestDTO brandAddRequestDTO)
        {
            if(brandAddRequestDTO == null)
            {
                return ServiceResult<bool>.Fail("Brand data is required", System.Net.HttpStatusCode.BadRequest);
            }
            if(brandAddRequestDTO.Name == null || brandAddRequestDTO.Name.Trim() == "")
            {
                return ServiceResult<bool>.Fail("Brand name is required", System.Net.HttpStatusCode.BadRequest);
            }
            if (brandAddRequestDTO.Slug == null || brandAddRequestDTO.Slug.Trim() == "")
            {
                return ServiceResult<bool>.Fail("Slug is required", System.Net.HttpStatusCode.BadRequest);
            }
            Brand brand = new Brand
            {
                Id = Guid.NewGuid(),
                Name = brandAddRequestDTO.Name.Trim(),
                Slug = brandAddRequestDTO.Slug.Trim(),
                LogoUrl = brandAddRequestDTO.LogoUrl?.Trim(),   
                Description = brandAddRequestDTO.Description?.Trim(),
                WebsiteUrl = brandAddRequestDTO.WebsiteUrl?.Trim(),
                Country = brandAddRequestDTO.Country?.Trim(),
                IsActive = brandAddRequestDTO.IsActive,
                CreatedAt = DateTime.UtcNow,
                UpdatedAt = DateTime.UtcNow
            };
            await _context.Brands.AddAsync(brand);
            await _context.SaveChangesAsync();
            return ServiceResult<bool>.Success(true, "Brand created successfully");
        }

        public async Task<ServiceResult<List<string>>> GetBrandsAsync(
            [FromQuery] string? filter,
            [FromQuery] string? select,
            [FromQuery] string? orderby,
            [FromQuery] int? top,
            [FromQuery] int? skip)
        {
            throw new NotImplementedException();
        }
    }
}
