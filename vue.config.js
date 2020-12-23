module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/ediewilson.github.io/'
    : '/',

  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/scss/_variables.scss";
          @import "@/scss/_mixins.scss";
        `
      }
    }
  },
}