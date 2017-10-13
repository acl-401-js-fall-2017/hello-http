const app = require('../lib/app');
const http = require('http');
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const assert = chai.assert;



describe('hello-http', () => {

    const server = http.createServer(app);
    const request = chai.request(server);

    after(done => server.close(done));
    
    it('GET /', (done) => {
        request.get('/')
            .end((err, res) => {
                if(err) return done(err);
                assert.equal(res.text, 'Welcome to Hello-Http' );
                done();
            });
    });

    it('GET / greeting', (done) => {
        request.get('/greeting')
            .end((err, res) => {
                if(err) return done(err);
                assert.equal(res.text, 'Hello stranger' );
                done();
            });
    });
    
    it('GET / greeting/name', (done) => {
        let name = 'Jane';
        request.get(`/greeting/${name}`)
            .end((err, res) => {
                if(err) return done(err);
                assert.equal(res.text, 'Hello Jane' );
                done();
            });
    });

    it('GET / fact', (done) => {
        request.get('/fact')
            .end((err, res) => {
                if(err) return done(err);
                assert.ok(res.text);
                done();
            });
    });



});