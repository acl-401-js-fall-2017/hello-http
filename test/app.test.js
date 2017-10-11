const chai = require('chai');
const assert = chai.assert;
const app = require('../lib/app');
const chaiHttp = require('chai-http');
const http = require('http'); // (1) add a require for http
chai.use(chaiHttp);



describe('/greeting App', () => {

    const server = http.createServer(app);
    const request = chai.request(server);

    after(done => server.close(done));

    it('responds with a greeting', done => {

        request.get('/greeting')
            .end((err, res) => {
                if(err) done(err);
                assert.equal(res.text, 'hello stranger!');
                done();

            });
    });

    it('returns a greeting with a name', done => {

        request.get('/greeting/zac')
            .end((err, res) => {
                if(err) done(err);
                assert.equal(res.text, 'hello zac');
                done();
            });
    });

    it('returns greeting and salutation', done => {

        request.get('/greeting/zac?salutation=hey')
            .end((err, res) => {
                if(err) done(err);
                assert.equal(res.text, 'hey zac');
                done();
            });
    });

    // it('returns a random fact', done => {

    //     request.get('/fact')
    //         .then( res => {
    //             assert.equal(res.text, )
    //         });
    // });

    it('returns 404', done => {

        request.get('/test')
            .end((err, res ) => {
                assert.equal(res.statusCode, 404);
                assert.equal();
                done();
            });
    });

});