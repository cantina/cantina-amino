var app = require('cantina'),
    assert = require('assert'),
    util = require('util');

describe('basic test', function () {
  before(function (done) {
    app.load(done);
  });

  it('works', function (done) {
    require(app.plugins.http);
    require('../');

    app.conf.set('amino:silent', true);

    app.init(function (err) {
      assert.ifError(err);
      assert(app.service.spec.host);
      assert(app.service.spec.port);
      done();
    });
  });
});