const url = require('url');

module.exports = (req, res) => {
    const { pathname, query} = url.parse(req.url, true);
};