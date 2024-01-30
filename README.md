# Todo List App

## Overview

This is a simple todo list application built using Node.js, Express.js, and PostgreSQL.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Dependencies](#dependencies)


## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js
- npm (Node Package Manager)
- PostgreSQL

## Installation

1. **Clone the repository:**

    ```bash
    git clone <repository-url>
    cd <repository-folder>
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Set up PostgreSQL:**

   - Create a database named `permalist`.
   - Update the PostgreSQL connection details in `app.js`:

        ```javascript
        const db = new pg.Client({
            user: "your-postgres-username",
            host: "localhost",
            database: "permalist",
            password: "your-postgres-password",
            port: 5432,
        });
        ```

4. **Run the application:**

    ```bash
    npm start
    ```

    The application should now be running on [http://localhost:3000](http://localhost:3000).

## Usage

- Visit [http://localhost:3000](http://localhost:3000) in your browser to access the todo list.
- You can add, edit, and delete items from the list.

## Project Structure

- `app.js`: Main Express.js application file.
- `public/styles/main.css`: CSS styles for the frontend.
- `views/index.ejs`: EJS template for rendering the todo list.

## Dependencies

- Express.js: Web application framework.
- body-parser: Middleware to parse incoming request bodies.
- pg: PostgreSQL client for Node.js.


