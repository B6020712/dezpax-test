// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-07-03",
  runtimeConfig: {
    public: {
      BASEURL: process.env.BASEURL,
      FRONTEND_PORT: process.env.FRONTEND_PORT,
      BACKEND_PORT: process.env.BACKEND_PORT
    },
  },
  devServer: {
    port: process.env.FRONTEND_PORT
  },
  devtools: {
    enabled: false
  },
  modules: [
    "usebootstrap",
    "nuxt-bootstrap-icons"
  ],
  usebootstrap: {
    bootstrap: {
      prefix: ``
    },
    html: {
      prefix: `B`
    },
  },
  css: [
    // "bootstrap/scss/bootstrap.scss"
    "bootstrap/dist/css/bootstrap.min.css",
    "bootstrap-icons/font/bootstrap-icons.min.css"
  ]
})