const url = require('url');

module.exports = function greeting (req, res) {
    const { query } = url.parse(req.url, true);
    // let greetingSal = 'Hello, ';
    let name = 'stranger';
    

    res.setHeader( 'Content-Type', 'text/html');
    
    if (res.parts[1])  { //if has name
        name = res.parts[1];
        res.end(`Hello ${name}` );
    }

    else {
        res.end('Hello stranger');
    }
    // let greeting = 'Hello, stranger';
    // res.end(greeting);
};