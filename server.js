const http = require('http');
const app =  require('./lib/app');



const server = http.createServer(app);
const PORT = process.env.PORT || 8080;

server.listen(PORT, () => {

    // eslint-disable-next-line
    console.log(`server is running on PORT: ${PORT}`);
});