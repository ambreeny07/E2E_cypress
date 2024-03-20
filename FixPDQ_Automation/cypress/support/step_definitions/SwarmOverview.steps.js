const swarmOver = require('../pages/SwarmOverview.json')

And('I Click On Filter Button',()=>{
    cy.get(swarmOver.filtericon).should('be.visible').click();
})

And('I Click On Due Date Icon',()=>{
    cy.get(swarmOver.DueDateIcon).should('be.visible').click();
})

Then('I Verify horizontal dropdown menu appear',()=>{
    cy.get(swarmOver.HorizontalMenu).should('be.visible');
})

Then('I Verify Popup menu appear',()=>{
    cy.get(swarmOver.Popup).should('be.visible');
})

Then('I Verify horizontal dropdown menu disappear',()=>{
    cy.get(".pusher").then(($body) => {
        assert.equal($body.find(swarmOver.HorizontalMenu).length,0);
    });    
})

Then('I Verify View State is Visible',()=>{
    cy.get(swarmOver.HorizontalMenu).should('be.visible');
})

Then('I Verify View Action is Visible',()=>{
    cy.contains(swarmOver.ViewAction).parent().should('be.visible');
})

And('I Click On View Action Icon',()=>{
    cy.contains(swarmOver.ViewAction).should('be.visible').click();
})

And('Click On Select All Test',()=>{
    cy.get(swarmOver.ViewActionSelectAll).should('be.visible').click();
})

Then('I Verify all View States are clickable',()=>{
    cy.get(swarmOver.ViewStatePlayIcon).should('be.visible').click();
    cy.get(swarmOver.ViewStatePauseIcon).should('be.visible').click();
    cy.get(swarmOver.ViewStatestepbackwardIcon).should('be.visible').click();
    cy.get(swarmOver.ViewStateundoIcon).should('be.visible').click();
    cy.get(swarmOver.ViewStateDotCircleIcon).should('be.visible').click();
    cy.get(swarmOver.ViewStateStopCircleIcon).should('be.visible').click();
})

Then('I Verify Select All view Action Button',()=>{
    cy.get(swarmOver.ViewActionPopupSelectionButton).should('be.visible').invoke('text').then(($val)=>{
        cy.log($val)
        if($val =="UNSELECT ALL"){
            cy.log('All Actions Are Selected')          
        }
        else{
            cy.get(swarmOver.ViewActionPopupSelectionButton).click()
            cy.log('All Actions Are Selected')
        }
    })
})

Then('I Verify UnSelect All view Action Button',()=>{
    cy.get(swarmOver.ViewActionPopupSelectionButton).should('be.visible').invoke('text').then(($val)=>{
        cy.log($val)
        if($val =="UNSELECT ALL"){
            cy.get(swarmOver.ViewActionPopupSelectionButton).click()
            cy.log('All Actions Are UnSelected')            
        }
        else{
            cy.get(swarmOver.ViewActionPopupSelectionButton).click()
            cy.get(swarmOver.ViewActionPopupSelectionButton).click()
            cy.log('All Actions Are UnSelected')
        }
    })
})

And('Verify all View States are Visible',()=>{
    cy.get(swarmOver.ViewStatePlayIcon).should('be.visible');
    cy.get(swarmOver.ViewStatePauseIcon).should('be.visible');
    cy.get(swarmOver.ViewStatestepbackwardIcon).should('be.visible');
    cy.get(swarmOver.ViewStateundoIcon).should('be.visible');
    cy.get(swarmOver.ViewStateDotCircleIcon).should('be.visible');
    cy.get(swarmOver.ViewStateStopCircleIcon).should('be.visible');
})

And('I Verify all View Actions Icons are Visible',()=>{
    cy.contains('Accountability Contract').parent().find('svg').should('be.visible');
    cy.contains('Opinion').parent().find('svg').should('be.visible');
    cy.contains('Collaboration').parent().find('svg').should('be.visible');
    cy.contains('Housekeeping').parent().find('svg').should('be.visible');
    cy.contains('Question').parent().find('svg').should('be.visible');
})

Then('I Click On Work On Priority Icon',()=>{
    cy.contains("WORK ITEM PRIORITY").parent().get(swarmOver.WorkOnPriorityFlagIcon).should('be.visible').click()
})

And('I Verify Work On Priority Popup Shown',()=>{
    cy.get(swarmOver.WorkOnPriorityPopup).should('be.visible')
})

Then('I Verify DueDate Popup Shown',()=>{
    cy.get(swarmOver.WorkOnPriorityPopup).should('be.visible')
})

Then('I Checked On Work On Priority CheckBox',()=>{
    cy.get(swarmOver.WorkOnPriorityCheckbox).first().click({ force: true }).check({ force: true })
})

Then('I Verify Due Date CheckBox is clickable',()=>{
    cy.get(swarmOver.WorkOnPriorityCheckbox).first().click({ force: true })
})

Then('I Checked On View Action CheckBox',()=>{
    cy.get(swarmOver.WorkOnPriorityCheckbox).first().check({ force: true })
})

And('UnChecked On View Action CheckBox',()=>{
    cy.get(swarmOver.WorkOnPriorityCheckbox).first().uncheck({ force: true })
})

And('I Click On View Action CheckBox',()=>{
    cy.get(swarmOver.WorkOnPriorityCheckbox).first().click({ force: true })
})

And('I Click On SideBar Workspace Option',()=>{
    cy.contains('Workspace').should('be.visible').click()
})


