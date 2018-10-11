module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'manager-ui',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js' },
      { src: 'https://cdn.bootcss.com/html2canvas/0.5.0-beta4/html2canvas.min.js' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  plugins: [{
    src: '~plugins/ElementUI',
    ssr: true,
  }],
  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],
  router: {
    middleware: 'auth'
  },
  modules:[
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],
  proxy:[
    ['/json.html',{target:'http://localhost:3333'}]    //注意这也是一个数组
  ],
/*  axios: { prefix: '/api/', proxy: true},
  proxy: { '/api/': { target: 'http://localhost:8080', pathRewrite: {'^/api/': ''} } },*/
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    vendor:['element-ui']
  }
}
