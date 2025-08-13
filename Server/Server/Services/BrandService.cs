using Microsoft.AspNetCore.Mvc;
using Server.Interfaces;
using Server.Utilities;

namespace Server.Services
{
    public class BrandService : IBrandService
    {
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
