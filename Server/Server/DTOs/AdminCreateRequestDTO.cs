using Server.Constants;

namespace Server.DTOs
{
    public class AdminCreateRequestDTO
    {
        public string? Username { get; set; } = string.Empty;
        public string? Name { get; set; } = string.Empty;
        public string? Status { get; set; } = AdminStatus.Pending;
        public string? LoginProvider { get; set; } = AdminLoginProvider.Local;
        public string? Role { get; set; } = AdminRoles.Admin;
        public Guid? AcceptedBy { get; set; }
    }
}
