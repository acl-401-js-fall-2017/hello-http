const url = require('url');

module.exports = (req, res) => {
    let name = 'stranger';
    const { pathname } = url.parse(req.url);
    let pathInformation = pathname.slice(1).split('/');

    if(pathInformation[1]){
        name = pathInformation[1];
    }

    res.setHeader('Content-Type', 'text/html');
    let greeting = `<h1>Hello ${name}</h1>`;
    res.end(greeting);

};