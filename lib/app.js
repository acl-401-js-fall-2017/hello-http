const url = require('url');
const greet = require('./greet');
const factEnabler = require('./fact');

module.exports = (req, res) => {
    const {pathname, query} = url.parse(req.url, true);
    let name = pathname.split('/').slice(2);   
    if (pathname === '/fact') {
        res.end(factEnabler());
    } else if (pathname === `/greeting/${name}`) {
        let greeting = greet(name, query.salutation);
        res.end(greeting);
    } else {
        res.statusCode = 404;
        res.statusMessage = '404 Not Found';
        res.end('Cannot <Method> <Pathname>');
    }
};