const home = require('../pages/HomeScreen.json');
const swarmlistvar = require('../pages/SwarmList.json')
var SwarmName = "";

When('I Click On Home Screen Logo', () => {
    cy.get(home.HomeScreenLogo).should('be.visible').click();
})

Then('I Verify Home Screen Logo is Visible', () => {
    cy.get(home.HomeScreenLogo).should('be.visible');    
})

Then('I Verify Home Screen Page', () => {
    cy.get(home.HomeScreenLogo).should('be.visible');
})

And('I Click On DueDate', () => {
    cy.get(home.HomeScreenDueDate).should('be.visible').click();
})

And('I Click On Work item priority', () => {
    cy.get(home.HomeScreenWorkItemPrority).should('be.visible').click();
})

And('I Verify Work item priority PopUp Menu', () => {
    if (cy.get(home.HomeScreenWorkItemProrityPopup).should('be.visible')) {
        cy.log("Work item priority PopUp Display");
    }
    else {
        cy.log("Work item priority PopUp Not Display");
    }
})

And('I Verify Work item priority Options CheckBox Checkable', () => {
    cy.get(home.HomeScreenFilterWorkItemProrityCheckBox).first().should('not.be.disabled');
})

And('I Check First Box From Work item priority Options', () => {
    cy.get(home.HomeScreenFilterWorkItemProrityCheckBoxCheckable).first().should('be.checked')
    if (cy.get(home.HomeScreenFilterWorkItemProrityCheckBoxCheckable).first().should('be.checked')) {
        cy.log("CheckBox is checked")
    }
    else {
        cy.get(home.HomeScreenFilterWorkItemProrityCheckBoxCheckable).first().check();
    }
})

And('I Verify Due Date PopUp Menu', () => {
    if (cy.get(home.HomeScreenDueDateSelectAll).should('be.visible')) {
        cy.log("Due Date PopUp Display");
    }
    else {
        cy.log("Due Date PopUp Not Display");
    }
})

And('I Click On Due Date Select all', () => {
    cy.get(home.HomeScreenDueDateSelectAll).should('be.visible').then(function ($elem) {
        cy.log($elem.text())
    }).click();
})

And('I Click On Due Date Unselect all', () => {
    cy.get(home.HomeScreenDueDateSelectAll).should('be.visible').then(function ($elem) {
        cy.log($elem.text())
    }).click();
})

Then('I Verify Filter Clickable', () => {
    cy.get(home.HomeScreenFilter).should('be.visible').click();   
    if (cy.get(home.HomeScreenFilterBar).should('be.visible')) {
        cy.log("Filter is Clickable")
    }
    else {
        cy.log("Filter is Clickable")
    }
})

Then('I Click Filter', () => {
    cy.get(home.HomeScreenFilter).should('be.visible').click();
})

When('I Verify Who need my help is visible', () => {
    cy.contains('WHO NEEDS MY HELP').should('be.visible');
})

And('Click On Who need my help', () => {
    cy.contains('WHO NEEDS MY HELP').parent().should('be.visible').click();
})

And('Selected Status Who need my help', () => {
    if (cy.contains('WHO NEEDS MY HELP').parent().should('have.attr','class', "fix_background_black_shadow")) {
        cy.log("WHO NEEDS MY HELP is selected")
    }

})

And('I Not Selected Status Who need my help', () => {
    if (cy.contains('WHO NEEDS MY HELP').parent().should('have.attr','class', "fix_background_grey_shadow")) {
        cy.log("WHO NEEDS MY HELP is not selected")

    }
})

Then('I Verify Who need my help is Clickable', () => {
    if (cy.contains('WHO NEEDS MY HELP').parent().click()) {
        cy.log("Who need my help is Clickable")
    }
    else {
        cy.log("Who need my help is Clickable")
    }
})

When('I Verify WHO NEED TO HELP ME is visible', () => {
    cy.contains('WHO NEEDS TO HELP ME').should('be.visible');
})

And('Click On WHO NEED TO HELP ME', () => {
    cy.contains('WHO NEEDS TO HELP ME').parent().should('be.visible').click();
})

And('I Selected Status WHO NEED TO HELP ME', () => {
    if (cy.contains('WHO NEEDS TO HELP ME').parent().should('have.attr','class', "fix_background_black_shadow")) {
        cy.log("WHO NEED TO HELP ME is selected")
    }
})

