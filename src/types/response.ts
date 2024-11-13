type Response<T = any> = {
  success: true,
  message: T,
  status: 200 | 201 | 202,
} | {
  success: false,
  message: string,
  status: number,
  errors?: string[],
}

export default Response;