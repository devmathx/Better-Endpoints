import { SuccessStatus } from "./SuccessStatus";

export type Options = {
  onSuccess?: { status?: SuccessStatus, message?: string };
  onError?: { status?: number, message?: string };
  enableDebug?: boolean,
};