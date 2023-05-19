// eslint-disable-next-line no-undef
const path = require('path');

module.exports = {
  devServer: {
    disableHostCheck: true,
  },
  css: {
    extract: true,
  },
  publicPath: '/static/src/vue/dist/', // Should be STATIC_URL + path/to/build
  // eslint-disable-next-line no-undef
  outputDir: path.resolve(__dirname, '../static/src/vue/dist/'), // Output to a directory in STATICFILES_DIRS
  indexPath: '../../../../templates/start/index.html',
  filenameHashing: true, // Django will hash file names, not webpack
  runtimeCompiler: true, // See: https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only

  transpileDependencies: [
    'vuetify'
  ]
}
