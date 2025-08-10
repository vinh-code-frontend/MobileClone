using System.ComponentModel.DataAnnotations;

namespace Server.DTOs
{
    public class AdminLoginRequestDTO
    {
        [Required]
        public required string Username { get; set; }
        [Required]
        public required string Password { get; set; }
        [Required]
        public required string Origin { get; set; }
    }
}