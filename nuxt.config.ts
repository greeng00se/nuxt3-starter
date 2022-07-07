import { defineNuxtConfig } from "nuxt";

const lifecycle = process.env.npm_lifecycle_event;

export default defineNuxtConfig({
  css: ["~/assets/scss/index.scss"],
  build: {
    transpile: lifecycle === "build" ? ["element-plus"] : [],
  },
  buildModules: [
    'nuxt-windicss', '@pinia/nuxt'
  ],
});
