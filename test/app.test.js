const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const assert = chai.assert;

const app = require('../lib/app');

const request = chai.request(app);

describe('app test', ()=>{
    it('GET /greeting/<name> should respond with Hello <name>',(done) => {
        request.get('/greeting/Shane')
            .end((err, res) =>{
                if(err) return done(err);
                assert.equal(res.text, '<h1>Hello Shane</h1>');
                done();
            });
    });

    it('GET /greeting should respond with Hello Stanger', (done) => {
        request.get('/greeting')
            .end((err, res) =>{
                if(err) return done(err);
                assert.equal(res.text, '<h1>Hello stranger</h1>');
                done();
            });
    });


});