And('Not Selected Status WHO NEED TO HELP ME', () => {
    if (cy.contains('WHO NEEDS TO HELP ME').parent().should('have.attr','class', "fix_background_grey_shadow")) {
        cy.log("WHO NEED TO HELP ME is not selected")
    }
})

Then('I Verify WHO NEED TO HELP ME is Clickable', () => {
    if (cy.contains('WHO NEEDS TO HELP ME').parent().click()) {
        cy.log("WHO NEED TO HELP ME is Clickable")
    }
    else {
        cy.log("WHO NEED TO HELP ME is Clickable")
    }
})

And('I Verify All Filter Actions', () => {
    cy.get(home.HomeScreenFilterActionSignature).should('not.be.disabled');
    cy.get(home.HomeScreenFilterActionKeyNote).should('not.be.disabled');
    cy.get(home.HomeScreenFilterActionVacuum).should('not.be.disabled');
    cy.get(home.HomeScreenFilterActionQuestion).should('not.be.disabled');
})

And('Verify DueDate Options CheckBox Checkable', () => {
    cy.get(home.HomeScreenFilterDueDateCheckBox).first().should('not.be.disabled');
})

And('I Check First Box From DueDate Options', () => {
    cy.get(home.HomeScreenFilterDueDateCheckBoxcheckable).first().should('be.checked')
    if (cy.get(home.HomeScreenFilterDueDateCheckBoxcheckable).first().should('be.checked')) {
        cy.log("CheckBox is checked")
    }
    else {
        cy.get(home.HomeScreenFilterDueDateCheckBoxcheckable).first().check();
    }
})

And('I Verify View Action Visible', () => {
    cy.get(home.HomeScreenViewActionBar).should('be.visible')
})

And('I Verify View Action Not Visible', () => {
    cy.wait(2000)
    cy.get('.pusher').then(($body) => {
        if ($body.find(home.HomeScreenViewActionBar).length === 0) {
            cy.log("View Action is Not visible")
        }
    });

})

Then('I Verify Description Card Is Visible', () => {
    cy.get(home.HomeScreenDescriptionCard).should('be.visible')
})

Then('I Verify Side Menu Bar Is Visible', () => {
    cy.get(home.HomeScreenSideBar).first().should('be.visible')
})

Then('I Click On SwarmOverView Button', () => {
    cy.contains("SWARM OVERVIEW").should('be.visible').click();
})

And('I Verify Me As Owner is Visible', () => {
    cy.contains("ME AS OWNER").should('be.visible');
    cy.log("Me As Owner is Visible")
})

And('I Verify Me As Owner Icon is Visible', () => {
    cy.get(home.MeAsOwnerIcon).should('be.visible');
    cy.log("Me As Owner Icon is Visible")
})

And('I Verify Me As Owner Count is Visible', () => {
    cy.contains("ME AS OWNER").parent().get("div>span").should('be.visible');
    cy.log("Me As Owner Count is Visible")
})

And('I Verify Me As Creator is Visible', () => {
    cy.contains("ME AS CREATOR").should('be.visible');
    cy.log("ME AS CREATOR is Visible")
})

And('I Verify ME AS CREATOR Icon is Visible', () => {
    cy.get(home.MeAsCreatorIcon).should('be.visible');
    cy.log("ME AS CREATOR Icon is Visible")
})

And('I Verify ME AS CREATOR Count is Visible', () => {
    cy.contains("ME AS CREATOR").parent().get("div>span").should('be.visible');
    cy.log("ME AS CREATOR Count is Visible")
})

And('I Verify Me As Creator is Clickable', () => {
    cy.contains("ME AS CREATOR").parent().should('be.visible').click()
    cy.contains("ME AS CREATOR").parent().should('have.attr','class',"fix_background_black_shadow");
    cy.log("ME AS CREATOR is Clicked So ME AS CREATOR is clickable")
})

And('I Verify Me As Owner is Clickable', () => {
    cy.contains("ME AS OWNER").parent().should('be.visible').click()
    cy.contains("ME AS OWNER").parent().should('have.attr','class',"fix_background_black_shadow");
    cy.log("Me As Owner is Clicked So Me As Owner is clickable")
})

And('I Verify Everything is Visible', () => {
    cy.contains("EVERYTHING").should('be.visible');
    cy.log("EVERYTHING is Visible")
})

And('Verify Everything Icon is Visible', () => {
    cy.get(home.EverythingFolderIcon).should('be.visible');
    cy.log("EVERYTHING Folder Icon is Visible")
})

