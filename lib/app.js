const url = require('url');
const greetings = require('../lib/routes/greetings');
const httpFacts = require('../lib/routes/http-facts');
const notFound = require('../lib/routes/not-found');

const routes = {
    greetings,
    httpFacts,
    notFound
};


module.exports = (req, res) => {
    const { pathname, query } = url.parse(req.url, true);
    req.query = query;
    req.parts = pathname.slice(1).split('/');
    const routeDirection = routes[req.parts[0]] || notFound;
    routeDirection (req, res);
    
};