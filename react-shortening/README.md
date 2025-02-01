# React Clean Architecture Project

This is a React project structured using **Clean Architecture** principles, aimed at making the application scalable, maintainable, and testable. The architecture follows the approach described in the article ["Clean Architecture, TypeScript, and React"](https://paulallies.medium.com/clean-architecture-typescript-and-react-8e509098abfe).

## Features

- Separation of concerns with a clear distinction between core business logic and UI.
- Scalable and maintainable architecture for complex React applications.
- TypeScript for type safety and development efficiency.
- A clear structure that ensures ease of testing and debugging.

## Project Structure

The project follows Clean Architecture principles with the following key layers:

### 1. **Domain Layer**
   - **Entities**: Core business objects (e.g., `User`, `Post`).
   - **Use Cases**: Contains application-specific business rules and logic.

### 2. **Application Layer**
   - **Services**: Handles the business logic, such as interacting with repositories and performing actions like data fetching.
   - **Interfaces**: Defines methods that external components, such as repositories or services, will implement.

### 3. **Infrastructure Layer**
   - **API Services**: Communication with external systems (e.g., API calls, data storage).
   - **Repositories**: Responsible for abstracting data access (e.g., fetching data from APIs, storing data in local storage).

### 4. **UI Layer (React Components)**
   - **Containers**: Components responsible for the application's business logic and managing state.
   - **Presentational Components**: Stateless components that only receive props and display data.
   - **Hooks**: Custom hooks for reusing logic.

### 5. **Testing**
   - Unit and integration tests ensuring each layer operates independently and functions as expected.

## Getting Started

### 1. Clone the Repository

```bash
npm install
```