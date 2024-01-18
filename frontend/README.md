# Frontend

React frontend connected to a Spring Boot backend.

The frontend is as simple as possible to show the logic of authentication and authorization with JWT.

The frontend only decodes the JWT to show one component or another depending on the roles present in the JWT.

## Start the app

To start the development server run `nx serve frontend`. Open your browser and navigate to http://localhost:4200/.


## Components

### App

It's the main component which manages the display of the rest of the application.

### CustomJwtPayload

It's an object which represents the internal structure of the decoded JWT. It extends the JwtPayload from the library jwt-decode
because I include a custom claim, role, that the frontend needs to access.

### Login

Component to display the login form and request the backend to log in the user.

### Messages

Component which displays a message from a regular user. 

### ProtectedMessages

Component which displays a protected message from an admin user.

### BackendServices

Service which manages the JWT stored in the local storage.
