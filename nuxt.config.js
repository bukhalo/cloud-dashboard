const webpack = require('webpack')
const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#fff'
  },

  /*
   ** Global CSS
   */
  css: ['bootstrap/dist/css/bootstrap.css', '@/assets/styles/app.css'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    {
      src: '~plugins/bootstrap.js',
      mode: 'client'
    },
    {
      src: '~plugins/ant-design.js',
      mode: 'client',
    }
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/apollo',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa'
  ],

  // Give apollo module options
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: 'http://0.0.0.0:3000/api',
        // See https://www.apollographql.com/docs/link/links/http.html#options
        httpLinkOptions: {
          credentials: 'same-origin'
        },
        wsEndpoint: null
      }
    }
  },

  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jquery: 'jquery',
        jQuery: 'jquery'
      })
    ],
    extend(config, ctx) {}
  },

  server: {
    port: 3000,
    host: '0.0.0.0'
  }
}
