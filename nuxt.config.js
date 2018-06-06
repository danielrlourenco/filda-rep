const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/filda-rep/'
  }
} : {}

module.exports = {
    /*
  ** Headers of the page
  */
    //mode: 'production',
    
    head: {
        title: 'FILDA',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Nuxt.js project' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'stylesheet', type: 'text/css', href: '~/css/font-awesome.min.css' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600' },
            { rel: 'stylesheet', type: 'text/css', href: '/css/ink-flex.min.css' },
        ],
        script: [
            { src: '/js/holder.js' },
            { src: '/js/ink-all.min.js' },
            { src: '/js/autoload.js' }
        ]
    },


    css: [
        '@/assets/less/filda-styles.less'
    ],



    /*
  ** Customize the progress bar color
  */
    loading: { color: '#3B8070' },
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
        }
    },
    
    
    router: {
    base: '/filda-rep/'
  }
    
}
