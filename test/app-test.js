const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const assert = chai.assert;
const app = require('../lib/app');

//starts a server and makes it so request object talks to server that got started
const request = chai.request(app);

describe('http greeting', () => {
    
    it('GET /greeting', done => {
        console.log('about to test');
        request.get('/greeting')
            .end( (err, res) => {
                console.log('in end callbck');
                if (err) return done(err);
                assert.equal(res.text, 'hello, stranger');
                done();
            });
    });
    
});

///respond with a greeting if method is GET and url path is /greeting/<name>
// on localhost:8080/greeting/ , web text is "hello, stranger"