const { defineConfig } = require('cypress')

module.exports = defineConfig({
  chromeWebSecurity: false,
  defaultCommandTimeout: 60000,
  pageLoadTimeout: 60000,
  reporter: 'mochawesome',
  env: {
    url: 'https://www.mrandmrssmith.com/'
  },
  retries: {
    runMode: 0,
  },
  e2e: {
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    specPattern: 'cypress/integration/BDD/*.feature',
  },
})
