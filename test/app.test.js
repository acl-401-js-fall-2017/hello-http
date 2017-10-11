const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const assert = chai.assert;
const app = require('../lib/app');
const request = chai.request(app);



describe('/greeting App', () => {
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