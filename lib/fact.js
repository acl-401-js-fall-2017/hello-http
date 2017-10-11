

module.exports = (req, res) => {
    const factBox = ['HTML is BOO BOP','HTML is BOO BOP1','HTML is BOO BOP2'];
    const factoid = factBox[Math.floor(Math.random() * (3))];

    res.setHeader('Content-Type', 'text/html');
    res.end(`${factoid}`);
    
};