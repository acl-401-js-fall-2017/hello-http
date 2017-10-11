const chai = require ('chai');
const chaiHTTP = require ('chai-http');
chai.use (chaiHTTP);
const assert = chai.assert;

const app = require('../lib/app');

const request = chai.request(app);

describe('Greeting', () => {
    it(' If the request specifies salutation and name respond with them', (done) =>{
        request.get('/greeting/Dude?salutation=Whasup')
            .end((err,res) =>{
                if (err) return done(err);
                assert.equal(res.text, 'Whasup Dude!');
                done();
            });
    });

    it(' If the request specifies nothing respond with Hello Stranger', (done) =>{
        request.get('/greeting/')
            .end((err,res) => {
                if (err) return done(err);
                assert.equal(res.text, 'Hello Stranger!');
                done();
            });
    });
});

describe('fact Test', () => {
    it(' should return a random fact', (done) => {
        request.get('/fact/')
            .end((err,res) => {
                if(err) return done(err);
                assert.ok(res.body.fact);
                done();
            });
    });
});

describe('Not Found on bad request', () => {
    it.only('should return 404 with text of CANNOT <method> <path>', (done) =>{
        request.delete('/facty')
            .end((err, res) => {
                assert.equal( res.statusCode, 404);
                assert.equal(res.text, 'CANNOT DELETE /facty'); 
                done();
            });
    });
});