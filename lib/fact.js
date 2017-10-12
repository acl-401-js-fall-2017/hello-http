const randomFacts = [
    'bread is good', 
    'cake is better',
    'beer is the best'
];

let randomIndex = Math.floor(Math.random() * randomFacts.length );

module.exports = function fact(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(randomFacts[randomIndex]));
};