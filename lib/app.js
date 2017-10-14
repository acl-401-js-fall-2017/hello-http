const salutation = require('./greeting-route');

function app(req, res) {
    let splitUrl = req.url.split('/');
    let name = 'Haley';
    let greeting = 'Yo';

    if(splitUrl[2]) {
        let url = splitUrl[2].split('?greeting=');
        name = url[0];
        url[1] ? greeting = url[1] : null;
    }

}
module.exports = app;