And('Verify Everything Count is Visible', () => {
    cy.contains("EVERYTHING").parent().get("div>span").should('be.visible');
    cy.log("EVERYTHING Count is Visible")
})

And('I Verify Everything is Clickable', () => {
    cy.contains("EVERYTHING").parent().should('be.visible').click()
    cy.contains("EVERYTHING").parent().should('have.attr','class',"fix_background_black_shadow");
    cy.log("EVERYTHING is Clicked So EVERYTHING is clickable")
})

And('I Verify Swarm Selector Is Visible', () => {
    cy.get(home.HomePageSwarmSelector).should('be.visible');
    cy.log("Swarm Selector is Visible On Home Screen ")
})

And('I Click On Swarm Selector', () => {
    cy.get(home.HomePageSwarmSelector).should('be.visible').click();
    cy.log("Swarm Selector is Clicked ")
    
})

And('I Search Box of Swarm Selector Is Visible', () => {
    cy.get(home.HomePageSwarmSelectorSearchBox).should('be.visible');
    cy.log("I Search Box of Swarm Selector Is Visible ")
})

And('I Verify Swarm Selector ListBox hover Is Visible', () => {
    cy.get(home.HomePageSwarmSelector).parent().get(home.HomePageSwarmSelectorListBoxHover).should('be.visible');
    cy.log("Swarm Selector ListBox Hover is Visible ")
})

And('I Verify Swarm Selector ListBox Options are Clickable', () => {
    cy.get(home.HomePageSwarmSelectorListBoxHoverOptions).first().should('be.visible').click();
    cy.log("Verified: Swarm Selector ListBox Names/Options are Clickable ")
})

And('I Verify Page after Clicking On Swarm Selector ListBox Options', () => {
    cy.get(home.HomePageSwarmSelectorListBoxHoverOptions).first().should('be.visible').invoke('text').then(($val)=>{
        cy.log($val);
        cy.get(home.HomePageSwarmSelectorListBoxHoverOptions).first().click();
        cy.get(".fix_body1_10").should('be.visible').invoke('text').then(value=>{
            cy.log(value)
            assert.equal($val,value,"Page successfully verified")
        })        
    })    
})

And('Verify SwarmOverView Button is clickable', () => {
    cy.contains("SWARM OVERVIEW").should('be.visible').parent().click({ force: true }).should('have.attr','class',"fix_menu_12 fix_background_yellow_shadow fix_hover_white");
    cy.log("SwarmOverView Button is clickable")
})

And('I Verify WHO NEED TO HELP ME People Count is visible',()=>{
    cy.contains("WHO NEEDS TO HELP ME").parent().get(home.Who_need_to_help_me_Count).should('be.visible');
    cy.log('WHO NEED TO HELP ME Count is visible')

})

And('I Verify WHO NEEDS MY HELP People Count is visible',()=>{
    cy.contains("WHO NEEDS MY HELP").parent().find(home.Who_needs_my_help_Count).should('be.visible');
    cy.log('WHO NEEDS MY HELP Count is visible')
})

And('I Verify Number of WHO NEEDS MY HELP Cards',()=>{
    cy.contains("WHO NEEDS MY HELP").parent().find(home.Who_needs_my_help_Count).should('be.visible').invoke('text').then(($val)=>{
        cy.log($val)
    });
    cy.log('WHO NEEDS MY HELP Count is visible')
})

And('I Verify Swarm Search Area is Clickable',()=>{
    cy.get(home.HomePageSwarmSelectorSearchBox).should('be.visible').click();
    cy.log('Verified: Swarm Search Area is Clickable')
})

When('I Verify swarm is visible dropdown',()=>{
    cy.get(swarmlistvar.scrollMyFirstSwarm).contains('Loading').scrollIntoView().should('not.exist')
    cy.log('Verified: Swarm Search Area is Clickable')
})

And('I Get SwarmName',()=>{
    cy.get(home.HomePageSwarmSelector).find('.divider').first().should('be.visible').invoke('text').then(($swarmName)=>{
        cy.log($swarmName)
        SwarmName = $swarmName;
    });
    cy.log('Swarm Name is '+SwarmName)
})

And('I Verify SwarmName From The Coach Card',()=>{
    cy.get(home.HomeScreenDescriptionCard).find('.fix_body1_10').should('be.visible')
})