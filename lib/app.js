const url = require('url');

const routes = {
    greeting,
    fact
};

function greeting(req, res){
    const {pathname, query} = url.parse(req.url, true);
    const parts = pathname.slice(1).split('/');
    let salutation = '';
    res.setHeader('content-Type', 'text/html');
    salutation =`${query.salutation || 'Hello'} ${parts[1] || 'Stranger'}!`;
    res.end(salutation);
}

// wrote referencing random integer method from math.random mdn docks:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function generateRandomInt(min, max){
    let minInt = Math.ceil(min);
    let maxInt = Math.floor(max);
    return Math.floor(Math.random()* (maxInt - minInt +1)) + minInt;
}

function fact(req, res) {
    const factArray = ['HTTP stands for Hypertext Transfer Protocol', 'HTTP development was started in 1989 at CERN!', ' HTTP 418 I\'m a teapot status code was created as a part of Hyper Text Coffee Pot Control Protocol for Aprils fools day in 1998', 'HTTP is much better then TCP, even though HTTP is part of TCP'];
    const fact = {};
    fact.fact = factArray[generateRandomInt(1,3)];
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(fact));
}

function notFound(req, res){
    res.statusCode =404;
    const { pathname } = url.parse(req.url);
    res.setHeader('content-Type', 'text/html');
    let message = `CANNOT ${req.method} ${pathname}`;
    res.end(message);



}
 
module.exports = (req, res) => {
    const { pathname } = url.parse(req.url);
    const parts = pathname.slice(1).split('/');
    // same as routes.greeting or routes.fact but stuff inside [is a variable];
    const route = routes[parts[0]] || notFound;
    route(req, res);
};