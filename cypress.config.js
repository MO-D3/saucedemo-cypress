const { defineConfig } = require("cypress");

/**
 * Cypress configuration for the SauceDemo test suite.
 *
 * The `baseUrl` is set to the production site so that tests can
 * simply call `cy.visit('/')` to load the login page. TypeScript
 * support is enabled through this config and the tsconfig in the
 * project root. Support and command files live in the `cypress/support`
 * folder.  Adjust the `specPattern` to pick up any `.cy.ts` files
 * under the `cypress/e2e` folder.
 */
module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com',
    specPattern: 'cypress/e2e/**/*.cy.ts',
    supportFile: 'cypress/support/e2e.ts',
    chromeWebSecurity: false,
    viewportWidth: 1280,
    viewportHeight: 720,
    video: false
  }
});