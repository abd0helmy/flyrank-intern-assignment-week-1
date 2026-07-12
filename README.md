# FlyRank Week 1 - Express API

A simple Express.js API created as part of the FlyRank Backend AI Engineering internship.

## Features

- `GET /` — Returns a welcome message.
- `POST /greet` — Returns a personalized greeting.
- `404` handler for unknown routes.

## Requirements

- Node.js 18+ (recommended)

## Installation

```bash
npm install
```

## Run the Project

```bash
npm start
```

If you're using a development script:

```bash
npm run dev
```

The server will start on:

```
http://localhost:3000
```

## API Endpoints

### GET /

Returns a welcome message.

**Response**

```json
{
  "message": "hello, flyrank!"
}
```

---

### POST /greet

Returns a greeting using the provided name.

**Request**

```http
POST /greet
Content-Type: application/json
```

```json
{
  "name": "Abdo"
}
```

**Success Response (200)**

```json
{
  "message": "hello, Abdo"
}
```

**Error Response (400)**

```json
{
  "message": "no name provided"
}
```

## Project Structure

```
.
├── index.js
├── package.json
└── README.md
```

## License

This project is for educational purposes.
