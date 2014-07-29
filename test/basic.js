var assert = require('assert')
  , util = require('util')
  , http = require('http');

describe('basic test', function () {
  before(function (done) {
    app = require('cantina').createApp();
    app.silence();
    app.boot(function (err) {
      assert.ifError(err);

      app.server = http.createServer();
      app.require('../');
      app.amino.use(require('amino-queue'));

      app.start(done);
    });
  });

  it('works', function () {
    assert(app.amino);
    assert(app.amino.queue);
    assert(app.service.spec.host);
    assert(app.service.spec.port);
  });
});