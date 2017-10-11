const url = require('url');
const greeting = require('./greeting');

const routes = {
    greeting
};

module.exports = (req, res) => {
    const { pathname } = url.parse(req.url);
    const parts = pathname.slice(1).split('/');

    let action = parts[0];
    let name = parts[1];
    res.parts = parts;

    routes[action](req,res);
    // routes.greeting(req, res);

};