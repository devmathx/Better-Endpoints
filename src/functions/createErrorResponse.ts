import { ResponseDto } from "../types/ResponseDto";

/**
 * ***Better Endpoints***
 * 
 * Creates a standardized error response.
 *
 * @param {string} message - The error message to describe what went wrong.
 * @param {number} [status=500] - The HTTP status code for the error. Defaults to 500 (Internal Server Error).
 * @returns {ResponseDto} The error response object.
 *
 * @example
 * return createErrorResponse('User not found', 404);
 */
export function createErrorResponse(message: string, status = 500): ResponseDto {
  return { success: false, message, status};
}