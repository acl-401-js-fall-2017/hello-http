const url = require('url');
const greeting = require('../lib/greeting');
const fact = require('../lib/fact');

module.exports = (req, res) => {
    const { pathname } = url.parse(req.url);
    let pathInformation = pathname.slice(1).split('/');
    let action = pathInformation[0];
    
    const routes = {
        greeting,
        fact
    };

    let route = routes[action];
      
    route(req, res);

};