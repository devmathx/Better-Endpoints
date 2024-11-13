import { ApiError } from "../interfaces/IApiError";

export class CustomApiError extends Error implements ApiError {
  public code: number;

  constructor(code: number, message: string) {
    super(message);
    this.code = code;
    Error.captureStackTrace(this, this.constructor);
  }
}