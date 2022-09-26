const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth:1000,
  viewportHeight: 1000,
  defaultCommandTimeout: 4000,
  screenshotsFolder: 'cypress\screenshots',
  
  retries: {
    openMode: 2,
    runMode: 1,
  },

  e2e: {
    baseUrl: 'https://telnyx.com/',
    setupNodeEvents(on, config) {
    },
  },

});