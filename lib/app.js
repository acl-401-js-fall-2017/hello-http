const greet = require('./greeting-route');
const url = require('url');

function app(req, res) {
    const { pathname, query } = url.parse(req.url, true );
    let name = pathname.split('/');
    let newSalutation = query.salutation;

    if(name[1] === 'greet') {
        res.end(greet(name[2], newSalutation));
    }
    else if(pathname === '/greet/Kate') {
        let salutation = 'hello';
        res.end(greet(name[2], salutation));
    }
    else {
        res.statusCode = 404;
        res.end(`CANNOT ${req.method} /${pathname} \n ${res.statusCode}`);
    }
}

module.exports = app;

