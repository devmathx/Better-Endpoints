  # _Better Endpoints_

A TypeScript library to simplify API response handling and manage custom HTTP errors. It provides an `ApiResponse` decorator to format success and error responses consistently, along with specific error classes for each HTTP status code.

## Installation

To add the library to your project:

```bash
npm install better-endpoints
```

## Usage

### 1. Decorator @ApiResponse

The `ApiResponse` decorator simplifies API response handling by defining a standard format for successful responses and automatically capturing errors, ensuring consistent responses.

```typescript
import { ApiResponse } from 'better-endpoints';

class ExampleController {
  @ApiResponse()
  async getData() {
    // Logic for the method returning data
    return { id: 1, name: 'Example' };
  }
}
```

When the getData method is successfully executed, it will return an object in the following format:

```bash
{
  "success": true,
  "status": 200,
  "message": { "id": 1, "name": "Example" }
}
```

In case of an error, `ApiResponse` captures the error and returns a standardized response.

### 2. Handling HTTP Errors
The library provides specific error classes for HTTP statuses, allowing you to throw errors with predefined status codes and messages. These errors are automatically captured by the `ApiResponse` decorator.

Example:

```typescript
import { Error404, Error500 } from 'better-endpoints';

class ExampleController {
  @ApiResponse()
  async fetchResource(id: number) {
    if (!this.resourceExists(id)) {
      throw new Error404('Resource not found');
    }

    try {
      // Logic to fetch resource
      return { id, name: 'Resource' };
    } catch (error) {
      throw new Error500('Internal server error');
    }
  }
}
```

Exemplo de erro:

```bash
{
  "success": false,
  "status": 404,
  "message": "Resource not found"
}
```

### 3. Available Errors
The library includes the following error classes, which can be used to represent specific HTTP errors:

- `Error400` - Bad Request
- `Error401` - Unauthorized
- `Error403` - Forbidden
- `Error404` - Not Found
- `Error409` - Conflict
- `Error429` - Too Many Requests
- `Error500` - Internal Server Error
- `Error502` - Bad Gateway
- `Error503` - Service Unavailable
- `Error504` - Gateway Timeout

## Complete Example

```typescript
import { ApiResponse, Error404, Error500 } from 'better-endpoints';

class ExampleController {

  @ApiResponse({ onSuccess: { status: 200 } })
  async getData(id: number) {
    if (!this.exists(id)) {
      throw new Error404('Resource not found');
    }

    return this.findData(id);
  }

  private findData(id: number) {
    try {
      return { id, name: 'Resource Name' };
    } catch (error) {
      // Errors can be thrown from anywhere
      throw new Error500();
    }
  }
}

```

## License
MIT