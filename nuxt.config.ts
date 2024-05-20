// @ts-ignore
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [[
    "@pinia/nuxt",
    {
      autoImports: ["defineStore", ["defineStore", "definePiniaStore"]],
    },
  ], "@nuxtjs/tailwindcss", '@nuxtjs/stylelint-module'],
});