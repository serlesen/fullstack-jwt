# Frontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.0.

Angular Frontend connected to a Spring Boot backend.

The frontend is as simple as possible to just show the logic of authentication via a JWT.


## Run on local

```
yarn start
```

The application will run on `http://localhost:4200`

## Components

### App Component

Main wrapper component. It has no logic inside. It just places the Header and the AppContent.

### Content Component

Displays the Buttons and the Content of the application.

The Buttons are there to show the login form or logout the user.

At the beginning, nothing is shown but the WelcomeContent component with a welcome message.

Once authenticated via the login form, the AppContent component displays the AuthContent component with the protected information.

### Buttons Component

It displays two buttons. The login button only displays the login form. The logout button removes all the authentication information of the user.

### Header Component

Static header with the title and the logo.

### Login Form Component

Displays a splitted Form with the Login form on one side and the register form on the other side. 

Submitting one form or the other will request different endpoints in the backend.

### Welcome Content Component

Simple component which displays a Welcome message.

## Authentication

The authentication used is JWT. First, the user must login in the backend with a username and password.

If the credentials are correct, a JWT will be returned.

The JWT will be stored in the localstorage for further usage.

When available the JWT will be sent in the Authorization Header for each requests made with axios.

