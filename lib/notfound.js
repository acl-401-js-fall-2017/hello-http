module.exports = (req, res) => {
    let pathname = req.url;

    res.setHeader('Content-Type', 'text/html');
    res.statusCode = 404;
    res.end(`CANNOT ${req.method} ${pathname}`);

};