const url = require('url');


module.exports = (req, res) => {
    const reqUrl = url.parse(req.url, true);
    res.end('hello `${name}`');
}