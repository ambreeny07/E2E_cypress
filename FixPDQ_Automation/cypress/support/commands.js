// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


const auth = require('./pages/Authentication.json');
const home = require('./pages/HomeScreen.json');
const swarmlistvar = require('./pages/SwarmList.json');

Cypress.Commands.add('Login',()=>{
    cy.fixture('Common.json').then(common=>{
        cy.visit(common.FiXPDQkeyURL);
        cy.get(auth.Login_Email).should('be.visible').type(common.ValidEmail)
        cy.get(auth.Login_Password).should('be.visible').type(common.ValidPassword)
        cy.get(auth.Login_Button).should('be.visible').click();
        cy.wait(2000)
        if (cy.get(home.ProfileButton,{timeout: 70000}).should('be.visible')) {
            cy.log("Successfully Login")
          }
          else {
            cy.log("Unsuccessfully Login")
            cy.get(auth.Login_Validation_Message).last().should('be.visible').then(function ($elem) {
              cy.log($elem.text())
            })
          }

        })      
        cy.get(swarmlistvar.whoNeedMyHelp).should('be.visible')
        // cy.wait(30000)
})