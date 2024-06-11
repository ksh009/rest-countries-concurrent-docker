# Flags Service Node.js

This is a simple Node.js service for serving JSON data from a directory named "flag_data".

## Prerequisites

- Node.js (v14.x or later recommended)
- npm (Node Package Manager)

## Installation

1. Clone the repository or download the project files to your local machine.
2. Navigate to the project directory.
3. Install the required dependencies by running:

```bash
npm install
```

## Running the Service

### Development Mode

To start the service in development mode with automatic restarts on file changes, run:

```bash
npm run dev
```

### Production Mode

To start the service in production mode, run:

```bash
npm start
```

## Accessing the Service

Once the service is running, it will be accessible at:

```
http://localhost:5000
```

### Available Endpoints

#### Get All Countries

**URL:** `/countries`

**Method:** `GET`

**Description:** Fetches all country data.

**Response:**

- `200 OK`: Returns the JSON data of all countries.
- `500 Internal Server Error`: Returns an error message if something goes wrong.

#### Get Country by Name

**URL:** `/country/:name`

**Method:** `GET`

**Description:** Fetches data for a specific country by its common name.

**Path Parameters:**

- `name`: The common name of the country to retrieve.

**Response:**

- `200 OK`: Returns the JSON data of the specified country.
- `404 Not Found`: Returns an error message if the country is not found.
- `500 Internal Server Error`: Returns an error message if something goes wrong.

## Project Structure

- `index.js`: The main entry point of the application.
- `flag_data/`: The directory containing the JSON data files.
- `package.json`: The project configuration file, including scripts and dependencies.

## Scripts

- `start`: Runs the service in production mode.
- `dev`: Runs the service in development mode using `nodemon`.

## Example Requests

### Get All Countries

```bash
curl -X GET http://localhost:5000/countries
```

### Get Country by Name

```bash
curl -X GET http://localhost:5000/country/France
```
