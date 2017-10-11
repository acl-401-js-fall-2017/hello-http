

module.exports = (req, res) => {
    const factBox = ['HTML is BOO BOP'];
    const factoid = factbox[0];

    res.setHeader('Content-Type', 'text/html');
    res.end(`${factoid}`);
    
};