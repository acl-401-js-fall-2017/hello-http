const url = require('url');

//app is a listening function
module.exports = (req, res) => {
    const myUrl = url.parse(req.url, true);

    const urlArray = myUrl.path.split('/');

    switch (urlArray[1]) {
    case 'greeting':
        if (urlArray.length === 2) {res.write('hello, stranger');}
        if (urlArray.length === 3) {
            let salutation = 'hello';
            const name = urlArray[2].split('?')[0];
            if (myUrl.query.custom) {salutation = myUrl.query.custom;}
            res.write(`${salutation}, ${name}`);
        }
        break;

    case 'fact':
        res.setHeader('Content-Type', 'application/json');
        var randomFacts = [
            { fact : 'this is my good http fact' },
            { fact : 'this another good http fact' },
            { fact : 'this good http fact is the worst one' }
        ];
        var randomNumber = Math.floor(Math.random() * randomFacts.length);

        res.write( JSON.stringify( randomFacts[randomNumber] ) );
        
        break;

    default:
        res.statusCode = 404;
        res.write('404 :(');

    }//end of switch

    res.end();
};
