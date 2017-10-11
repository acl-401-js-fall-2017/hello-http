const url = require('url');

//app is a listening function
module.exports = (req, res) => {
    const myUrl = url.parse(req.url, true);
    console.log('myUrl is', myUrl);

    const urlArray = myUrl.path.split('/');
    console.log('urlArray is', urlArray);

    if (urlArray.length === 2) {res.write('hello, stranger');}
    if (urlArray.length === 3) {res.write(`hello, ${urlArray[2]}`);}
    
    res.end();
};
