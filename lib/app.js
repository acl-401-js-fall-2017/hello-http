const url = require('url');
const greet = require('./greet');
const fact = require('./fact');


module.exports = (req, res) => {
    const { pathname, query} = url.parse(req.url, true);
    let urlPart = pathname.slice(1).split('/');
    let path = urlPart[0];
    let message = greet(urlPart[1], query.salutation);

    if(!path){
        res.end('Welcome to Hello-Http');
    }
    if(path == 'greeting'){
        res.end(message);
    }else if(path =='fact'){
        res.end(fact(req, res));
    }else{
        res.end('not found');
    }
};