const url = require('url');
// eslint-disable-next-line
const createdGreeting = require('./createdGreeting');

module.exports = function app(req, res) {

    // const { pathname, query } = url.parse(req.url, true);

    const parsedURL = url.parse(req.url, true);
    const pathname = parsedURL.pathname;   
    const query = parsedURL.query;

    let name = pathname.split('/');
    let newSalutation = query.salutation;
    
    if(pathname === '/greeting'){
        res.end(createdGreeting(name[2], newSalutation));
    }

    
};