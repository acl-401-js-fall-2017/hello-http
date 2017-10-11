'use strict';

const app = require('../lib/app');
const chai = require('chai');
const chaiHTTP = require('chai-http');
chai.use(chaiHTTP);
const assert = chai.assert;

const request = chai.request(app);

describe('server', () => {
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

    describe('valid/invalid paths', () => {
        it('returns status code 404 when given a bad path', done => {
            request.get('/test')
                .end((err, res) => {
                    if(err) return done(err);
                    assert.equal(res.text, 'test');
                    done();
                });
            
        });
            
        it('returns status code 404 when given something other than a get request', () => {
            request.post('/greeting')
                .send({this: 'is', an: 'object'})
                .set('accept', 'json')
                .end((err, res) => {
                    if(err) console.log(res.status);
                    console.log(res.status);
                    assert.equal();
                    done();
                });
        });
    });
});