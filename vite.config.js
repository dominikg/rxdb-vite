const rollupPluginNodePolyfills = require('rollup-plugin-node-polyfills');
module.exports = {
  /*
  doesn't work as expected, the plugin needs to be loaded after commonjs plugin as per this comment
  https://github.com/ionic-team/rollup-plugin-node-polyfills/issues/6#issuecomment-664109066
  may work after fix for  https://github.com/vitejs/vite/issues/728 has been released
  rollupInputOptions: {
    plugins:[rollupPluginNodePolyfills()]
  },
  */
  optimizeDeps: {
    include:['rxdb/plugins/core'], // try to limit scope of optimized module
    exclude:['rxdb'],
    allowNodeBuiltins: [
      'pouchdb-core',
      'pouchdb-replication',
      'pouchdb-utils'
    ]
  }
}