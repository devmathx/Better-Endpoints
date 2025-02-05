import 'reflect-metadata';
import { CustomApiError } from "../classes/CustomApiError";
import { Options } from '../types/Options';
import { ResponseDto } from '../types/ResponseDto';

export function ApiResponse(options?: Options): MethodDecorator {
  return function (
    target: Object,
    propertyKey: string | symbol,
    descriptor: TypedPropertyDescriptor<any>
  ): void | TypedPropertyDescriptor<any> {
    const originalMethod = descriptor.value;

    descriptor.value = async function (...args: any[]): Promise<ResponseDto> {
      try {
        const data = await originalMethod.apply(this, args);

        return {
          success: true,
          status: options?.onSuccess?.status ?? 200,
          message: options?.onSuccess?.message ?? data,
        };
      } catch (error) {
        if (error instanceof CustomApiError) {
          return {
            success: false,
            status: options?.onError?.status ?? error.code,
            message: options?.onError?.message ?? error.message,
          };
        }

        if (options?.enableDebug) {
          console.log("ApiResponse Decorator catch:");
          console.log(error);
        }

        return {
          success: false,
          status: options?.onError?.status ?? 500,
          message: options?.onError?.message ?? "Internal Server Error",
        };
      }
    };

    return descriptor;
  };
}
