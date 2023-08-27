# Authentication Portal API Documentation

## Endpoints

List of available endpoints:

- `POST /register`
- `POST /login`
- `GET /profile`

&nbsp;

## 1. POST /register

Description:

- Create a new user data

Request:

- body:

```json
{
  "email": "string",
  "password": "string"
}
```

_Response (201 - Created)_

```json
{
    "message": "Succeeded registering a new user",
    "data": {
        "id": "integer",
        "email": "string"
    }
}
```

&nbsp;

## 2. POST /login

Description:

- Give authentication to registered user

Request:

- body:

```json
{
  "email": "string",
  "password": "string"
}
```

_Response (200 - OK)_

```json
{
    "message": "Login successful",
    "access_token": "string",
    "email": "string"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Email and password is required!"
}
```

_Response (401 - Unauthorized)_

```json
{
  "message": "Email or password is invalid!"
}
```

&nbsp;

## 3. GET /articles

Description:

- Get user profile from database

Request:

- headers:

```json
{
  "access_token": "string"
}
```

_Response (200 - OK)_

```json
{
    "profile": {
        "name": "admintest",
        "email": "test@gmail.com",
        "gender": "perempuan"
    }
}
```

&nbsp;

## Global Error

_Response (401 - Unauthorized)_

```json
{
  "message": "Invalid token"
}
```

_Response (401 - Unauthenticated)_

```json
{
  "message": "Invalid token"
}
```

_Response (500 - Internal Server Error)_

```json
{
  "message": "Internal server error"
}
```
