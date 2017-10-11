const url = require('url');

//app is a listening function
module.exports = (req, res) => {
    const myUrl = url.parse(req.url, true);
    console.log('myUrl is', myUrl);

    const urlArray = myUrl.path.split('/');
    console.log('urlArray is', urlArray);

    switch (urlArray[1]) {
    case 'greeting':
        console.log('myUrl.query is', myUrl.query);
        console.log('myUrl.query.custom is', myUrl.query.custom);
        if (urlArray.length === 2) {res.write('hello, stranger');}
        if (urlArray.length === 3) {
            let salutation = 'hello';
            const name = urlArray[2].split('?')[0];
            console.log('name is', name);
            if (myUrl.query.custom) {salutation = myUrl.query.custom;}
            res.write(`${salutation}, ${name}`);
        }
        break;

    case 'fact':
        res.setHeader('Content-Type', 'application/json');
        res.write( JSON.stringify({ fact : 'this is my good http fact' }) );
        break;

    default:
        res.statusCode = 404;
        res.write('404 :(');

    }//end of switch

    res.end();
};
