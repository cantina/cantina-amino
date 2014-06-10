cantina-amino
=============

Enables a [Cantina](https://github.com/cantina/cantina) app to be auto-clustered
by [Amino](https://github.com/amino/amino).

Dependencies
------------
- **app.server** must be a valid server object.

Provides
--------
- **app.amino** - An amino instance.
- **app.service** - An amino service attached to `app.http`.

Configuration
-------------
- **service** - A service name and version.
- **...** - All amino configuration will be passed to `amino.init()`.

**Defaults**

```js
{
  amino: {
    service: {
      name: app.pkgData ? app.pkgData.name : 'app',
      version: app.pkgData ? app.pkgData.version : '0.0.0'
    },
    silent: false
  }
}
```

Using an amino plugin
-----------------------------

```js

var app = require('cantina')
  , queue = require('amino-queue')

app.boot(function (err) {
  if (err) throw err;

  // Load cantina-amino, which exposes `app.amino`.
  require('cantina-amino');

  // Use plugins.
  app.amino.use(queue, {options...});

  // Start the app.
  app.start();
});
```

- - -

### Developed by [Terra Eclipse](http://www.terraeclipse.com)
Terra Eclipse, Inc. is a nationally recognized political technology and
strategy firm located in Aptos, CA and Washington, D.C.
