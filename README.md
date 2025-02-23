# Node.js HTTP Server Error Handling

This repository demonstrates an example of an unhandled 'error' event in a Node.js HTTP server and how to properly handle it.

## Bug
The `serverBug.js` file contains a simple HTTP server that lacks error handling.  If the server encounters an error (e.g., port already in use), the program will crash without any informative output.

## Solution
The `serverSolution.js` file shows how to add an 'error' event listener to the server to gracefully handle errors, preventing the server from crashing and providing better diagnostic information.

## How to Run
1. Clone the repository
2. Navigate to the repository's directory
3. Run `node serverBug.js` to see the unhandled error
4. Run `node serverSolution.js` to see the handled error