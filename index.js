var app = require('cantina'),
    amino = require('amino');

app.on('init', function () {
  app.conf.add({
    amino: {
      service: {
        name: app.pkgData ? app.pkgData.name : 'app',
        version: app.pkgData ? app.pkgData.version : '0.0.0'
      },
      silent: false
    }
  });
  app.amino = amino.init(app.conf.get('amino'));
});

app.on('ready', function (done) {
  var conf = app.conf.get('amino');
  app.http.once('listening', function () {
    if (!conf.silent) {
      console.log(app.service.spec + ' started');
    }
    done();
  });
  app.service = app.amino.createService(conf.service.name + '@' + conf.service.version, app.http);
});