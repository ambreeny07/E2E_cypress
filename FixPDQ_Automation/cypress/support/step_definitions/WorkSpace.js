const WorkSpace = require('../pages/WorkSpace.json');
const leftMenuVar = require('../pages/LeftMenu.json');

When('I click on Work Space Button',()=>{  
    cy.get(leftMenuVar.Leftmenu).contains('Workspace').should('be.visible').click()
})

Then('I verify work space page is visible',()=>{  
    cy.get(WorkSpace.workSpacePage).should('be.visible')
})

And('I verify search field is visible',()=>{      
    cy.get(WorkSpace.workSpaceSearch).should('be.visible')
})

And('I verify filter bar is visible',()=>{      
    cy.get(WorkSpace.workSpaceFilterBar).should('be.visible')
})

Then('I verify owner button in filter bar is visible',()=>{      
    cy.get(WorkSpace.workSpaceFilterOwner).should('be.visible')
})

And('I verify creator button in filter bar is visible',()=>{      
    cy.get(WorkSpace.workSpaceFilterCreator).should('be.visible')
})

Then('I verify priority buttons in filter bar is visible',()=>{      
    cy.get(WorkSpace.workSpaceFilterPriority1).should('be.visible')
    cy.get(WorkSpace.workSpaceFilterPriority2).should('be.visible')
})

And('I verify create date in filter bar is visible',()=>{      
    cy.get(WorkSpace.workSpaceFiltercreatDate).should('be.visible')
})