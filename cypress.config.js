const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    baseUrl: "https://www.saucedemo.com/",
    apiUrl: "http://localhost:3001/api",
  },
});