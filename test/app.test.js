const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const assert = chai.assert;

const app = require('../lib/app');

const request = chai.request(app);

describe('hello-http', () => {
    it('')

});