# NestJS shortening

Example to exercise clean architecture with different databases + cache layer + DDD.

[![Run E2E Tests]](https://github.com/chJasser/shortening-task/actions/workflows/run-e2e-tests.yml)
[![Run Unit Tests]](https://github.com/chJasser/shortening-task/actions/workflows/run-unit-tests.yml)

## Pre requirements

- Mongo

## Running locally

1. Instal the dependencies
2. copy .env.example to .env'
3. run `docker-compose up -d`, it will create a Mongo instance
4. run `yarn start:dev`
5. Access `http://localhost:3000/api`

The default database is set Mongo, but it can be changed inside `app.module.ts`

## API Documentation

Running the solution, access `http://localhost:3000/api`

![Preview](https://github.com/chJasser/shortening-task/blob/main/nestjs-shortening/assets/swagger.png)

## To-do

- [x] Url

