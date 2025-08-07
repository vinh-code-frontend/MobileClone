using Server.Constants;

namespace Server.DTOs
{
    public class AdminLoginResponseDTO
    {
        public Guid Id { get; set; }
        public string Username { get; set; } = string.Empty;
        public string? Name { get; set; }
        public string Status { get; set; } = AdminStatus.Pending;
        public string? LoginProvider { get; set; } = AdminLoginProvider.Local;
        public string AccessToken { get; set; } = string.Empty;
        public double ExpiresInHours { get; set; }
    }
}
