const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 6000,
  video: false,

  reporter: 'cypress-mochawesome-reporter',
 
  e2e: {
    baseUrl: 'https://telnyx.com/',
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },



});
