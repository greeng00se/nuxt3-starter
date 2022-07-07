import { defineNuxtConfig } from "nuxt";

export default defineNuxtConfig({
  css: ["~/assets/scss/index.scss"],
  build: {
    transpile: ["element-plus"],
  },
  buildModules: [
    'nuxt-windicss',
  ],
});
