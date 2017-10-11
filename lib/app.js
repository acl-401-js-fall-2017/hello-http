const url = require('url');
// eslint-disable-next-line
const createdGreeting = require('./createdGreeting');

module.exports = function app(req, res) {

    const { pathname, query } = url.parse(req.url, true);

    // the code below is the same as above, keeping this for now 
    // just to be able to understand the above code better.

    // const parsedURL = url.parse(req.url, true);
    // const pathname = parsedURL.pathname;   
    // const query = parsedURL.query;

    let name = pathname.split('/');
    let newSalutation = query.salutation;
    
    if(name[1] === 'greeting'){
        res.end(createdGreeting(name[2], newSalutation));
    } 
    else if (pathname === '/greeting/zac'){
        let salutation = null;
        res.end(createdGreeting(name[2], salutation));
    }

    
};