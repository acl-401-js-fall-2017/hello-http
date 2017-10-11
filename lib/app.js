'use strict';

const url = require('url');

module.exports = (req, res) => {
    // const reqUrl = url.parse(req, true);
    const reqUrl = url.parse(req.url, true);
    const {pathname, query} = reqUrl;

    console.log('hi there!');
    console.log(pathname);
};