const chai = require('chai');
const chaiHTTP = require('chai-http');
const app = require('../lib/app');
chai.use(chaiHTTP);
const assert = chai.assert;

const request = chai.request(app);

describe('App', () => {
    it('responds w/ greeting when GET /greeting/<name>', done => {
        request.get(`/greeting/${app.name}`)
            .end((err, res) => {
                if (err) return done(err); 
                assert.equal(res.text, `hello ${app.name}`);
                done();
            });
    });

    it('Get /greeting/<name>?salutation=<salutation>')
});