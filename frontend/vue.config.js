module.exports = {
  devServer: {
    disableHostCheck: true,
  },

  outputDir: "dist/static/",
  // eslint-disable-next-line no-undef
  indexPath: '../index.html',
  // Куда пойдут ассеты (относительно outputDir)
  assetsDir: '', // ассеты храним там же, где и JS/CSS
  lintOnSave: true,
  runtimeCompiler: true,

  transpileDependencies: [
    'vuetify'
  ]
}
