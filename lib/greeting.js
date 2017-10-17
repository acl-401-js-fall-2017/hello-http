const url = require('url');

module.exports = function greeting (req, res) {
    let salutation = 'Hello, ';
    let name = 'stranger';
    let pathUrl = req.url;
    let salSpliceFirst = req.url.split('?salutation=');
    let salSplice = salSpliceFirst[1];
    
    res.setHeader( 'Content-Type', 'text/html');

    if (res.parts[1])  {
        name = res.parts[1];
    }

    if(salSplice) {
        salutation = salSplice;
    }
    
    res.end(`${salutation} ${name}`); 
};