

module.exports = function greetings(req, res) {
    
    if (req.query.salutation == undefined) {
        req.query.salutation = 'hello';
    }
    
    if (req.parts[1] == undefined) {
        req.parts[1] = 'stranger';
    }
    res.write(req.query.salutation + ' ' + req.parts[1]);
    res.end();

};