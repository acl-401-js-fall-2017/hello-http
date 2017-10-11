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

    it('GET /greeting/jack?salutation=yo should respond with yo jack', (done)=>{
        request.get('/greeting/jack?salutation=yo')
            .end((err, res) =>{
                if(err) return done(err);
                assert.equal(res.text, '<h1>yo jack</h1>');
                done();
            });

    });
    
    it('GET /fact should repond with html fact', (done)=>{
        request.get('/fact')
            .end((err, res) =>{
                if(err) return done(err);
                const validResponses = ['HTML is BOO BOP','HTML is BOO BOP1', 'HTML is BOO BOP2'];
                assert.ok(validResponses.includes(res.text));
                done();
            });

    });


});