//const url = require('url');

module.exports = (req, res) => {
    let name = 'stranger';
    const  pathname = req.url;
    let pathInformation = pathname.slice(1).split('/');
    let salutation = 'Hello';
    

    if (pathInformation[1]) {
        let greetingInfo = pathInformation[1].split('?salutation=');
        if (greetingInfo[0]) {
            name = greetingInfo[0];
        }
        if (greetingInfo[1]) {
            salutation = greetingInfo[1];
        }
    }

    res.setHeader('Content-Type', 'text/html');
    let greeting = `<h1>${salutation} ${name}</h1>`;
    res.end(greeting);
    
};