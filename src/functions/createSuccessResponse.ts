import { ResponseDto } from "../types/ResponseDto";
import { SuccessStatus } from "../types/SuccessStatus";

export function createSuccessResponse(message: any, status: SuccessStatus = 200): ResponseDto {
  return { success: true, message, status };
}