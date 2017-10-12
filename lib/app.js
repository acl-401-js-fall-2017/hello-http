const url = require('url');
const greeting = require('./greet');
const fact = require('./fact');
const welcome = require('./welcome');

const routes = {
    greeting,
    fact
};


module.exports = (req, res) => {
    const { pathname } = url.parse(req.url, true);
    let urlPart = pathname.slice(1).split('/');
    let path = urlPart[0];

    let route = routes[path] || welcome;
    route(req, res);

    // if(!path){
    //     res.end('Welcome to Hello-Http');
    // }
    // if(path == 'greeting'){
    //     return  greet(req, res);
    // }else if(path =='fact'){
    //     res.end(fact(req, res));
    // }else{
    //     res.end('not found');
    // }
};

