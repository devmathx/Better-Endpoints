import { CustomApiError } from "./CustomApiError";

export class Error400 extends CustomApiError {
  constructor(message?: string) {
    super(400, message || 'Bad Request');
  }
}

export class Error401 extends CustomApiError {
  constructor(message?: string) {
    super(401, message || 'Authentication Error');
  }
}

export class Error403 extends CustomApiError {
  constructor(message?: string) {
    super(403, message || 'Access Denied');
  }
}

export class Error404 extends CustomApiError {
  constructor(message?: string) {
    super(404, message || 'Resource Not Found');
  }
}

export class Error409 extends CustomApiError {
  constructor(message?: string) {
    super(409, message || 'Data Conflict');
  }
}

export class Error429 extends CustomApiError {
  constructor(message?: string) {
    super(429, message || 'Too Many Requests. Please try again later');
  }
}

export class Error500 extends CustomApiError {
  constructor(message?: string) {
    super(500, message || 'Internal Server Error');
  }
}

export class Error502 extends CustomApiError {
  constructor(message?: string) {
    super(502, message || 'Bad Gateway');
  }
}

export class Error503 extends CustomApiError {
  constructor(message?: string) {
    super(503, message || 'Service Unavailable');
  }
}

export class Error504 extends CustomApiError {
  constructor(message?: string) {
    super(504, message || 'Gateway Timeout');
  }
}
