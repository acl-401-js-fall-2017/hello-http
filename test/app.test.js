const app = require('../lib/app');
const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
// asking chai to take the app and test against it ( a fake server)
const request = chai.request(app);

describe('greet app', () => {
    it('sends a request to get greeting', done => {
        // send a request with input = '/greet/kate'
        // '/greet/kate' is a string with the url path
        request.get('/greet/kate')
            // .end() used to make the request and assert on its response
            .end((err, res) => {
                if(err) return done(err);
                assert.equal(res.text, 'Hello Kate');
                done();

            });

    });

});