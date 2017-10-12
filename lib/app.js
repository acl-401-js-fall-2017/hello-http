const url = require('url');


module.exports = (req, res) => {
    const reqUrl = url.parse(req.url, true);
    let name = reqUrl.path.split('/').slice(2).toString();
    res.end(`hello ${name}`);
};