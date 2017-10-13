const url = require('url');
const greeting = require('./greeting-route');

module.exports = (req, res) => {
    // url.parse returns an object, req.url is a string
    // { pathname } is a property of the req.url
    const { pathname } = url.parse(req.url);
    // parsing will return "/ greet / kate"
    // slice after 1st item to return "greetkate"
    const urlParts = pathname.slice();
    const route = routes[urlParts[0]] || notFound;
}