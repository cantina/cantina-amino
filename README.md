cantina-amino
=============

Enables a [Cantina](https://github.com/cantina/cantina) app to be auto-clustered
by [Amino](https://github.com/amino/amino).

Dependencies
------------
- **http** - The core http Cantina plugin.

Provides
--------
- **app.amino** - An amino instance.
- **app.service** - An amino service attached to `app.http`.

Configuration
-------------
- **service** - A service name and version.
- **silent** - Don't to console.log any startup messages.
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

Using a non-core amino plugin
-----------------------------

```js

var app = require('cantina')
  , queue = require('amino-queue')

app.on('amino:init', function (amino) {
  amino.use(queue, {options...});
});

require('cantina-amino');

app.on('init', function () {
  // app.amino is available
});
app.init();
```

- - -

### Developed by [Terra Eclipse](http://www.terraeclipse.com)
Terra Eclipse, Inc. is a nationally recognized political technology and
strategy firm located in Aptos, CA and Washington, D.C.

- - -

### License: MIT
Copyright (C) 2012 Terra Eclipse, Inc. ([http://www.terraeclipse.com](http://www.terraeclipse.com))

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is furnished
to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.