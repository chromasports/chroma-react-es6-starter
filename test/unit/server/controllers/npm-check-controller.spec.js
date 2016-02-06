import fetch from 'isomorphic-fetch';

describe('POST /npm-check', function() {
  this.timeout('15000');

  it('respond with the correct json structure', (done) => {

    fetch('http://localhost:8081/npm-check', {
      method: 'POST',
      'Content-Type': 'application/json'
    }).then((response) => {
      return response.json();
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.data).to.be.a('object');
      done();
    });

  });

})
