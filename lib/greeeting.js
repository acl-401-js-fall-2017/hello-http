module.exports = function greeting (req, res) {
    const { query } = url.parse(req.url, true)
    res.setHeader( 'Content-Type', 'txt'); //'application/json'
    // res.end(___?)
}