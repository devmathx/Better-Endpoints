import 'reflect-metadata';
import { CustomApiError } from "../classes/CustomApiError";
import { Options } from '../types/Options';
import { ResponseDto } from '../types/ResponseDto';

/**
 * ***Better Endpoints***
 * 
 * ## ApiResponse Decorator
 * Standardizes the API response format for the decorated method.
 *
 * Automatically wraps the method's response in a consistent structure, handling both success and error cases.
 * Useful for controllers in APIs to ensure a unified response format without repetitive try-catch blocks.
 *
 * - On success, returns `{ success: true, status, message }`.
 * - On error, catches exceptions and returns `{ success: false, status, message }`.
 * - Supports custom HTTP status codes and messages for both success and error cases.
 * - Logs error details if `enableDebug` is enabled.
 *
 * @param {Options} [options] - Optional settings to customize success and error handling.
 *
 * @returns {MethodDecorator} The method decorator.
 */
export function ApiResponse(options?: Options): MethodDecorator {
  return function (
    target: Object,
    propertyKey: string | symbol,
    descriptor: TypedPropertyDescriptor<any>
  ): void | TypedPropertyDescriptor<any> {
    const originalMethod = descriptor.value;

    descriptor.value = async function (...args: any[]): Promise<ResponseDto> {
      let response: ResponseDto;

      try {
        const data = await originalMethod.apply(this, args);

        response = {
          success: true,
          status: options?.onSuccess?.status ?? 200,
          message: options?.onSuccess?.message ?? data,
        };
      } catch (error) {
        if (options?.enableDebug) {
          console.log("ApiResponse Decorator catch:");
          console.log(error);
        }

        if (error instanceof CustomApiError) {
          response = {
            success: false,
            status: options?.onError?.status ?? error.code,
            message: options?.onError?.message ?? error.message,
          };
        } else {
          response = {
            success: false,
            status: options?.onError?.status ?? 500,
            message: options?.onError?.message ?? "Internal Server Error",
          };
        }
      }

      if (options?.enableDebug) {
        console.log("ApiResponse Decorator Return:");
        console.log(response);
      }

      return response;
    };

    return descriptor;
  };
}
