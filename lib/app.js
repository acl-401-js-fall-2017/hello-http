const greeting = require('./greet-app');
const url = require('url');


module.exports = (req, res) => {
    const { pathname, query} = url.parse(req.url, true);
    let splitPath= pathname.slice(1).split('/');

    res.end(greeting(splitPath[1], query.salutation));


};