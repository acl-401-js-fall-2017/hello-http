const url = require('url');
const greeting = require('./greeting');
const fact = require('../lib/fact');
const notfound = require('../lib/notfound');

const routes = {
    greeting,
    fact
};

module.exports = (req, res) => {
    const { pathname } = url.parse(req.url);
    const parts = pathname.slice(1).split('/');
    let action = parts[0];
    
    res.parts = parts;

    if(routes[action]){
        let route = routes[action];
        route(req, res);
    } else {
        notfound(req, res);
    }
};