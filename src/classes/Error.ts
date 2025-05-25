import { CustomApiError } from "./CustomApiError";

/**
 * ***Better Endpoints***
 * ### Error 400 - Bad Request
 * The request is invalid or malformed.
 * @param message - Optional custom error message. Defaults to 'Bad Request'.
 * @example throw new Error400('User not found');
 */
export class Error400 extends CustomApiError {
  constructor(message?: string) {
    super(400, message || 'Bad Request');
  }
}

/**
 * ***Better Endpoints***
 * ### Error 401 - Authentication Error
 * Authentication is required or has failed.
 * @param message - Optional custom error message. Defaults to 'Authentication Error'.
 * @example throw new Error401('Invalid credentials');
 */
export class Error401 extends CustomApiError {
  constructor(message?: string) {
    super(401, message || 'Authentication Error');
  }
}

/**
 * ***Better Endpoints***
 * ### Error 403 - Access Denied
 * The client does not have permission to access the resource.
 * @param message - Optional custom error message. Defaults to 'Access Denied'.
 * @example throw new Error403('User does not have access');
 */
export class Error403 extends CustomApiError {
  constructor(message?: string) {
    super(403, message || 'Access Denied');
  }
}

/**
 * ***Better Endpoints***
 * ### Error 404 - Resource Not Found
 * The requested resource could not be found.
 * @param message - Optional custom error message. Defaults to 'Resource Not Found'.
 * @example throw new Error404('User not found');
 */
export class Error404 extends CustomApiError {
  constructor(message?: string) {
    super(404, message || 'Resource Not Found');
  }
}

/**
 * ***Better Endpoints***
 * ### Error 408 - Request Timeout
 * The server timed out waiting for the request.
 * @param message - Optional custom error message. Defaults to 'Request Timeout'.
 * @example throw new Error408('Request took too long to complete');
 */
export class Error408 extends CustomApiError {
  constructor(message?: string) {
    super(408, message || 'Request Timeout');
  }
}

/**
 * ***Better Endpoints***
 * ### Error 409 - Data Conflict
 * The request conflicts with the current state of the resource.
 * @param message - Optional custom error message. Defaults to 'Data Conflict'.
 * @example throw new Error409('Conflict with existing data');
 */
export class Error409 extends CustomApiError {
  constructor(message?: string) {
    super(409, message || 'Data Conflict');
  }
}

/**
 * ***Better Endpoints***
 * ### Error 410 - Resource Gone
 * The resource requested is no longer available.
 * @param message - Optional custom error message. Defaults to 'Resource Gone'.
 * @example throw new Error410('Resource has been permanently removed');
 */
export class Error410 extends CustomApiError {
  constructor(message?: string) {
    super(410, message || 'Resource Gone');
  }
}

/**
 * ***Better Endpoints***
 * ### Error 415 - Unsupported Media Type
 * The media type of the request is not supported by the server.
 * @param message - Optional custom error message. Defaults to 'Unsupported Media Type'.
 * @example throw new Error415('Media type not supported');
 */
export class Error415 extends CustomApiError {
  constructor(message?: string) {
    super(415, message || 'Unsupported Media Type');
  }
}

/**
 * ***Better Endpoints***
 * ### Error 422 - Unprocessable Entity
 * The server understands the request but cannot process it.
 * @param message - Optional custom error message. Defaults to 'Unprocessable Entity'.
 * @example throw new Error422('Validation failed for the request data');
 */
export class Error422 extends CustomApiError {
  constructor(message?: string) {
    super(422, message || 'Unprocessable Entity');
  }
}

/**
 * ***Better Endpoints***
 * ### Error 426 - Upgrade Required
 * The client must upgrade to a different protocol.
 * @param message - Optional custom error message. Defaults to 'Upgrade Required'.
 * @example throw new Error426('Please upgrade your client to continue');
 */
export class Error426 extends CustomApiError {
  constructor(message?: string) {
    super(426, message || 'Upgrade Required');
  }
}

/**
 * ***Better Endpoints***
 * ### Error 429 - Too Many Requests
 * The user has sent too many requests in a given amount of time.
 * @param message - Optional custom error message. Defaults to 'Too Many Requests. Please try again later'.
 * @example throw new Error429('Rate limit exceeded');
 */
export class Error429 extends CustomApiError {
  constructor(message?: string) {
    super(429, message || 'Too Many Requests. Please try again later');
  }
}

/**
 * ***Better Endpoints***
 * ### Error 451 - Unavailable For Legal Reasons
 * The resource is unavailable due to legal restrictions.
 * @param message - Optional custom error message. Defaults to 'Unavailable For Legal Reasons'.
 * @example throw new Error451('Content blocked for legal reasons');
 */
export class Error451 extends CustomApiError {
  constructor(message?: string) {
    super(451, message || 'Unavailable For Legal Reasons');
  }
}

/**
 * ***Better Endpoints***
 * ### Error 500 - Internal Server Error
 * A generic error occurred on the server.
 * @param message - Optional custom error message. Defaults to 'Internal Server Error'.
 * @example throw new Error500('Unexpected error');
 */
export class Error500 extends CustomApiError {
  constructor(message?: string) {
    super(500, message || 'Internal Server Error');
  }
}

/**
 * ***Better Endpoints***
 * ### Error 502 - Bad Gateway
 * The server received an invalid response from the upstream server.
 * @param message - Optional custom error message. Defaults to 'Bad Gateway'.
 * @example throw new Error502('Upstream server returned invalid response');
 */
export class Error502 extends CustomApiError {
  constructor(message?: string) {
    super(502, message || 'Bad Gateway');
  }
}

/**
 * ***Better Endpoints***
 * ### Error 503 - Service Unavailable
 * The server is temporarily unavailable or overloaded.
 * @param message - Optional custom error message. Defaults to 'Service Unavailable'.
 * @example throw new Error503('Server temporarily unavailable');
 */
export class Error503 extends CustomApiError {
  constructor(message?: string) {
    super(503, message || 'Service Unavailable');
  }
}

/**
 * ***Better Endpoints***
 * ### Error 504 - Gateway Timeout
 * The upstream server failed to send a request in time.
 * @param message - Optional custom error message. Defaults to 'Gateway Timeout'.
 * @example throw new Error504('Upstream server timed out');
 */
export class Error504 extends CustomApiError {
  constructor(message?: string) {
    super(504, message || 'Gateway Timeout');
  }
}

/**
 * ***Better Endpoints***
 * ### Error 507 - Insufficient Storage
 * The server is unable to store the representation needed to complete the request.
 * @param message - Optional custom error message. Defaults to 'Insufficient Storage'.
 * @example throw new Error507('Not enough storage to complete request');
 */
export class Error507 extends CustomApiError {
  constructor(message?: string) {
    super(507, message || 'Insufficient Storage');
  }
}
