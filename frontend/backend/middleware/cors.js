import cors from "cors";

/**
 * Returns a CORS middleware
 *
 * @return {function} middleware for Express
 */
const corsMiddleware = () => {
  return cors({
    allowedHeaders: corsMiddleware.allowedHeaders,
    methods: corsMiddleware.allowedMethods,
  });
};

corsMiddleware.allowedHeaders = [
  "Content-Type",
  "X-AuthKey",
  "X-AuthToken",
  "X-Requested-With",
  "Authorization",
];

corsMiddleware.allowedMethods = [
  "GET",
  "POST",
  "PATCH",
  "DELETE",
  "HEAD",
  "OPTIONS",
];

export default corsMiddleware;
