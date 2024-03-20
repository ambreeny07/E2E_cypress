/* global cy, beforeEach, before, afterEach, Cypress */

/*
 * ***********************************************************
 * This example support/index.js is processed and
 * loaded automatically before your test files.
 *
 * This is a great place to put global configuration and
 * behavior that modifies Cypress.
 *
 * You can change the location of this file or turn off
 * automatically serving support files with the
 * 'supportFile' configuration option.
 *
 * You can read more here:
 * https://on.cypress.io/configuration
 * ***********************************************************
 */

/*
 * Import commands.js using ES2015 syntax:
 * import './commands';
 */

// Alternatively you can use CommonJS syntax:
require('./commands');
require('cypress-xpath')
import 'cypress-localstorage-commands';
Cypress.on('uncaught:exception', () => false);
/*
before(() => {
  cy.clearLocalStorageSnapshot();
  cy.log('Local storage is cleared');
});

beforeEach(() => {
  cy.clearLocalStorageSnapshot();
  cy.log('Local storage is restored');
});

afterEach(() => {
  //cy.clearLocalStorageSnapshot();
  cy.log('Local storage is saved');
});*/
