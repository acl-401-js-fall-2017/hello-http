// module.exports = function greet (name = 'stranger', salutation = 'Hello') {
//     return `${salutation} ${name}`;
// };

const url = require('url');

module.exports = function greet (req, res) {
    const { pathname, query} = url.parse(req.url, true);
    let urlPart = pathname.slice(1).split('/');
    let name = urlPart[1] || 'stranger';
    let salutation = query.salutation || 'Hello';
    let message = `${salutation} ${name}`;
    res.end(message);
};