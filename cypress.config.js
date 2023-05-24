const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1440,
  viewportHeight: 900,

  e2e: {
    baseUrl: 'https://magento2.algolia.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
