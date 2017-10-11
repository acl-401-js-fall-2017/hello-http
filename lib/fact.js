const randomFacts = [
    'bread is good', 
    'cake is better',
    'beer is the best'
];

module.exports = function facts(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(randomFacts));
};