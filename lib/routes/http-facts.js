
module.exports = function fact(req, res) {
    res.setHeader('Content-Type', 'application/json');
    let num = getRandomNum();

    const fact1 = {fact: 'http is a stateless protocol'};
    const fact2 = {fact: 'the current version of http is 1.1'};
    const fact3 = {fact: 'urls, verbs and status codes make up the http request/response pair'};
    const arrayFacts = [fact1, fact2, fact3];
    const factStringified = JSON.stringify(arrayFacts[num]);
    res.end(factStringified);

    function getRandomNum() {
        return Math.floor(Math.random() * 3); //gets a number between 0 and 2;
    }


};