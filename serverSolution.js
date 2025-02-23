const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);

server.on('error', (err) => {
  console.error('Server error:', err);
  // Additional error handling logic can be added here, such as attempting to restart the server or logging the error to a file.
});

server.listen(8080);
console.log('Server is running on port 8080');