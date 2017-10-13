const url = require('url');

module.exports = function greeting (req, res) {
    // const { query } = url.parse(req.url, true);
    let salutation = 'Hello, ';
    let name = 'stranger';
    let pathUrl = req.url;
    let salSpliceFirst = req.url.split('?salutation=');
    let salSplice = salSpliceFirst[1];
    // let salSplice = res.parts[1].split('?salutation=');
    
    res.setHeader( 'Content-Type', 'text/html');

    //if name
    if (res.parts[1])  { //if has name
        name = res.parts[1];
    }

    // else {
    //     res.end('Hello stranger');
    // }
    
    //if salutation
    if(salSplice) {
        salutation = salSplice;
    }
    
    res.end(`${salutation} ${name}`); 
};