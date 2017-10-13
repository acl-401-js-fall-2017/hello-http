const chai = require('chai');
const chaiHTTP = require('chai-http');
const app = require('../lib/app');
chai.use(chaiHTTP);
const assert = chai.assert;

const request = chai.request(app);

describe('App', () => {
   
    describe('Greeting', () => {
        const name = 'Eli';
        it('responds with greeting when GET /greeting/<name>', done => {
            request.get(`/greeting/${name}`)
                .end((err, res) => {
                    if (err) done(err);
                    assert.equal(res.text, 'hello Eli');
                    done();
                });
        });

        it('if salutation specified Get /greeting/<name>?salutation=<salutation>', done => {
            const salutation = 'yo';
            request.get(`/greeting/${name}?salutation=${salutation}`)
                .end((err, res) => {
                    if (err) done(err);
                    assert.equal(res.text, 'yo Eli');
                    done();
                });
        });
    });
    describe('Interesting Fact', () => {
        it('responds to GET /fact with an http fact', done => {
            request.get('/fact')
                .end((err, res) => {
                    if (err) done(err);
                    assert.ok(res.text);
                    done();
                });
        });
    });
    describe('Error Message', () => {
        it('returns 404 when not found', done => {
            request.get('/bad')
                .end((err, res) => {
                    if (!err) done('expected error from http response');
                    assert.equal(err.status, 404);
                    assert.equal(res.text, 'Cannot <Method> <Pathname>'); 
                    done();
                });
        });
    });
});