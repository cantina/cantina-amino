var amino = require('amino')
  , conf;

module.exports = function (app) {
  // Default conf.
  app.conf.add({
    amino: {
      service: {
        name: app.pkgData ? app.pkgData.name : 'app',
        version: app.pkgData ? app.pkgData.version : '0.0.0'
      }
    }
  });

  // Get conf.
  conf = app.conf.get('amino');

  // Init amino.
  if (conf) {
    app.amino = amino.init(conf);

    // Create service when app is started.
    if (app.server && conf.service) {
      app.hook('start').add(function (done) {
        app.server.once('listening', function () {
          app.log(app.service.spec + ' started');
          done();
        });
        app.service = app.amino.createService(conf.service.name + '@' + conf.service.version, app.server);
      });
    }
  }
};
