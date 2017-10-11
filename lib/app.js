const url = require('url');
const greet = require('./greet');

module.exports = (req, res) => {
    const { pathname, query} = url.parse(req.url, true);
    
    let urlPart = pathname.slice(1).split('/');
    
    let message = greet(urlPart[1], query.salutation);
    res.end(message);
    
};