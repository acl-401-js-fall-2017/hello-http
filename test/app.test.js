const app = require('../lib/app');
const chai = require('chai');
const chaiHttp = require('chai-http');
const http = require('http');
const assert = chai.assert;
chai.use(chaiHttp);

describe('greet app', () => {
    const server = http.createServer(app);
    const request = chai.request(server);

    after(done => server.close(done));

    it('sends a request to get greeting', done => {
        const name = 'Kate';
        request.get(`/greet/${ name }`)
            // .end() used to make the request and assert on its response
            .end((err, res) => {
                if(err) return done(err);
                assert.equal(res.text, 'hello Kate');
                done();
            });
    });

    it('gets a greeting with no name', done => {
        request.get('/greet')
            .end((err, res) => {
                if(err) return done(err);
                assert.equal(res.text, 'hello stranger');
                done();
            });
    });

    it('returns a greeting and salutation', done => {
        request.get('/greet/MrBoJangles?salutation=Yo')
            .end((err, res) => {
                if(err) return done(err);
                assert.equal(res.text, 'Yo MrBoJangles');
                done();
            });
    });

});