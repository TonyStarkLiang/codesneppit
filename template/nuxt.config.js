module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: 'codeblock',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: '代码模块'
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }],
  },
  /*调用element-ui自带的css样式*/
  css: [{
    src: 'element-ui/lib/theme-chalk/index.css'
  }],
  /*调用element-ui插件，ssr是服务器渲染*/
  plugins: [{
    src: '~plugins/element-ui.js',
    ssr: false
  }],

  /*
   ** Customize the progress bar color
   */
  loading: {
    color: '#3B8070'
  },
  /*
   ** Build configuration
   */
  build: {
    vendor: ['element-ui'],
    /*
     ** Run ESLint on save
     */
    extend(config, {
      isDev,
      isClient
    }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
