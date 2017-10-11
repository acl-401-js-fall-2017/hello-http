const url = require('url');

//app is a listening function
module.exports = (req, res) => {
    const myUrl = url.parse(req.url, true);
    console.log('myUrl.path is', myUrl.path);
    if (myUrl.path == '/greeting') {res.end('hello, stranger');}
    res.end();
};
