const http = require('http');
const app = require('./lib/app');

const server = http.createServer(app);

const port = 8080 || process.env.PORT;

server.listen(port, () => {
    console.log(`the server is running on port ${port}`);
});