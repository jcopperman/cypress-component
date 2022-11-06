const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "m15eg8"
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      // some comment for jira
    },
  },
});
