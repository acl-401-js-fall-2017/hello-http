


module.exports = function notFound(req, res) {
    res.statusCode = 404;
    res.end('Cannot ' + req.method + ' ' + req.parts[0]);
};