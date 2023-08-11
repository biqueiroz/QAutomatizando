const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  viewportWidth: 1440,
  viewportHeight: 900,
  experimentalStudio: true,

  retries: {
    runMode: 3,
    openMode: 1,
    },

  e2e: {
    baseUrl: 'https://magento2-demo.magebit.com',
    experimentalRunAllSpecs: true,
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
      // implement node event listeners here
    },
  },
});
