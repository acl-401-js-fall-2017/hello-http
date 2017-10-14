// const url = require('url');



module.exports = function greetings(req, res) {
    // const { pathname } = url.parse(req.url, true);
    // const parts = pathname.slice(1).split('/');
    
    // const { query } = url.parse(req.url, true);
    if (req.parts[1] == undefined) {
        req.parts[1] = 'stranger';
    }
    // console.log('name', req.parts[1]);
    res.write('hello '+ req.parts[1]);
    res.end();

};