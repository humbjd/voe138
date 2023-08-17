const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    viewportHeight: 1080, // altura da tela com 1080 px
    viewportWidth: 1980, // largura da tela com 1980 px
    baseUrl: 'https://blazedemo.com', // endereço do site alvo - objeto de teste
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
