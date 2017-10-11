const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const assert = chai.assert;
const app = require('../lib/app');

const request = chai.request(app);

describe('Tests Http', () => {
    it('GET request returns DEFAULT greeting', (done) => {
        request.get('/greeting')
            .end( (err,res) => {
                if(err) return done(err);
                assert.equal(res.text, 'Hello stranger');
                done();
            });
    });

    it('GET request returns greeting with NAME', (done) => {
        request.get('/greeting/Christina')
            .end( (err, res) => {
                if(err) return done(err);
                assert.equal(res.text, 'Hello Christina');
                done();
            });
    });
});

