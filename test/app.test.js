const chai = require('chai');
const chaiHTTP = require('chai-http');
const app = require('../lib/app');
chai.use(chaiHTTP);
const assert = chai.assert;

const request = chai.request(app); //starting server and putting it in communication with the request object

describe('Altcoin App', () => {
    it('GET url path`', done => {
        request.get('/greeting/${name}`')
            .end((err, res) => {
                if (err) return done(err); 
                assert.equal(res.text, 'hello `${name}`');
                done();
            });
    });
});