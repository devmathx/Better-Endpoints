import { CustomApiError } from "../classes/CustomApiError";
import Response from "../types/response";

type Options = {
  onSuccess: { status: 200 | 201 | 202 },
}

export function ApiResponse(options?: Options): MethodDecorator {
  return function (
    _target: any,
    _propertyKey: string | symbol,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;

    descriptor.value = async function (...args: any[]): Promise<Response> {
      try {
        const data = await originalMethod.apply(this, args);

        return {
          success: true,
          status: options ? options.onSuccess.status : 200,
          message: data,
        }
      } catch (error) { 
        if (error instanceof CustomApiError) {
          return { 
            success: false, 
            status: error.code,
            message: error.message 
          };
        }

        return { 
          success: false, 
          status: 500, 
          message: "Erro interno no servidor" 
        };
      }
    };

    return descriptor;
  };
}