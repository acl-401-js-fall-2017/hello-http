module.exports = function notFound(req, res) {
    res.setHeader('Content-Type', 'text/html');
    res.end('Welcome to Hello-Http');
};