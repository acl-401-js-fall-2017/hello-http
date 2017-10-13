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
                    if (err) return done(err);
                    assert.equal(res.text, 'hello Eli');
                    done();
                });
        });

        it('if salutation specified Get /greeting/<name>?salutation=<salutation>', done => {
            const salutation = 'yo';
            request.get(`/greeting/${name}?salutation=${salutation}`)
                .end((err, res) => {
                    if (err) return done(err);
                    assert.equal(res.text, 'yo Eli');
                    done();
                });
        });
    });
    describe('Interesting fact', () => {
        it('responds to GET /fact with an http fact', done => {
            request.get('/fact')
                .end((err, res) => {
                    if (err) return done(err);
                    assert.equal(res.fact, [
                        'http typically uses port 80',
                        'https is a more secure version of http',
                        'https uses port'
                    ]);
                    done();
                });
        });
    });
});