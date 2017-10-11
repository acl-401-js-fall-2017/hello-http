'use strict';

const app = require('../lib/app');
const chai = require('chai');
const chaiHTTP = require('chai-http');
chai.use(chaiHTTP);
const assert = chai.assert;

const request = chai.request(app);

describe('server', () => {
    it('runs', done => {
        request.get('/test')
            .end((err, res) => {
                if(err) return done(err);
                assert.equal(res.text, 'test');
                done();
            });
    });
});