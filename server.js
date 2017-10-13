const http = require('http');
const app = require('./lib/app');

const server = http.createServer(app);

const port = process.env.PORT || 8000;

server.listen(port, () => {
    // eslint-disable-next-line
    console.log(`server is running on port ${ port }`);
});