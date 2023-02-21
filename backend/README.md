# Spring Boot Backend

## Install

```
mvn clean package
```

## Run on local

First, start a database as described bellow.

```
mvn spring-boot:run
```

The application will be available at `http://localhost:8080`

## How to run database

This will start an empty database. The schema will be created when started the application.

```
docker run -d -e POSTGRES_HOST_AUTH_METHOD=trust -e POSTGRES_USER=backend -e POSTGRES_PASSWORD=backend -e POSTGRES_DB=backenddb -p 5432:5432 postgres:13
```

Warning, the schema will be dropped and re-created each time the application starts.

To change this behavior, change the value of `spring.jpa.hibernante.ddl-auto` and `spring.datasource.initialization-mode` in the `application.yml` file.

## Packages

### Config

Here will be placed all the necessary configuration for the application to run correctly.

The `JwtAuthFitler` is necessary to read the JWT from the HTTP headers.

The `PasswordConfig` is to encode and decode the passwords, to avoid having the passwords in plain text.

The `SecurityConfig` contains the Spring Security 6 configuration, with the protected routes, exception handler and the http filters.

The `UserAuthenticationEntryPoint` manages the exceptions.

The `UserAuthenticationProvider` manages the authentication, creating the JWT or validating it.

The `UsernamePasswordAuthFitler` is the filter which reads the username and password information.

The `WebConfig` contains the CORS configuration.

### Controllers

Here are the two available controllers. One for the authentication and registration. And the other to access the protected ressources.

### Dtos

Here will be placed the Data Transfer Objects. Objects which will be returned to the frontend instead of the database entities.

### Entities

The objects present here are the one which reflect the database structure.

### Exceptions

Here are the custom excecptions.

### Mappers

The Mapstruct mappers are present in this package.

### Repositories

The Spring JPA repositories are present in this package.

### Services

Two services are availables in this package. One to authenticate a user, to verify the credentials. 

And the other service is to register a new user.

## Authentication

The authentication is handled with a JWT.

The application is stateless. This means that no session is managed by Spring, no data is stored in the session.

Each request to protected resources must contain a JWT in the Authorization header to be accepted.

Only two requests don't need the JWT, the login and the register. But both will generate a JWT after their action finishes correctly.
