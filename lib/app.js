const greet = require('./greeting-route');
const url = require('url');

function app(req, res) {
    const { pathname, query } = url.parse(req.url, true );
    let splitUrl = pathname.slice(1).split('/');

    if(splitUrl[0]) {
        let salutation = greet(splitUrl[1], query.greeting);
        // salutaion[1] ? greeting = url[1] : null;
        res.end(salutation);
    }
}
module.exports = app;

// path = chunk /greet /name