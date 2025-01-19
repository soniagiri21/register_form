/**
 * Wraps an asynchronous route handler to catch errors and pass them to Express error-handling middleware.
 * 
 * @param {Function} requestHandler - The asynchronous route handler function to be wrapped.
 * @returns {Function} - A middleware function that automatically handles promise rejections.
 * 
 * This utility function helps avoid repetitive `try-catch` blocks in route handlers by catching
 * any errors thrown in asynchronous code and passing them to the `next` function.
 * 
 * Example Usage:
 * router.get('/route', asyncHandler(async (req, res, next) => {
 *   const data = await someAsyncOperation();
 *   res.json(data);
 * }));
 */
const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    // Resolve the promise returned by the handler and catch any errors
    Promise.resolve(requestHandler(req, res, next)).catch(next);
  };
};

export { asyncHandler };
