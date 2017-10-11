const url = require('url');


module.exports = (req, res) => {
    const reqUrl = url.parse(req.url).path;
    console.log(reqUrl, 'reqUrl');
    const name = reqUrl.split('/')[2];
    console.log('name', name);
    res.write('hello '+ name);
    res.end();
};