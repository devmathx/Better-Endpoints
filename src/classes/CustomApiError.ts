import { ApiError } from "../interfaces/IApiError";

/**
 * ***Better Endpoints***
 * 
 * Base class for custom API errors.
 * 
 * Extends the native Error class to include an HTTP status code.
 *
 * @class `CustomApiError`
 * @implements `ApiError`
 *
 * @param {number} code - The HTTP status code associated with the error.
 * @param {string} message - The error message describing the problem.
 *
 * @example
 * throw new CustomApiError(400, 'Bad Request');
 */
export class CustomApiError extends Error implements ApiError {
  public code: number;

  constructor(code: number, message: string) {
    super(message);
    this.code = code;
    Error.captureStackTrace(this, this.constructor);
  }
}