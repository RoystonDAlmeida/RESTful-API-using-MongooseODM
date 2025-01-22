# Express Article API

This is a simple Express API that connects to a MongoDB database and provides endpoints for managing articles. It demonstrates how to set up an Express server, connect to a database, and define routes for handling HTTP requests related to articles.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features

- Connects to a MongoDB database.
- Provides a RESTful API for creating, reading, updating, and deleting articles.
- Parses JSON request bodies.
- Simple and easy-to-understand code structure.

## Technologies Used

- Node.js
- Express
- MongoDB (or any other database you are using)
- Mongoose (for interacting with MongoDB)

## Installation

1. **Clone the repository**:

```bash
git clone git@github.com:RoystonDAlmeida/RESTful-API-using-MongooseODM.git
cd RESTful-API-using-MongooseODM/
```

2. **Install dependencies**:
Make sure you have Node.js installed. Then run:

```bash
npm install
```

3. **Set up environment variables**:
Create a `.env` file in the root directory of your project and add your MongoDB connection string:

```bash
MONGODB_CONNECTION_URL =
```

4. **Run the application**:
Start the server with the following command:

```bash
npm start
```

## Usage

Once the server is running, you can access the API at `http://localhost:3000`. You can use tools like Postman or curl to interact with the API endpoints.

## Endpoints

### GET `/`
Returns a simple message indicating that the server is running.

**Response**:

```json
{
"message": "Hello from an express API"
}
```

### POST `/api/articles`
Creates a new article.

**Request Body** (JSON):

```json
{
    "title": " ",
    "content": " "
}
```

**Response**:

```json
{
    "_id": " ",
    "title": " ",
    "content": " "
}
```

### GET `/api/articles`
Retrieves all articles.

**Response** (Array of JSON objects):

```json
[
    {
        "_id": "article_id_1",
        "title": "Article Title 1",
        "content": "Content of article 1."
    },
    {
        "_id": "article_id_2",
        "title": "Article Title 2",
        "content": "Content of article 2."
    }
]
```

### GET `/api/articles/:id`
Retrieves a single article by its ID.

**Response**:

```json
{
    "_id": " ",
    "title": " ",
    "content": " "
}
```

### PATCH `/api/articles/:id`
Updates an existing article by its ID.

**Request Body** (JSON):

```json
{
    "title": " ",
    "content": " "
}
```

**Response**:

```json
{
    "_id": " ",
    "title": " ",
    "content": " "
}
```

### DELETE `/api/articles/:id`
Deletes an article by its ID.

**Response**:
- **204 No Content**: If the article was successfully deleted.
- **404 Not Found**: If the article was not found.