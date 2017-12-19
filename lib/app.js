const greet = require('./greeting-route');
const url = require('url');

function app(req, res) {
    const { pathname, query } = url.parse(req.url, true );
    // let splitUrl = pathname.slice(1).split('/');
    let name = pathname.split('/');
    let newSalutation = query.salutation;

    if(newSalutation) {
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
    // if(splitUrl[0]) {
    //     let salutation = greet(splitUrl[1], query.greeting);
    //     res.end(salutation);
    // }

}
module.exports = app;

