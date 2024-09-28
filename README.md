# react-custom-hook Documentation

## Overview

The `react-custom-hook` package provides reusable React hooks written in TypeScript. This documentation focuses on the `useFetch` hook, which allows you to perform HTTP requests seamlessly within your React components.

## Installation

To install the package, run:

```bash
npm install react-custom-hook
```

## Usage

### useFetch

The `useFetch` hook allows you to make HTTP requests using various methods (GET, POST, PATCH, PUT, DELETE).

#### Syntax

```typescript
const { data, error, loading } = useFetch<T>(url: string, options?: UseFetchOptions);
```

#### Parameters

- **url**: A string representing the URL to fetch data from.
- **options**: An optional object that can contain the following properties:
  - **method**: The HTTP method to use (default is 'GET'). Options are 'GET', 'POST', 'PATCH', 'PUT', 'DELETE'.
  - **body**: The data to send with the request (for methods like POST, PUT).
  - **headers**: An object containing any custom headers.

#### Returns

The hook returns an object with the following properties:

- **data**: The response data or `null` if there's an error or data hasn't been fetched yet.
- **error**: An error message if the request fails, otherwise `null`.
- **loading**: A boolean indicating if the request is in progress.

#### Example Usage

```tsx
import React from "react";
import { useFetch } from "react-custom-hook";

const App: React.FC = () => {
  const { data, error, loading } = useFetch("https://jsonplaceholder.typicode.com/posts");

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {data &&
        data.map((post: { id: number; title: string; body: string }) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
    </div>
  );
};

export default App;
```

## Testing

You can run the tests using Jest. The tests cover various scenarios for the `useFetch` hook.

### Running Tests

To run the tests, use the following command:

```bash
npm run test
```

## License

This package is licensed under the MIT License.

## Author

Farhan Tafader
