const chai = require('chai');
const http = require('http');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const assert = chai.assert;
const app = require('../lib/app');

//starts a server and makes it so request object talks to server that got started
// const request = chai.request(app);

describe('http module', () => {
    
    const server = http.createServer(app);
    const request = chai.request(server);

    after(done => server.close(done));

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

    it('GET /fact returns object with fact property containing the word http', (done) => {
        request.get('/fact')
            .end( (err, res) => {
                if (err, res) return done(err);
                assert.ok(res.body.fact.includes('http'));
                done();
            });
    });

    it('returns 404 message and status on invalid url', (done) => {
        request.get('/brokenlink')
            .end( (err, res) => {
                if (err) {
                    const expectedMessage = `CANNOT ${res.res.req.method} ${res.res.req.path}`;
                    assert.equal(res.text, expectedMessage );
                    assert.equal(res.statusCode, 404);
                }
                done();
            });
    });
    
});