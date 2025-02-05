  # _Better Endpoints_

A TypeScript library to simplify API response handling and manage custom HTTP errors. It provides an `ApiResponse` decorator to format success and error responses consistently, along with specific error classes for each HTTP status code.

## Installation

To add the library to your project:

```bash
npm install better-endpoints
```

## Usage

### 1. Decorator `@ApiResponse`

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

When the `getData` method is successfully executed, it will return an object in the following format:

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

Error example:

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


### 5. Customizing `options`
The `options` parameter for the `ApiResponse` decorator allows you to customize both the success and error responses, including HTTP status codes and messages. You can adjust the `onSuccess` and `onError` properties to define more specific behavior. 

```typescript
import { ApiResponse } from 'better-endpoints';

class ExampleController {
  @ApiResponse({ 
    onSuccess: { status: 201, message: 'Resource created successfully' },
    onError: { message: 'Custom error' }
  })
  async createResource() {
    return { id: 1, name: 'New Resource' };
  }
}
```

In this example:
- The success status is customized to `201` with the message `'Resource created successfully'`.
- The error message is set to `'Custom Error'`.

These customizations take priority over any default error messages that would normally be captured by the decorator.


### 4. Debug Mode
The `ApiResponse` decorator supports an optional debug mode that can be enabled by setting the `enableDebug` property in the `options` parameter. When enabled, any errors caught by the decorator will be logged to the console for easier debugging.

```typescript
import { ApiResponse } from 'better-endpoints';

class ExampleController {
  @ApiResponse({ enableDebug: true })
  async getData() {
    throw new Error('Something went wrong');
  }
}
```


### 6. Manual Response Handling ![NEW](https://img.shields.io/badge/-NEW-green)
In some cases, the `@ApiResponse` decorator might not fit all use cases. To provide more flexibility, _`better-endpoints`_ allows you to manually create responses that follow the same standardized format.

#### ResponseDto Type
All responses, whether handled by the decorator or manually, follow the `ResponseDto` type:

```typescript
type SuccessStatus = 200 | 201 | 202;

export type ResponseDto<T = any> = {
  success: true;
  message: T;
  status: SuccessStatus;
} | {
  success: false;
  message: string;
  status: number;
};
```

This ensures consistency across all responses in your API.

#### Creating Success Responses
To manually generate a success response, use the `createSuccessResponse` function:

```typescript
import { createSuccessResponse } from 'better-endpoints';

const response = createSuccessResponse({ id: 1, name: 'Example' });
console.log(response);
```

Output:

```json
{
  "success": true,
  "message": { "id": 1, "name": "Example" },
  "status": 200
}
```

You can also specify a different status code:

```typescript
const response = createSuccessResponse("Created successfully", 201);
```

#### Creating Error Responses
To generate an error response, use `createErrorResponse`:

```typescript
import { createErrorResponse } from 'better-endpoints';

const response = createErrorResponse("Something went wrong", 500);
console.log(response);
```

Output:

```json
{
  "success": false,
  "message": "Something went wrong",
  "status": 500
}
```

#### Direct Response Objects vs Helper Functions
Instead of using helper functions, you can also return the response object directly:

```typescript
import { ResponseDto } from 'better-endpoints';

const response: ResponseDto<string> = { 
  success: true, 
  message: "Request successful", 
  status: 200 
};

const errorResponse: ResponseDto = { 
  success: false, 
  message: "Something went wrong", 
  status: 500 
};
```

However, to simplify response creation and ensure consistency, use the built-in helper functions.

#### When to Use Manual Responses
Manual responses should be used when:
- The `@ApiResponse` decorator does not fit a specific scenario.
- You need to handle responses outside of a controller method.
- You want to return formatted responses from middleware or services.

#### Example
```typescript
import { createErrorResponse, createSuccessResponse, ResponseDto } from 'better-endpoints';

class UserService {

  async getUser(id: number): Promise<ResponseDto> {
    const user = await this.findUser(id);
    if (!user) {
      return createErrorResponse("User not found", 404)
    }
    
    return createSuccessResponse(user);
  }
}
```


## Examples

### Common use, with debug mode enabled:

```typescript
import { ApiResponse, Error404, Error500 } from 'better-endpoints';

class ExampleController {

  @ApiResponse({ onSuccess: { status: 200 }, enableDebug: true })
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

### Re-throwing errors:
```typescript
import { Error404, Error500 } from 'better-endpoints';

class ExampleService {
  
  async saveData(id: number, data: any) {
    try {
      const resource = await this.findData(id);

      // ...Save data logic

      return 'Data saved successfully';
    } catch (error) {
      // Log the error for debugging purposes
      Database.registerLog(`Error while saving data: ${error.message}`);

      // Re-throw the error to be handled by @ApiResponse or other layers
      throw error;
    }
  }

  private async findData(id: number) {
    try {
      // Simulating a database fetch
      return { id, name: 'Resource Name' };
    } catch (error) {
      // Log the error and re-throw it as a specific HTTP error
      console.error('Unexpected error while fetching data:', error);
      throw new Error500('Database error occurred');
    }
  }
}
```

In this case, it is important to note that the `saveData` function is being called by a method decorated with `@ApiResponse`.


## License
MIT