const app = require('../lib/app');
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const assert = chai.assert;



describe('hello-http', () => {
    
    const request = chai.request(app);
    
    it('GET / greeting/name', (done) => {
        let name = 'Jane';
        request.get(`/greeting/${name}`)
            .end((err, res) => {
                if(err) return done(err);
                assert.equal(res.text, 'Hello Jane' );
                done();
            });
    });

});