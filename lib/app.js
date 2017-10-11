'use strict';

const url = require('url');
const greeting = require('./routes/greeting');
const fact = require('./routes/fact');
const notFound = require('./routes/notFound');


module.exports = (req, res) => {
    const reqUrl = url.parse(req.url, true);
    const {pathname, query} = reqUrl;
    const pathRoot = pathname.split('/')[1];

    const routes = {
        greeting: greeting,
        fact: fact
    };

    const route = req.method === 'GET' ? (routes[pathRoot] || notFound) : notFound;

    route(res, pathname, query);
};


// if(pathname === '/test' && req.method === 'GET') {
//     res.end('test');
// }