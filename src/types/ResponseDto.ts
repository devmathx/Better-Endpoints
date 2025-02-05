import { SuccessStatus } from "./SuccessStatus";

export type ResponseDto<T = any> = {
  success: true,
  message: T,
  status: SuccessStatus,
} | {
  success: false,
  message: string,
  status: number,
};