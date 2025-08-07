using System.Net;

namespace Server.Utilities
{
    public class ServiceResult<T>
    {
        public bool IsSuccess { get; set; }
        public string? Message { get; set; }
        public HttpStatusCode StatusCode { get; set; }
        public T? Data { get; set; }

        public static ServiceResult<T> Success(T data, string? message = null, HttpStatusCode statusCode = HttpStatusCode.OK) =>
            new ServiceResult<T> { IsSuccess = true, Data = data, Message = message, StatusCode = statusCode };

        public static ServiceResult<T> Fail(string message, HttpStatusCode statusCode = HttpStatusCode.BadRequest) =>
            new ServiceResult<T> { IsSuccess = false, Message = message, StatusCode = statusCode };
    }
}
