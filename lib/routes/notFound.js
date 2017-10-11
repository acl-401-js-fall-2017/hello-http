'use strict';

module.exports = function(res) {
    res.setHeader('Content-Type', 'text/html');
    res.statusCode = 404;
    res.statusMessage = 'Not Found';
    res.end();
};