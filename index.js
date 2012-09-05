var amino = require('amino');

exports.name = 'amino';

exports.dependencies = {
  http: '1.x'
};

exports.defaults = {
  service: {
    name: 'app'
  }
};

exports.init = function (app, done) {
  app.amino = amino.init(app.conf.get('amino'));
  done();
};

exports.ready = function (app, done) {
  var conf = app.conf.get('amino');
  app.http.once('listening', function () {
    console.log(app.service.spec + ' started');
    done();
  });
  if (!conf.service.version) {
    conf.service.version = require(app.pkgPath).version;
  }
  app.service = app.amino.createService(conf.service.name + '@' + conf.service.version, app.http);
};