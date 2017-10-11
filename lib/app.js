'use strict';

const url = require('url');
const greeting = require('./routes/greeting');
const fact = require('./routes/fact');


module.exports = (req, res) => {
    const reqUrl = url.parse(req.url, true);
    const {pathname, query} = reqUrl;
    const pathRoot = pathname.split('/')[1];

    const routes = {
        greeting: greeting,
        fact: fact
    };

    const route = routes[pathRoot];

    route(res, pathname, query);
};


// if(pathname === '/test' && req.method === 'GET') {
//     res.end('test');
// }