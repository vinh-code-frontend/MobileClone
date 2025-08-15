using Microsoft.AspNetCore.Mvc;
using Server.DTOs.BrandDTOs;
using Server.Interfaces;
using Server.Utilities;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BrandController : ControllerBase
    {
        private readonly IBrandService _brandService;
        public BrandController(IBrandService brandService)
        {
            _brandService = brandService;
        }

        [HttpGet("GetBrands")]
        public async Task<IActionResult> GetBrands()
        {
            // This is a placeholder for the actual implementation.
            // You would typically fetch the brands from a database or service.
            var brands = new[] { "Brand1", "Brand2", "Brand3" };
            return Ok(brands);
        }
        // GET: api/<BrandController>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<BrandController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<BrandController>
        [HttpPost("Add")]
        public async Task<IActionResult> AddBrand(BrandAddRequestDTO brandAddRequestDTO)
        {
            ServiceResult<bool> result = await _brandService.AddBrandAsync(brandAddRequestDTO);
            if (!result.IsSuccess)
            {
                return StatusCode((int)result.StatusCode, new { result.Message });
            }
            return StatusCode((int)result.StatusCode, result.Data);
        }

        // PUT api/<BrandController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<BrandController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
