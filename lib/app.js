'use strict';

const url = require('url');
const greeting = require('./routes/greeting');
const fact = require('./routes/fact');


module.exports = (req, res) => {
    // const reqUrl = url.parse(req, true);
    const reqUrl = url.parse(req.url, true);
    const {pathname, query} = reqUrl;
    // console.log(reqUrl);

    if(pathname === '/test' && req.method === 'GET') {
        res.end('test');
    }
};