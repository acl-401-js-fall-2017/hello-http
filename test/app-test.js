const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../lib/app');
const http = require('http');
chai.use(chaiHttp);
const assert = chai.assert;


describe('hello-http app', () =>{

    const server = http.createServer(app);
    const request = chai.request(server);

    after(done => server.close(done));

    it('GET /greeting/name', (done) =>{
        let name = 'Chewy';
        request.get(`/greeting/${name}`)
            .end((err, res) =>{
                if(err) return done(err);
                assert.equal(res.text, 'hello Chewy');
                done();
            });
    });

    // it.skip('Returns a 404 message', () => {
    //     request.get('/bad')
    //         .end((res, res) =>{
    //             if(!err)return done('error from http response');
    //             assert.equal(err.status, 404);
    //             assert.equal(res.text, `Cannot ${method}, ${url, path}`);
    //             done();
    //         });
    // });

});
