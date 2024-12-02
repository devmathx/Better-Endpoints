import 'reflect-metadata';
import { CustomApiError } from "../classes/CustomApiError";
import Response from "../types/response";

type Options = {
  onSuccess: { status: 200 | 201 | 202 };
  onError: { message: string };
};

export function ApiResponse(options?: Options): MethodDecorator {
  return function (
    target: Object,
    propertyKey: string | symbol,
    descriptor: TypedPropertyDescriptor<any>
  ): void | TypedPropertyDescriptor<any> {
    const originalMethod = descriptor.value;

    descriptor.value = async function (...args: any[]): Promise<Response> {
      try {
        const data = await originalMethod.apply(this, args);

        return {
          success: true,
          status: options?.onSuccess.status ?? 200,
          message: data,
        };
      } catch (error) {
        if (error instanceof CustomApiError) {
          return {
            success: false,
            status: error.code,
            message: error.message,
          };
        }

        return {
          success: false,
          status: 500,
          message: options?.onError.message ?? "Internal Server Error",
        };
      }
    };

    return descriptor;
  };
}
