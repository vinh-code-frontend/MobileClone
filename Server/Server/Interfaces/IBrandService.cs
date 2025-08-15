using Microsoft.AspNetCore.Mvc;
using Server.DTOs.BrandDTOs;
using Server.Utilities;

namespace Server.Interfaces
{
    public interface IBrandService
    {
        Task<ServiceResult<List<string>>> GetBrandsAsync(
            [FromQuery] string? filter,
            [FromQuery] string? select,
            [FromQuery] string? orderby,
            [FromQuery] int? top,
            [FromQuery] int? skip
        );
        Task<ServiceResult<bool>> AddBrandAsync(BrandAddRequestDTO brandAddRequestDTO);
    }
}
