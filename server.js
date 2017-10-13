const http = require('http');
const app = require('./lib/app');

const server = http.createServer(app); 
const port = process.env.PORT || 8080;

server.listen(port, () => {
    console.log('server running on port', port); //eslint-disable-line
});
