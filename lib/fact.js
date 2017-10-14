module.exports = (req, res) => {
    const facts = ['HTML is the best','HTMLso awesome','HTML is the past, present and future, Scott'];
    const fact = facts[Math.floor(Math.random() * (3))];

    res.setHeader('Content-Type', 'text/html');
    res.end(`${fact}`);
    
};