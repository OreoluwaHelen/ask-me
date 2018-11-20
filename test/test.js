import chaiHttp from 'chai-http';
import chai from 'chai';
import app from '../index';


const { expect } = chai;
chai.use(chaiHttp);

describe('initial testing', () => {
  it('should display a welcome message', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res.body.message).to.equal('welcome to ask me');
        done();
      });
  });
});
