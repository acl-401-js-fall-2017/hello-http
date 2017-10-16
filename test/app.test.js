const chai = require('chai');
const chaiHttp = require('chai-http');
const http = require('http');
chai.use(chaiHttp);
const assert = chai.assert;
const app = require ('../lib/app');


describe('http server', () => {
    
    const server = http.createServer(app); // create the server and pass that to chai.request
    const request = chai.request(server); // add an after that closes the server

    after(done => server.close(done));

    
    
    it('GET /greetings/name', done => {
        const name = 'michele';
        request.get(`/greetings/${name}`)
            .end((err, res) => {
                if(err) return done(err);
                assert.equal(res.text, 'hello michele');
                done();
            });
    });


    it('GET /greeting with no name', done => {
        request.get('/greetings')
            .end((err, res) => {
                if(err) return done(err);
                assert.equal(res.text, 'hello stranger');
                done();
            });
    });


    it('GET /greetings with pre-set salutation', done => {
        request.get('/greetings/jane?salutation=yo')
            .end((err, res) => {
                if(err) return done(err);
                assert.equal(res.text, 'yo jane');
                done();
            });
    });


    it('GET /fact and return randomly 1 of 3 facts', done => {
        request.get('/fact')
            .end((err, res) => {
                if(err) return done(err);
                assert.ok(/http/.test(res.body.fact));
                done();
            });
    });


    it('GET /not-found (404) when bad file path name given', done => {
        request.get('/badFileName')
            .end((err, res) => {
                if(!err) return done('expected error');
                assert.equal(res.status, '404');
                assert.equal(res.text, 'Cannot GET badFileName');
                done();
            });
    });
});

