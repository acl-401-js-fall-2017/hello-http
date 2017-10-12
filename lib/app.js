const url = require('url');
const greet = require('./greet');

module.exports = (req, res) => {
    const {pathname, query} = url.parse(req.url, true);
    
    let name = pathname.split('/').slice(2);

    let greeting = greet(name, query.salutation);
    
    res.end(greeting);
};