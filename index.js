var amino = require('amino');

exports.name = 'amino';

exports.dependencies = {
  'http': '1.x'
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
  var service = conf.service;
  if (!service) {
    var pkgInfo = require(app.pkgPath);
    service = pkgInfo.name + '@' + pkgInfo.version;
  }
  app.service = app.amino.createService(service, app.http);
};