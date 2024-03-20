

const auth = require('../pages/Authentication.json');
const home = require('../pages/HomeScreen.json');

Then('I enter a invalid password', () => {;
  cy.fixture('Common.json').then(common=>{
    cy.get(auth.Login_Password).should('be.visible').type(common.InValidPassword)
  })  
});
When('I enter a invalid email', () => {
  cy.fixture('Common.json').then(common=>{
    cy.get(auth.Login_Email).should('be.visible').type(common.InValidEmail)
  })
  
});

Then('I enter user3 a valid email', () => {
  cy.fixture('Common.json').then(common=>{
  cy.get(auth.Login_Email).should('be.visible').type(common.User3Email)
  })  
});

And('I enter user3 a valid password', () => {
  cy.fixture('Common.json').then(common=>{
    cy.get(auth.Login_Password).should('be.visible').type(common.User3Password)
  })  
});

And('I click on login button', () => {
  cy.get(auth.Login_Button).should('be.visible').click();
});

And('I Verify that login button is visible', () => {
  cy.get(auth.Login_Button).should('be.visible');
});

And('I Validate Profile Button On Home Screen', () => {
  cy.get(home.ProfileButton,{timeout: 60000}).should('be.visible')
});

And('I check password visible as bullet sign', () => {
  cy.get(auth.Login_Password).should('be.visible')
  cy.get(auth.Login_Password).should('have.attr','type',"password")
});

Then('I Validating Error Message', () => {
  cy.get(auth.Login_Validation_Message).last().should('be.visible')
});

Then('I Verify Email PlaceHolder In Login Page', () => {
  cy.get(auth.Login_Email).should('be.visible')
  cy.get(auth.Login_Email).should('have.attr','placeholder',"example@mail.com")
});

Then('I Verify Password PlaceHolder In Login Page', () => {
  cy.get(auth.Login_Password).should('be.visible')
  cy.get(auth.Login_Password).should('have.attr','placeholder',"At least 8 characters")
  cy.get(auth.Login_Password).should('have.attr','placeholder',"At least 8 characters")
});
