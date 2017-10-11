const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const assert = chai.assert;

const app = require('../lib/app');

const request = chai.request(app);

describe('app test', ()=>{
    it('GET /greeting/<name> should respond with greeting',(done) => {
        request.get('/greeting/Shane')
            .end((err, res) =>{
                if(err) return done(err);
                assert.equal(res.text, '<h1>Hello Shane</h1>');
                done();
            });
    });

});