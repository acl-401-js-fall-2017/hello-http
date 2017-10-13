const chai = require('chai');
const http = require('http');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const assert = chai.assert;
const app = require('../lib/app');

const server = http.createServer(app);
const request = chai.request(server);

after(done => server.close(done));



describe('Tests Http', () => {
    it('GET request returns DEFAULT greeting', (done) => {
        request.get('/greeting')
            .end( (err,res) => {
                if(err) return done(err);
                assert.equal(res.text, 'Hello,  stranger');
                done();
            });
    });

    it('GET request returns greeting with NAME', (done) => {
        request.get('/greeting/Christina')
            .end( (err, res) => {
                if(err) return done(err);
                assert.equal(res.text, 'Hello,  Christina');
                done();
            });
    });

    it('GET request returns with specified greeting Salutation', (done) => {
        request.get('/greeting/Christina?salutation=yo')
            .end( (err, res) => {
                if(err) return done(err);
                assert.equal(res.text, 'yo Christina');
                done();
            });

    });
});

