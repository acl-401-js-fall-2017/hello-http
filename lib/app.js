const url = require('url');


module.exports = (req, res) => {
    const reqUrl = url.parse(req.url).path;
    console.log(reqUrl, 'reqUrl');
    let name = reqUrl.split('/')[2];
    if (name == undefined) {
        name = 'stranger';
    }
    console.log('name', name);
    res.write('hello '+ name);
    res.end();
};