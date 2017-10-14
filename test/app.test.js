const app = require('../lib/app');
const chai = require('chai');
const chaiHttp = require('chai-http');
const http = require('http');
const assert = chai.assert;
chai.use(chaiHttp);

describe('greet app', () => {
    // const server = http.createServer(app);
    // asking chai to take the app and test against it ( a fake server)
    // const request = chai.request(server);

    // after(done => server.close(done));
    it('sends a request to get greeting', done => {
        // send a request with input = '/greet/kate'
        // '/greet/kate' is a string with the url path
        const name = 'Kate';
        request.get(`/greet/${ name }`)
            // .end() used to make the request and assert on its response
            .end((err, res) => {
                if(err) return done(err);
                assert.equal(res.text, 'Hello Kate');
                done();
            });

    });

});