import { ResponseDto } from "../types/ResponseDto";

export function createErrorResponse(message: string, status = 500): ResponseDto {
  return { success: false, message, status};
}