using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Server.Constants;
using Server.Data;
using Server.DTOs;
using Server.Interfaces;
using Server.Models;
using Server.Utilities;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly IAdminService _adminService;

        public AdminController(AppDbContext context, IAdminService adminService)
        {
            _context = context;
            _adminService = adminService;
        }
        [HttpPost("login")]
        public async Task<IActionResult> Login(AdminLoginRequestDTO adminLoginRequestDTO)
        {
            ServiceResult<AdminLoginResponseDTO> result = await _adminService.LoginAsync(adminLoginRequestDTO);
            if (!result.IsSuccess)
            {
                return StatusCode((int)result.StatusCode, new { result.Message });
            }

            return StatusCode((int)result.StatusCode, result.Data);
        }
        [HttpPost("create")]
        public async Task<IActionResult> Create(AdminCreateRequestDTO dto)
        {
            ServiceResult<AdminUser> result = await _adminService.CreateAdminAsync(dto);

            if (!result.IsSuccess)
            {
                return StatusCode((int)result.StatusCode, new { result.Message });
            }

            return StatusCode((int)result.StatusCode, result.Data);
        }
        // GET: api/<AdminController>
        [Authorize(Roles = AdminRoles.GlobalAdmin)]
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            return Ok("You are Global Admin!");
        }
        // GET api/<AdminController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<AdminController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<AdminController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<AdminController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
