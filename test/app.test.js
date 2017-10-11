const chai = require('chai');
const chaitHttp = require('chai-http');
chai.use(chaiHttp);
const assert = chai.assert;

const app = require('../lib/app');

describe('Tests Http', () => {
    it('GET request returns greeting', () => {
        request.get('/greeting/Christina')
            .end( (err,res) => {
                if(err) return done(err);
                assert.equal(res.text, 'Hello Christina');
            })
    })  
})
