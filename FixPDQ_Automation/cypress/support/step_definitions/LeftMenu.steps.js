const leftMenuVar = require('../pages/LeftMenu.json');

Then('I Verify Home Button is visible',()=>{
    cy.get(leftMenuVar.Leftmenu).contains('Home').should('be.visible')
})

Then('I Verify Home Button is clickable',()=>{
    cy.get(leftMenuVar.Leftmenu).contains('Home').should('be.visible').click()
})

And('I Validate Home Screen', () => {
    cy.get(leftMenuVar.ProfileButton,{timeout: 20000}).should('be.visible')
  })

  Then('I Verify WorkSpace Button is visible',()=>{
    cy.get(leftMenuVar.Leftmenu).contains('Workspace').should('be.visible')
})

And('I Verify WorkSpace Button is clickable',()=>{  
    cy.get(leftMenuVar.Leftmenu).contains('Workspace').should('be.visible').click()
})

And('I Validate WorkSpace Screen', () => {   
    cy.get(leftMenuVar.FilterBox,{timeout: 20000}).should('be.visible')
  })

  Then('I Verify SwarmList Button is visible',()=>{
    cy.get(leftMenuVar.SwarmList).should('be.visible')
})

And('Clicking On SwarmList First Option',()=>{
  cy.get(leftMenuVar.SwarmListOptions).first().should('be.visible').click()
})

And('I Verifiy SwarmList Page',()=>{
  cy.get(leftMenuVar.AllSwarmButton).first().should('be.visible').invoke('text').then((buttomtext)=>{
  })
})

Then('I Verify Team Button is visible',()=>{
  cy.get(leftMenuVar.TeamButton).should('be.visible')
})

And('I Verify Team Button is Clickable',()=>{  
  cy.get(leftMenuVar.TeamButton).should('be.visible').click()
})

And('Clicking On Team First Option',()=>{
  cy.get(leftMenuVar.MyTeamOption).should('be.visible').click()
})

And('I Verify My Team Page',()=>{
  cy.get(leftMenuVar.MyTeamHeading).should('be.visible')
})

Then('I Verify PlayBook Button is visible',()=>{
  cy.get(leftMenuVar.PlayBoxButton).should('be.visible')
})

And('I Verify PlayBook Button is Clickable',()=>{
  cy.get(leftMenuVar.PlayBoxButton).should('be.visible').click()
})

And('I Verify PlayBook Page',()=>{
  cy.get(leftMenuVar.MyPlayBoxHeading).should('be.visible')
})

Then('I Verify Profile Button is visible',()=>{
  cy.get(leftMenuVar.ProfileButton).should('be.visible')
})

And('I Verify Profile Button is Clickable',()=>{
  cy.get(leftMenuVar.ProfileButton).should('be.visible').click()
})

And('I Verify Profile Page',()=>{
  cy.get(leftMenuVar.ProfilePageHeading).should('be.visible')
})




