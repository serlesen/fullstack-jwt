# React Frontend

React Frontend connected to a Spring Boot backend.

The frontend is as simple as possible to just show the logic of authentication via a JWT.

## Install

```
yarn install
```

## Run on local

```
yarn start
```

The application will run on `http://localhost:3000`

## Components

### App

Main wrapper component. It has no logic inside. It just places the Header and the AppContent.

### AppContent

Displays the Buttons and the Content of the application.

The Buttons are there to show the login form or logout the user.

At the beginning, nothing is shown but the WelcomeContent component with a welcome message.

Once authenticated via the login form, the AppContent component displays the AuthContent component with the protected information.

### Buttons

It displays two buttons. The login button only displays the login form. The logout button removes all the authentication information of the user.

### Header

Static header with the title and the logo.

### LoginForm

Displays a splitted Form with the Login form on one side and the register form on the other side. 

Submitting one form or the other will request different endpoints in the backend.

To switch from the Login form to the Register form, I've tried to use the Bootstrap Pills, but haven't succeed. Instead I do it with Javascript.

### WelcomeContent

Simple component which displays a Welcome message.

## Authentication

The authentication used is JWT. First, the user must login in the backend with a username and password.

If the credentials are correct, a JWT will be returned.

The JWT will be stored in the localstorage for further usage.

When available the JWT will be sent in the Authorization Header for each requests made with axios.
