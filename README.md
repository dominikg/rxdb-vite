Reproduction for https://github.com/vitejs/vite/issues/847

Run `yarn && yarn dev`

```
[vite] Optimizable dependencies detected:
rxjs, vue, rxdb/plugins/core

  Dev server running at:
  > Local:    http://localhost:3000/
  > Network:  http://192.168.2.119:3000/


  Error: ENOENT: no such file or directory, stat 'events'
      at Object.statSync (fs.js:1042:3)
      at Object.statSync (/home/dominikg/develop/frederik/vite-rxdb/node_modules/graceful-fs/polyfills.js:308:16)
      at cachedRead (/home/dominikg/develop/frederik/vite-rxdb/node_modules/vite/dist/node/utils/fsUtils.js:24:45)
      at serve (/home/dominikg/develop/frederik/vite-rxdb/node_modules/vite/dist/node/server/serverPluginModuleResolve.js:35:23)
      at /home/dominikg/develop/frederik/vite-rxdb/node_modules/vite/dist/node/server/serverPluginModuleResolve.js:67:20
      at dispatch (/home/dominikg/develop/frederik/vite-rxdb/node_modules/koa-compose/index.js:42:32)
      at /home/dominikg/develop/frederik/vite-rxdb/node_modules/vite/dist/node/server/serverPluginEnv.js:24:16
      at dispatch (/home/dominikg/develop/frederik/vite-rxdb/node_modules/koa-compose/index.js:42:32)
      at /home/dominikg/develop/frederik/vite-rxdb/node_modules/vite/dist/node/server/serverPluginHtml.js:42:15
      at dispatch (/home/dominikg/develop/frederik/vite-rxdb/node_modules/koa-compose/index.js:42:32)

```

Root cause is that `node_modules/rxdb/dist/es/rx-database.js` imports `pouchdb-core` via `node_modules/rxdb/dist/es/pouch-db.js`
and `node_modules/pouchdb-core/lib/index.es.js` contains `import EE from 'events';`


Also see `vite.config.js` for a fruitless attempt to fix this with rollup-plugin-node-polyfills

 

