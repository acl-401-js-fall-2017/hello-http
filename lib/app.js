const url = require('url');

module.exports = (req, res) => {
    const { pathname } = url.parse(req.url);
    const parts = pathname.slice(1).split('/');

    let action = parts[0];
    let name = parts[1];


    console.log( '---------this is the PATHNAME  ' + pathname);
    console.log( ' ------- PARTS 0---  ', parts[0]);
    // console.log('----- RES', res);


}