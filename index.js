var app = require('cantina')
  , amino = require('amino')
  , conf = app.conf.get('amino')

app.conf.add({
  amino: {
    service: {
      name: app.pkgData ? app.pkgData.name : 'app',
      version: app.pkgData ? app.pkgData.version : '0.0.0'
    },
    silent: false
  }
});

app.on('init', function (done) {
  app.series('amino:init', amino, function (err) {
    if (err) return done(err);
    app.amino = amino.init(app.conf.get('amino'));
    done();
  });
});

app.on('ready', function (done) {
  if (app.http) {
    app.http.once('listening', function () {
      if (!conf.silent) {
        console.log(app.service.spec + ' started');
      }
      done();
    });
    var conf = app.conf.get('amino');
    app.service = app.amino.createService(conf.service.name + '@' + conf.service.version, app.http);
  }
  else {
    done();
  }
});