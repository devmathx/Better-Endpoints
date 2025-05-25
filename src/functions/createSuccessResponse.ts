import { ResponseDto } from "../types/ResponseDto";
import { SuccessStatus } from "../types/SuccessStatus";

/**
 * ***Better Endpoints***
 * 
 * Creates a standardized success response.
 *
 * @param {any} message - The success message or payload data to return.
 * @param {SuccessStatus} [status=200] - The HTTP status code for success. Defaults to 200 (OK).
 * @returns {ResponseDto} The success response object.
 *
 * @example
 * return createSuccessResponse({ id: 1, name: 'John' }, 200);
 */
export function createSuccessResponse(message: any, status: SuccessStatus = 200): ResponseDto {
  return { success: true, message, status };
}