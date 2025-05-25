import { SuccessStatus } from "./SuccessStatus";

/**
 * ***Better Endpoints***
 * 
 * Options to customize the behavior of the ApiResponse decorator.
 *
 * @param {object} [onSuccess] - Customizes the success response.
 * @param {SuccessStatus} [onSuccess.status] - HTTP status code for success. Defaults to 200.
 * @param {string} [onSuccess.message] - Custom success message. If not provided, the return value of the function is used.
 *
 * @param {object} [onError] - Customizes the error response.
 * @param {number} [onError.status] - HTTP status code for errors. Defaults to the error code or 500.
 * @param {string} [onError.message] - Custom error message. If not provided, the error message from the exception is used.
 *
 * @param {boolean} [enableDebug] - If true, logs error details to the console when an exception occurs.
 */
export type Options = {
  onSuccess?: { status?: SuccessStatus, message?: string };
  onError?: { status?: number, message?: string };
  enableDebug?: boolean,
};