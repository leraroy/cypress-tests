const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 6000,

  e2e: {
    baseUrl: 'https://telnyx.com/',
    setupNodeEvents(on, config) {
    },
  },

});
