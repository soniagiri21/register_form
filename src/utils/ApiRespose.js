/**
 * ApiResponse class is used to standardize the response structure for API endpoints.
 * It helps in providing consistent and clear responses from your API.
 */
class ApiResponse {
    /**
     * Constructor for creating an API response object.
     * 
     * @param {number} statusCode - The HTTP status code (e.g., 200, 404).
     * @param {any} data - The actual data to be sent in the response body.
     * @param {string} [message="Success"] - An optional message that gives more information about the response.
     */
    constructor(statusCode, data, message = "Success") {
      // Set the status code for the response
      this.statusCode = statusCode;
  
      // Set the data that will be included in the response body
      this.data = data;
  
      // Set a message that describes the status of the response (default to "Success")
      this.message = message;
  
      // Set the success property based on the status code (this could be modified based on logic)
      // It's often used to indicate if the request was successful (200-299 range) or failed
      this.success = statusCode >= 200 && statusCode < 300;
    }
  }
  
  // Export the ApiResponse class for use in other parts of the application
  export { ApiResponse };
  