'use strict';

const app = require('../lib/app');
const http = require('http');
const chai = require('chai');
const chaiHTTP = require('chai-http');
chai.use(chaiHTTP);
const assert = chai.assert;

const server = http.createServer(app);
const request = chai.request(server);

describe('server', () => {
    after( done => server.close(done));
    describe('greeting', () => {
        it('responds with a greeting to /greeting/<name>', done => {
            request.get('/greeting/Mie')
                .end((err, res) => {
                    if(err) return done(err);
                    assert.equal(res.text, 'Howdy Mie');
                    done();
                });
        });

        it('responds with "stranger" when name is not provided', done => {
            request.get('/greeting')
                .end((err, res) => {
                    if(err) return done(err);
                    assert.equal(res.text, 'Howdy Stranger');
                    done();
                });
        });

        it('responds with given salutation if provided', done => {
            request.get('/greeting?salutation=hi')
                .end((err, res) => {
                    if(err) return done(err);
                    assert.equal(res.text, 'hi Stranger');
                    done();
                });
        });
    });

    describe('fact', () => {
        it('returns a random http fact when called', () => {
            request.get('/fact')
                .end((err, res) => {
                    if(err) return done(err);
                    assert.ok(/^HTTP fact: /.test(res.text));
                    done();
                });
        });
    });

    describe('invalid paths', () => {
        it('returns status code 404 when given a bad path', done => {
            request.get('/test')
                .end((err, res) => {
                    if(err) {
                        assert.equal(res.statusCode, 404);
                        return done();
                    }
                    assert.equal(res.statusCode, 404);
                    done();
                });
            
        });
            
        it('returns status code 404 when given something other than a get request', done => {
            request.post('/greeting')
                .send({this: 'is', an: 'object'})
                .set('accept', 'json')
                .end((err, res) => {
                    if(err) {
                        assert.equal(res.statusCode, 404);
                        return done();
                    }
                    assert.equal(res.statusCode, 404);
                    done();
                });
        });
    });
});