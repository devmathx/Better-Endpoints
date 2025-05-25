import { SuccessStatus } from "./SuccessStatus";

/**
 * ***Better Endpoints***
 * 
 * ## ResponseDto Type
 * Response Data Transfer Object (DTO) for API responses.
 * 
 * Represents a successful or failed response with status and message.
 *
 * @template T - The type of the success message payload. Defaults to `any`.
 *
 * @example
 * // Successful response example
 * const response: ResponseDto<{ id: number; name: string }> = {
 *   success: true,
 *   message: { id: 1, name: 'John' },
 *   status: 200,
 * };
 *
 * @example
 * // Failed response example
 * const errorResponse: ResponseDto = {
 *   success: false,
 *   message: 'Not Found',
 *   status: 404,
 * };
 */
export type ResponseDto<T = any> = {
  success: true,
  message: T,
  status: SuccessStatus,
} | {
  success: false,
  message: string,
  status: number,
};
