const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const assert = chai.assert;
const app = require('../lib/app');

//starts a server and makes it so request object talks to server that got started
const request = chai.request(app);

describe('http module', () => {
    
    it('GET /greeting returns "hello, stranger" text', done => {
        request.get('/greeting')
            .end( (err, res) => {
                if (err) return done(err);
                assert.equal(res.text, 'hello, stranger');
                done();
            });
    });

    it('GET /greeting/foo returns "hello, foo" text', done => {
        request.get('/greeting/foo')
            .end( (err, res) => {
                if (err) return done(err);
                assert.equal(res.text, 'hello, foo');
                done();
            });
    });

    it('GET /greeting/foo?custom=hi returns "hi, foo" text', done => {
        request.get('/greeting/foo?custom=hi')
            .end( (err, res) => {
                if (err) return done(err);
                assert.equal(res.text, 'hi, foo');
                done();
            });
    });

    it('GET /fact returns object with fact property', (done) => {
        request.get('/fact')
            .end( (err, res) => {
                if (err) return done(err);
                assert.equal(typeof res.body, 'object' );
                assert.ok(res.body.fact);
                done();
            });
    });

    it('returns 404 message on invalid url', (done) => {
        request.get('/brokenlink')
            .end( (err, res) => {
                if (err) {
                    assert.equal(res.statusCode, 404);
                }
                done();
            });
    });
    
});