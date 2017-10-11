const url = require('url');

module.exports = function app() {
    
    // eslint-disable-next-line
    let parsedUrl = url.parse(req.url, {
        parseQueryString: true
    });
};