const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../lib/app');
chai.use(chaiHttp);
const assert = chai.assert;
const greeting = require('../lib/greet-app');

const request = chai.request(app);

describe('hello-http app', () =>{

    it('GET /name', () =>{
        request.get('/name')
            .end((err, res) =>{
                assert.deepEqual(res.text, 'hello person');
            });
    });

    // it('Returns a 404 message', () => {
    //     request.get('/bad')
    //         .end((res, res) =>{
    //             if(!err)return done('error from http response');
    //             assert.equal(err.status, 404);
    //             assert.equal(res.text, `Cannot ${method}, ${url, path}`);
    //             done();
    //         });
    // });

});