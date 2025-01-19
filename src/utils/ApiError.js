class ApiError extends Error {
    /**
     * Custom error class for handling API errors.
     * @param {number} statusCode - HTTP status code for the error.
     * @param {string} [message="Something went wrong"] - Error message.
     * @param {Array} [errors=[]] - Additional error details (e.g., validation errors).
     * @param {string} [stack=""] - Optional stack trace for debugging.
     */
    constructor(statusCode, message = "Something went wrong", errors = [], stack = "") {
      super(message);
  
      // Set custom properties
      this.statusCode = statusCode; // HTTP status code
      this.data = null; // Placeholder for additional error-related data
      this.errors = errors; // Array of error details
      this.message = message; // Error message
      this.success = false; // Flag indicating the request was unsuccessful
  
      // Set or capture the stack trace
      if (stack) {
        this.stack = stack; // Use provided stack trace
      } else {
        Error.captureStackTrace(this, this.constructor); // Capture stack trace
      }
    }
  }
  
  export default ApiError;
  