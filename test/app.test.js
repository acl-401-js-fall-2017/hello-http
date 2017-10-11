const app = require('../lib/app');
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const assert = chai.assert;
const request = chai.request(app);


describe('hello-http', () => {
    
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

    it.skip('GET / facts', (done) => {
        request.get('/fact')
            .end((err, res) => {
                if(err) return done(err);
                assert.deepEqual(res.body, [
                    'Jake the Super Panda', 
                    'Sally Sumo Panda',
                    'Tiny'
                ]);
                done();
            });
    });



});