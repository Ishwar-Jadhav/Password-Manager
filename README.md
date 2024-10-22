# Password-Manager
The Password Management API is a Node.js application built with Express.js and MongoDB, designed to securely store, retrieve, and delete user passwords. This API provides essential CRUD (Create, Read, Update, Delete) operations for managing passwords, ensuring data integrity and security.

Features

Secure Storage: Uses MongoDB to securely store user passwords.
Retrieve Passwords: Fetch all stored passwords.
Save Passwords: Add new passwords to the database.
Delete Passwords: Remove passwords from the database by ID.
Error Handling: Robust error handling to manage JSON parsing errors and database operation failures.
Logging: Middleware to log incoming requests for easier debugging and monitoring.
Endpoints

GET /: Retrieve all stored passwords.
<img width="1431" alt="new record" src="https://github.com/user-attachments/assets/52ab2902-2a67-4d5d-9635-1b5276387076">
POST /save: Save a new password to the database.
![list of recods](https://github.com/user-attachments/assets/d66458c6-f90a-4c30-a199-5eb6fe94673e)
DELETE /delete: Delete a password from the database by its ID.
![Delete](https://github.com/user-attachments/assets/48145ff2-590e-4b21-9967-a6af92a093e7)
Technologies Used

Node.js: JavaScript runtime for building the backend application.
Express.js: Web framework for handling HTTP requests and routing.
MongoDB: NoSQL database for storing password data.
![Mongoimg](https://github.com/user-attachments/assets/19fda5df-1fef-40d4-821e-ccbfb58d3c4e)
dotenv: Module for loading environment variables from a .env file.
body-parser: Middleware for parsing JSON request bodies.
async-hooks: Node.js module for handling asynchronous operations.
Setup and Installation

Clone the Repository: git clone <repository_url>
Install Dependencies: npm install
Configure Environment Variables: Create a .env file with the following variables:
MONGO_URL: MongoDB connection URL (default is mongodb://localhost:27017).
PORT: Port on which the server will run (default is 3000).
Run the Server: node app.js
Usage

Test API Endpoints: Use tools like Postman or Curl to interact with the API.
Send Requests:
GET /: Fetch all passwords.
POST /save: Save a new password by sending a JSON body, e.g., {"password": "your_password_here"}.
DELETE /delete: Delete a password by sending a JSON body with the ID, e.g., {"id": "password_id_here"}.

![Screenshot 2024-07-29 at 19 39 34](https://github.com/user-attachments/assets/1321f09e-5db2-47fe-bb86-c68c7a9e3329)
a6af92a093e7)


Future Enhancements

User Authentication: Implement user authentication and authorization to secure API endpoints.
Password Encryption: Encrypt passwords before storing them in the database for enhanced security.
Update Endpoint: Add an endpoint to update existing passwords.
The Password Management API provides a foundational framework for managing passwords securely and efficiently, with a focus on scalability and ease of use.







