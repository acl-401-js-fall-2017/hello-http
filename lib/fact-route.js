module.exports = function fact(req, res) {

    const facts = [
        'HTTP is a request-response protocol with a set of rules for transferring files on the World Wide Web',
        'HTTP is a stateless protocol.',
        'HTTPS is the secure version of HTTP.'
    ];

    let i = Math.floor(Math.random() * facts.length);

    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(facts[i]));
};

