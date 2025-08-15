namespace Server.DTOs.BrandDTOs
{
    public class BrandAddRequestDTO
    {
        public string Name { get; set; } = string.Empty;
        public string? WebsiteUrl { get; set; } = string.Empty;
        public string? Description { get; set; } = string.Empty;
        public string? Country { get; set; } = string.Empty;
        public bool IsActive { get; set; } = true;
        public string Slug { get; set; } = string.Empty;
        public string? LogoUrl { get; set; }
    }
}
