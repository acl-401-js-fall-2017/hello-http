const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const assert = chai.assert;
const app = require ('../lib/app');


describe('http server', () => {
  
    const request = chai.request(app);

    
    it('GET /greeting', done => {
        const name = 'michele';
        request.get(`/greeting/${name}`)
            .end((err, res) => {
                if(err) return done(err);
                assert.equal(res.text, 'hello michele');
                done();
            });
    });





});