# URL Shortening Service - NestJS

A URL shortening service built using NestJS, following the principles of **Clean Architecture** and **Domain-Driven Design (DDD)**. This project demonstrates how to create a maintainable and scalable backend service for shortening URLs, along with integrating MongoDB for persistence and a caching layer for performance optimization.

[![Run E2E Tests]](https://github.com/chJasser/shortening-task/actions/workflows/run-e2e-tests.yml)
[![Run Unit Tests]](https://github.com/chJasser/shortening-task/actions/workflows/run-unit-tests.yml)

## Pre-requisites

- **MongoDB**: Used for data storage. You can run it locally or use a cloud service.
- **Docker** (for MongoDB): Optionally use Docker to run MongoDB in a container.
- **Node.js & Yarn**: Required for running and developing the project.

## Architecture Overview

This project follows the principles of **Clean Architecture** and **Domain-Driven Design (DDD)**. It ensures separation of concerns, making the application easy to test, scale, and maintain.

### Key Architectural Components:
1. **Clean Architecture**:
   - **Entities**: Represent core business logic (e.g., `Url`, `ShortenedUrl`).
   - **Use Cases**: Encapsulate business logic for operations like creating and fetching shortened URLs.
   - **Interface Adapters**: Converting internal models for external consumption (e.g., controllers and repositories).
   - **Frameworks & Drivers**: Interact with external frameworks like NestJS and MongoDB.

2. **Domain-Driven Design (DDD)**:
   - Focus on core business logic and entities like `Url`, `ShortenedUrl`, and `User`.
   - Organize the project around domain models to facilitate complex business logic.

3. **Database & Cache Layer**:
   - **MongoDB**: Store URL mappings in a MongoDB instance.
   - **Redis (optional)**: Use a caching layer to speed up requests and reduce database load for frequently accessed URLs.

4. **Testing**:
   - **Unit Tests**: Focused on testing individual components in isolation.
   - **E2E Tests**: Verify the entire flow of the application, ensuring everything works together.

5. **Dependency Injection (DI)**:
   - Use NestJS's DI system to inject services and repositories into components like controllers and use cases.


## Running locally

1. Instal the dependencies `yarn install`
2. copy .env.example to .env'
3. run `docker-compose up -d`, it will create a Mongo instance
4. run `yarn start:dev`
5. Access `http://localhost:3000/api`
5. Unit test `npm run test:unit`
5. end to end test `npm run test:e2e`


## API Documentation

Running the solution, access `http://localhost:3000/api`

![Preview](https://github.com/chJasser/shortening-task/blob/main/nestjs-shortening/assets/swagger.png)

## To-do

- [x] Url

