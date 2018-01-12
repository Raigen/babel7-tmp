# Lerna with Babel 7 sample

`pck1` imports `pck2` which does import `bluebird`.

See https://github.com/Raigen/babel6-tmp for Babel 6 version.

```
npm install
```

```
$ npm start

> babel7-sample@1.0.0 start C:\Users\foellerich\Git\babel7-tmp
> lerna exec --scope pck1 -- npm start

lerna info version 2.7.0
lerna info scope pck1

> pck1@1.0.0 start C:\Users\foellerich\Git\babel7-tmp\packages\pck1
> babel-node index.js

C:\Users\foellerich\Git\babel7-tmp\packages\pck2\server.js:1
(function (exports, require, module, __filename, __dirname) { import Bluebird from 'bluebird'
                                                              ^^^^^^

SyntaxError: Unexpected token import
    at createScript (vm.js:80:10)
    at Object.runInThisContext (vm.js:139:10)
    at Module._compile (module.js:607:28)
    at Module._compile (C:\Users\foellerich\Git\babel7-tmp\packages\pck1\node_modules\pirates\lib\index.js:91:24)
    at Module._extensions..js (module.js:654:10)
    at Object.newLoader [as .js] (C:\Users\foellerich\Git\babel7-tmp\packages\pck1\node_modules\pirates\lib\index.js:96:7)
    at Module.load (module.js:556:32)
    at tryModuleLoad (module.js:499:12)
    at Function.Module._load (module.js:491:3)
    at Module.require (module.js:587:17)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! pck1@1.0.0 start: `babel-node index.js`
npm ERR! Exit status 1
npm ERR!
npm ERR! Failed at the pck1@1.0.0 start script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     C:\Users\foellerich\AppData\Roaming\npm-cache\_logs\2018-01-12T11_26_51_749Z-debug.log
lerna ERR! exec Errored while executing 'npm start' in 'pck1'
lerna ERR! execute callback with error
lerna ERR! Error: spawn npm ENOENT
lerna ERR!     at notFoundError (C:\Users\foellerich\Git\babel7-tmp\node_modules\cross-spawn\lib\enoent.js:11:11)
lerna ERR!     at verifyENOENT (C:\Users\foellerich\Git\babel7-tmp\node_modules\cross-spawn\lib\enoent.js:46:16)
lerna ERR!     at ChildProcess.cp.emit (C:\Users\foellerich\Git\babel7-tmp\node_modules\cross-spawn\lib\enoent.js:33:19)
{ Error: spawn npm ENOENT
    at notFoundError (C:\Users\foellerich\Git\babel7-tmp\node_modules\cross-spawn\lib\enoent.js:11:11)
    at verifyENOENT (C:\Users\foellerich\Git\babel7-tmp\node_modules\cross-spawn\lib\enoent.js:46:16)
    at ChildProcess.cp.emit (C:\Users\foellerich\Git\babel7-tmp\node_modules\cross-spawn\lib\enoent.js:33:19)
    at Process.ChildProcess._handle.onexit (internal/child_process.js:198:12)
  errno: 'ENOENT',
  code: 'ENOENT',
  syscall: 'spawn npm',
  killed: false,
  stdout: null,
  stderr: null,
  failed: true,
  signal: null,
  cmd: 'npm start',
  timedOut: false,
  exitCode: 1 }
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! babel7-sample@1.0.0 start: `lerna exec --scope pck1 -- npm start`
npm ERR! Exit status 1
npm ERR!
npm ERR! Failed at the babel7-sample@1.0.0 start script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     C:\Users\foellerich\AppData\Roaming\npm-cache\_logs\2018-01-12T11_26_51_864Z-debug.log
```
