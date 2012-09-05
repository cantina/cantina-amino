var cantina = require('cantina')
  , plugin = require('../')

describe('basic test', function () {
  it('works', function (done) {
    var app = cantina.createApp(['http', plugin], function (err) {
      assert(app.service.spec.host);
      assert(app.service.spec.port);
      done();
    });
  });
});