Dad Jokes API Project :

Overview -
This is a Node.js application built with Express.js that fetches dad jokes from the API Ninjas Dad Jokes API and serves them via a RESTful endpoint. 
The application uses environment variables for configuration and handles API requests asynchronously.
Features

Fetches - random dad jokes from the API Ninjas Dad Jokes API.
Provides a single endpoint /api/v1/jokes to retrieve a joke.
Returns JSON responses with appropriate status codes.
Handles errors gracefully with meaningful messages.

Prerequisites - 

Node.js (v14 or higher)
npm (Node Package Manager)
An API key from API Ninjas




Installation -

Clone the repository:-
git clone https://github.com/imadityagolu/random-joke
cd random-joke






Install dependencies:
npm install





Create a .env file in the project root and add the following:
PORT=8080
API_KEY=your_api_ninjas_api_key





Usage -

Start the server:
npm start





The server will run at http://localhost:8080/api/v1/jokes (or the port specified in your .env file).

Make a GET request to /api/v1/jokes to retrieve a dad joke. Example response:
{
    "success": true,
    "j0ke": "...joke..."
}






Error Handling - 

404: Returned if no joke is available from the API.
500: Returned if the server or API fails to respond.







Dependencies - 

express: Web framework for Node.js
axios: HTTP client for making API requests
dotenv: Loads environment variables from a .env file





Run the following command to start the server:
node index.js





API Endpoint - 

GET /api/v1/jokes
Fetches a random dad joke.
Response format:{
    "success": boolean,
    "j0ke": string
}
