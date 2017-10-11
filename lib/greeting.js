const url = require('url');

module.exports = function greeting (req, res) {
    const { query } = url.parse(req.url, true);
    // let greetingSal = 'Hello, ';
    // let name = 'stranger';
    // let greetingSal = res.parts.split('?salutation=');

    res.setHeader( 'Content-Type', 'text/html');
    
    if (res.parts[1])  { //if has name
        res.end(`Hello ${res.parts[1]}` );
    }

    else {
        res.end('Hello, stranger');
    }
    // let greeting = 'Hello, stranger';
    // res.end(greeting);
};