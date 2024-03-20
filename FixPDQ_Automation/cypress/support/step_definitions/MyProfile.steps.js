const profile = require('../pages/MyProfile.json');

Then('I Clicking On Profile Button', () => {
    cy.get(profile.ProfileButton,{timeout: 20000}).should('be.visible').click()
  });

  And('I Clicking On  MyProfile Logout Button', () => {
    cy.get(profile.MyProfileLogOutButton,{timeout: 20000}).should('be.visible').click()
  });

  Then('I Verifying MyProfile NickName SubOptions',()=>{
      cy.contains('Nickname:').should('be.visible')      
  })

  And('I Verifying MyProfile FirstName SubOptions',()=>{
    cy.contains('First Name:').should('be.visible')      
})

Then('I Verifying MyProfile LastName SubOptions',()=>{
    cy.contains('Last Name:').should('be.visible')      
})

And('I Verifying MyProfile City SubOptions',()=>{
    cy.contains('City:').should('be.visible')      
})

Then('I Verifying MyProfile Notifications SubOptions',()=>{
    cy.contains('Notifications:').should('be.visible')      
})

And('I Verifying MyProfile Email Notifications SubOptions',()=>{
    cy.contains('Email Notifications:').should('be.visible')      
})

Then('I Verifying MyProfile SMS Notifications SubOptions',()=>{
    cy.contains('SMS Notifications:').should('be.visible')      
})

