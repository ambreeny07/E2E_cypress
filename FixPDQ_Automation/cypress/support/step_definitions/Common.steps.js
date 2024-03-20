const auth = require('../pages/Authentication.json');

Given('I am on FIXPDQ page', () => {
  cy.wait(1000);
  cy.fixture('Common.json').then(common=>{
    cy.visit(common.FiXPDQkeyURL);
  })
});

When('I enter a valid email', () => {
  cy.wait(1000);
  cy.fixture('Common.json').then(common=>{
    cy.get(auth.Login_Email).should('be.visible').type(common.ValidEmail)
  })
});

Then('I enter a valid password', () => {
  cy.wait(1000);
  cy.fixture('Common.json').then(common=>{
    cy.get(auth.Login_Password).should('be.visible').type(common.ValidPassword)
  })   
});

Given('I logged into the FIXPDQ app', () => {
  cy.Login();
});
