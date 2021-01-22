export default {
  target: 'static',
  router: {
    base: '/Basic/',
    // middleware: ['auth'],
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Basic',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&family=Yusei+Magic&display=swap',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/styles/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: 'https://localhost:5001/api',
    credentials: true,
  },
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { method: 'POST', url: 'login', propertyName: 'token' },
          user: {
            method: 'GET',
            url: 'UserMasters/admin',
            propertyName: 'username',
          },
          logout: false,
        },
      },
    },
    redirect: {
      login: '/login',
    },
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
