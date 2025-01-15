export type SuccessStatus = 200 | 201 | 202;

export type Response<T = any> = {
  success: true,
  message: T,
  status: SuccessStatus,
} | {
  success: false,
  message: string,
  status: number,
  errors?: string[],
}