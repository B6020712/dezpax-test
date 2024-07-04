// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-07-03",
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