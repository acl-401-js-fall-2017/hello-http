const url = require('url');
const greeting = require('../lib/greeting');
const fact = require('../lib/fact');
const notfound = require('../lib/notfound');

module.exports = (req, res) => {
    const { pathname } = url.parse(req.url);
    let pathInformation = pathname.slice(1).split('/');
    let action = pathInformation[0];
    
    const routes = {
        greeting,
        fact
    };

    if(routes[action]){
        let route = routes[action];
        route(req, res);
    } else {
        notfound(req, res);
    }


};