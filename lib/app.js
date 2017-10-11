const url = require('url');
const greeting = require('../lib/greeting');


module.exports = (req, res) => {
    const { pathname } = url.parse(req.url);
    let pathInformation = pathname.slice(1).split('/');
    let action = pathInformation[0];
    
    const routes = {
        greeting
    };

    let route = routes[action];

    // eslint-disable-next-line
    console.log('I AM PATHNAME!!!!!!!!!!!!!!', pathname);
    // eslint-disable-next-line
    console.log('I AM action!!!!!!!!!!!!!!', action);
      
    route(req, res);

};