'use strict';

const url = require('url');

module.exports = (req, res) => {
    // const reqUrl = url.parse(req, true);
    const reqUrl = url.parse(req.url, true);
    const {pathname, query} = reqUrl;

    if(pathname === '/test') {
        res.end('test');
        console.log('test response sent');
    }
};