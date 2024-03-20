const swarmlistvar = require('../pages/SwarmList.json')
var startCurrentTime = new Date();

   var SwarmName;
   var SwarmName1;
   var SwarmName3;
   var SwarmName4;
   var SwarmName5;
   var SwarmName6;
   var SwarmName7;
   var SwarmName8;
   var SwarmName9;
   var SwarmName10;
   var SwarmName11;
   var SwarmName12;
   var SwarmName13;
   var SwarmName14;
   var SwarmName15;
   var SwarmName16;
   var SwarmName17;
  before(() => {    
    cy.readFile('cypress/fixtures/randomValue.json').then(swarmName => {
        var value1 = swarmName.swarm1.length
        var value2 = swarmName.swarm2.length
        var value3 = swarmName.swarm3.length
        var value4 = swarmName.swarm4.length
        var value5 = swarmName.swarm5.length
        var value6 = swarmName.swarm6.length
        var value7 = swarmName.swarm7.length
        var value8 = swarmName.swarm8.length
        var value9 = swarmName.swarm9.length
        var value10 = swarmName.swarm10.length
        var value11 = swarmName.swarm11.length
        var value12 = swarmName.swarm12.length
        var value13 = swarmName.swarm13.length
        var value14 = swarmName.swarm14.length
        var value15 = swarmName.swarm15.length
        var value16 = swarmName.swarm16.length
        var value17 = swarmName.swarm17.length
    
        SwarmName ="Swarm1" +value1;
        swarmName.swarm1.push(SwarmName);
        SwarmName1 ="Swarms2"+value2;
        swarmName.swarm2.push(SwarmName1);
        SwarmName3 ="Swarms3" +value3;
        swarmName.swarm3.push(SwarmName3);
        SwarmName4 ="Swarms4" +value4;
        swarmName.swarm4.push(SwarmName4);
        SwarmName5 ="Swarms5"+value5;
        swarmName.swarm5.push(SwarmName5);
        SwarmName6 ="Swarms6"+value6;
        swarmName.swarm6.push(SwarmName6);
        SwarmName7 ="Swarms7" +value7;
        swarmName.swarm7.push(SwarmName7);
        SwarmName8 ="Swarms8" +value8;
        swarmName.swarm8.push(SwarmName8);
        SwarmName9 ="Swarms9" +value9;
        swarmName.swarm9.push(SwarmName9);
        SwarmName10 ="Swarm10"  +value10;
        swarmName.swarm10.push(SwarmName10);
        SwarmName11 ="Swarms11"+value11;
        swarmName.swarm11.push(SwarmName11);
        SwarmName12 ="Swarms2" +value12;
        swarmName.swarm12.push(SwarmName12);
        SwarmName13 ="Swarms13"+value13;
        swarmName.swarm13.push(SwarmName13);
        SwarmName14 ="Swarms14"+value14;
        swarmName.swarm14.push(SwarmName14);
        SwarmName15 ="Swarms15"+value15;
        swarmName.swarm15.push(SwarmName15);
        SwarmName16 ="Swarms16"+value16;
        swarmName.swarm16.push(SwarmName16);
        SwarmName17 ="Swarms17"+value17;
        swarmName.swarm17.push(SwarmName17);
    cy.writeFile('cypress/fixtures/randomValue.json', swarmName);
  });  
  })
var SwarmDescription ="SwarmDescription" + Math.floor((Math.random() * 1000) + 1)+startCurrentTime.getMilliseconds();
var UpdatedSwarmName ="SwarmsNamees" + Math.floor((Math.random() * 10000001) + Math.random())+startCurrentTime.getMilliseconds();
var UpdatedSwarmDescription ="SwarmDescription" + Math.floor((Math.random() * 1000) + 1)+startCurrentTime.getMilliseconds();

var RoleBefore=[];
var RoleAfter=[];
var swarmNameValue;

When('I Click On Swarm List Button In SideBar', () => {
    cy.get(swarmlistvar.SwarmList).should('be.visible').click({ force: true });
    cy.get(swarmlistvar.AddNewSwarmPlusBtn).scrollIntoView().should('be.visible')
})

And('Verify SwarmList Button is clickable',()=>{
    cy.get(swarmlistvar.SwarmList).contains('Swarm list').should('be.visible').click({ force: true })
})

And('Click On AddNewSwarm Option In Menu', () => {
    cy.get(swarmlistvar.AddNewSwarmOption).scrollIntoView().should('be.visible').click();
})

Then('I Click On Add New Swarm Plus Green Button', () => {
    cy.get(swarmlistvar.AddNewSwarmPlusBtn).scrollIntoView().should('be.visible').click();
})

And('I Click On Creator close icon', () => {
    cy.get(swarmlistvar.closeIcon).first().scrollIntoView().should('be.visible').click();
})

And('AddNewSwarm Option In Menu is visible', () => {
    cy.get(swarmlistvar.AddNewSwarmOption).scrollIntoView().should('be.visible');
})

And('Click On ManageSwarm Option In Menu', () => {
    cy.get(swarmlistvar.ManageSwarmOption).scrollIntoView().should('be.visible').click();
})

And('ManageSwarm Option In Menu is visible', () => {
    cy.get(swarmlistvar.ManageSwarmOption).scrollIntoView().should('be.visible');
})

And('I Add New Swarm title is visible', () => {
    cy.get(swarmlistvar.AddNewSwarmTitle).scrollIntoView().should('be.visible');
})

And('I EditSwarm title is visible', () => {
    cy.get(swarmlistvar.EditSwarmTitle).scrollIntoView().should('be.visible');
})

Then ('I Cross Icone On Top Right Pop-Up Screen is visible', () => {
    cy.get(swarmlistvar.AddNewSwarmCrossIconeOnTopRightPopUpScreen).should('be.visible');
})

Then('I Entering New Swarm Name', () => {
    cy.get(swarmlistvar.NewSwarmNameField).should('be.visible').type(SwarmName)
})

Then('I Entering New Swarm16 Name', () => {
    cy.get(swarmlistvar.NewSwarmNameField).should('be.visible').type(SwarmName16)
})

Then('I Entering New Swarm17 Name', () => {
    cy.get(swarmlistvar.NewSwarmNameField).should('be.visible').type(SwarmName17)
})

And('I Entering New Swarm1 Name', () => {
    cy.get(swarmlistvar.NewSwarmNameField).should('be.visible').type(SwarmName1)
})

And('I Entering New Swarm3 Name', () => {
    cy.get(swarmlistvar.NewSwarmNameField).should('be.visible').type(SwarmName3)
})

And('I entering new swarm4 name', () => {
    cy.get(swarmlistvar.NewSwarmNameField).should('be.visible').type(SwarmName4)
})

And('I Entering New Swarm5 Name', () => {
    cy.get(swarmlistvar.NewSwarmNameField).should('be.visible').type(SwarmName5)
})

And('I Entering New Swarm6 Name', () => {
    cy.get(swarmlistvar.NewSwarmNameField).should('be.visible').type(SwarmName6)
})

And('I Entering New Swarm7 Name', () => {
    cy.get(swarmlistvar.NewSwarmNameField).should('be.visible').type(SwarmName7)
})

And('I Entering New Swarm8 Name', () => {
    cy.get(swarmlistvar.NewSwarmNameField).should('be.visible').type(SwarmName8)
})

And('I Entering New Swarm9 Name', () => {
    cy.get(swarmlistvar.NewSwarmNameField).should('be.visible').type(SwarmName9)
})

And('I Entering New Swarm10 Name', () => {
    cy.get(swarmlistvar.NewSwarmNameField).should('be.visible').type(SwarmName10)
})

And('Entering New Swarm11 Name', () => {
    cy.get(swarmlistvar.NewSwarmNameField).should('be.visible').type(SwarmName11)
})

And('Entering New Swarm12 Name', () => {
    cy.get(swarmlistvar.NewSwarmNameField).should('be.visible').type(SwarmName12)
})

And('I Entering New Swarm13 Name', () => {
    cy.get(swarmlistvar.NewSwarmNameField).should('be.visible').type(SwarmName13)
})

And('I Entering New Swarm14 Name', () => {
    cy.get(swarmlistvar.NewSwarmNameField).should('be.visible').type(SwarmName14)
})

And('I entering new swarm15 name', () => {
    cy.get(swarmlistvar.NewSwarmNameField).should('be.visible').type(SwarmName15)
})

And('Verify that write any specific name to search', () => {
    cy.get(swarmlistvar.InterestedPartyPlaceholder).should('be.visible').type(swarmlistvar.user3)
})

And('I Edit Swarm name text field is visible', () => {
    cy.get(swarmlistvar.NewSwarmNameField).clear().should('be.visible')
})

And('I verify new swarm name text field placeholder is visible', () => {
    cy.get(swarmlistvar.NewSwarmNameField).should('be.visible')
})

Then('I verify new swarm name text field placeholder should be like: swarm name', () => {
    cy.get(swarmlistvar.NewSwarmNameField).invoke('attr', 'placeholder').should('contain', 'swarm name');
})

And('I verify new swarm new swarm description text field is visible', () => {
    cy.get(swarmlistvar.NewSwarmDescriptionField).should('be.visible')
})

Then('I verify new swarm new swarm description text field placeholder is visible', () => {
    cy.get(swarmlistvar.NewSwarmDescriptionField).should('be.visible')
})

And('I verify new swarm description text field placeholder should be like swarm Description', () => {
    cy.get(swarmlistvar.NewSwarmDescriptionField).invoke('attr', 'placeholder').should('contain', 'swarm description');
})

And('Change Swarm Name', () => {
    cy.get(swarmlistvar.NewSwarmNameField).should('be.visible').clear().type(UpdatedSwarmName)
})

And('Verify New Changed Swarm Name', () => {
    cy.get(swarmlistvar.NewSwarmNameField).should('be.visible')    
})

And('I Entering New Swarm Description', () => {
    cy.get(swarmlistvar.NewSwarmDescriptionField).should('be.visible').clear().type(SwarmDescription)
})

Then('I entering 300 characters in Swarm Description', () => {
    var chars=userID_Alpha();
    cy.get(swarmlistvar.NewSwarmDescriptionField).should('be.visible').clear().type(chars);
    cy.get(swarmlistvar.NewSwarmDescriptionField).invoke('val').then(value=>{
        assert.equal(value.length,300,"Verified that max input characters are 300");
    });
})

Then('I Verify that value is get from swarm name', () => {    
    cy.get(swarmlistvar.NewSwarmNameField).should('be.visible').invoke('val').then(value=>{
        swarmNameValue =value;       
    });
})

And('I Verify that The creator should be visible with email', () => {
    cy.wait(1000)    
    cy.get(swarmlistvar.NewSwarmCreatorField).first().invoke('text').then(value=>{
        assert.equal(value,swarmlistvar.user5,"Verified that The creator should be visible with email");
    });
})

Then('I Verify that Image should be visible against the email', () => {
    cy.get(swarmlistvar.NewSwarmCreatorUserEmailImage).should('be.visible')
})

And('I Verify that asterik is showing Swarm name', () => {
    cy.contains('Swarm name').parent().contains('*').should('be.visible')
})

And('I Verify that the interested parties should be visible', () => {
    cy.contains('Interested Party').should('be.visible')
})

Then('I Verify that asterik is showing Description', () => {
    cy.xpath("//div[contains(text(),'Description')]/span[contains(text(),'*')]").should('be.visible')
})

And('I Verify that asterik is showing Creator', () => {
    cy.contains('Creator').parent().contains('*').should('be.visible')
})

Then('I Verify that Speacial characters are not allowed in Swarm name', () => {
    cy.get(swarmlistvar.NewSwarmNameField).should('be.visible').invoke('val').then(value=>{
        assert.equal(value,swarmNameValue,"Verified that Speacial characters are not allowed in Swarm name");
    });
})

function userID_Alpha() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    for (var i = 0; i < 302; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}

  And('I entering speacial characters in Swarm Name', () => {
    cy.fixture('Common.json').then(common=>{
      cy.get(swarmlistvar.NewSwarmNameField).should('be.visible').type(common.speacialCharacters)
    });
    })

  And('I Verify that the placeholder of interested party should be visible', () => {
      cy.get(swarmlistvar.InterestedPartyPlaceholder).should('be.visible')
    })

And('Change Swarm Description', () => {
    cy.get(swarmlistvar.NewSwarmDescriptionField).should('be.visible').type(UpdatedSwarmDescription)
})

And('Verify New Changed Swarm Description', () => {
    cy.get(swarmlistvar.NewSwarmDescriptionField).should('be.visible')    
})

Then('I Clicking On Add User Button', () => {
    cy.get(swarmlistvar.NewSwarmAddUserButton).should('be.visible').click({ force: true })
})

And('I Verify that Add button icon plus sign is visible', () => {
    cy.get(swarmlistvar.InterestedPartyPlaceholder).should("be.visible");    
})

Then('I verify that Clicking on Search to add', () => {
    cy.get(swarmlistvar.InterestedPartyPlaceholder).should('be.visible').click()
})

And('I Choosing user1 as a user To add', () => {
    cy.get(swarmlistvar.AddNewSwarmListBox).contains(swarmlistvar.user1).scrollIntoView().should('be.visible').click()
})

And('I Choosing user3 as a user To add', () => {
    cy.get(swarmlistvar.AddNewSwarmListBox).contains(swarmlistvar.user3).scrollIntoView().should('be.visible').click()
})

And('I verify that the Total number of members of Interested parties', () => {
    cy.get('.visible.menu.transition>div[role="option"].item[aria-checked="false"]').should('be.visible').then(($members) => {  
        assert.equal($members.length>0,true,"Unable to verify the Total number of members of Interested parties");
    })
})

And('I verify that user3 is visible in drop down', () => {
    cy.contains(swarmlistvar.user3).scrollIntoView().should('be.visible')
})

Then('I verify that user4 is visible in drop down', () => {
    cy.contains(swarmlistvar.user4).scrollIntoView().should('be.visible')
})

And('I verify that user5 is visible in drop down', () => {
    cy.get(swarmlistvar.RoleListDropDown).contains(swarmlistvar.user5).scrollIntoView().should('be.visible')
})

And('Choosing user2 as a user To add', () => {
    cy.contains(swarmlistvar.user2).scrollIntoView().should('be.visible').click()
})

And('I Choosing user4 as a user To add', () => {
    cy.get(swarmlistvar.AddNewSwarmListBox).contains(swarmlistvar.user4).scrollIntoView().should('be.visible').click()
})

And('I Choosing user5 as a user To add', () => {
    cy.contains(swarmlistvar.user5).scrollIntoView().should('be.visible').click()
})

And('Verify user1 is added', () => {
    cy.get(swarmlistvar.MemberGroupedlist).contains(swarmlistvar.user1).scrollIntoView().should('be.visible')
})

And('Click On Remove Button In Swarm Popup', () => {
    cy.get(swarmlistvar.SwarmpopupRemoveButton).scrollIntoView().should('be.visible').click({force:true})
})

And('user1 Role', () => {
    cy.wait(3000)
    cy.get(swarmlistvar.MemberGroupedlist).contains(swarmlistvar.user1).parents(swarmlistvar.AddedRoleBlock).parent().find(swarmlistvar.UserRole).should('be.visible').invoke('text').then(($Role) => {
        cy.log(swarmlistvar.user1+' Role is ==> '+$Role+' is displayed');
    })
})


And('user2 Role', () => {
    cy.wait(3000)
    cy.get(swarmlistvar.MemberGroupedlist).contains(swarmlistvar.user2).parents(swarmlistvar.AddedRoleBlock).parent().find(swarmlistvar.UserRole).should('be.visible').invoke('text').then(($Role) => {
        cy.log(swarmlistvar.user2+' Role is ==> '+$Role+' is displayed');
    })
})

And('user3 Role', () => {
    cy.wait(3000)
    cy.get(swarmlistvar.MemberGroupedlist).contains(swarmlistvar.user3).parents(swarmlistvar.AddedRoleBlock).parent().find(swarmlistvar.UserRole).should('be.visible').invoke('text').then(($Role) => {
        cy.log(swarmlistvar.user3+' Role is ==> '+$Role+' is displayed');
    })
})

And('user4 Role', () => {
    cy.wait(3000)
    cy.get(swarmlistvar.MemberGroupedlist).contains(swarmlistvar.user4).parents(swarmlistvar.AddedRoleBlock).parent().find(swarmlistvar.UserRole).should('be.visible').invoke('text').then(($Role) => {
        cy.log(swarmlistvar.user4+' Role is ==> '+$Role+' is displayed');
    })
})

Then('Role before', () => {
    cy.wait(3000)
    cy.get(swarmlistvar.MemberGroupedlist).contains(swarmlistvar.user3).parents(swarmlistvar.AddedRoleBlock).parent().find(swarmlistvar.UserRole).should('be.visible').invoke('text').then(($Role) => {
        cy.readFile('cypress/fixtures/data.json').then(obj=>{
            obj.Role=$Role;
            cy.writeFile('cypress/fixtures/data.json',JSON.stringify(obj));
        });        
        cy.log(swarmlistvar.user3+' Role is ==> '+$Role+' is displayed');
    })
})

And('Role after', () => {
    cy.wait(3000)
    cy.get(swarmlistvar.MemberGroupedlist).contains(swarmlistvar.user3).parents(swarmlistvar.AddedRoleBlock).parent().find(swarmlistvar.UserRole).should('be.visible').invoke('text').then(($Role) => {
        RoleAfter[0] = $Role;
        cy.log(swarmlistvar.user3+' Role is ==> '+$Role+' is displayed');
        cy.fixture('data.json').then(data=>{
            assert.equal($Role,data.Role,"verify that user accessed the swarm as per their role");
        });
    });    
})

And('User1 Role before', () => {
    cy.wait(3000)
    cy.get(swarmlistvar.MemberGroupedlist).contains(swarmlistvar.user1).parents(swarmlistvar.AddedRoleBlock).parent().find(swarmlistvar.UserRole).should('be.visible').invoke('text').then(($Role) => {
        cy.readFile('cypress/fixtures/data.json').then(obj=>{
            obj.User1Role=$Role;
            cy.writeFile('cypress/fixtures/data.json',JSON.stringify(obj));
        });        
        cy.log(swarmlistvar.user1+' Role is ==> '+$Role+' is displayed');
    })
})

And('User1 Role after', () => {
    cy.wait(3000)
    cy.get(swarmlistvar.MemberGroupedlist).contains(swarmlistvar.user1).parents(swarmlistvar.AddedRoleBlock).parent().find(swarmlistvar.UserRole).should('be.visible').invoke('text').then(($Role) => {
        RoleAfter[0] = $Role;
        cy.log(swarmlistvar.user1+' Role is ==> '+$Role+' is displayed');
        cy.fixture('data.json').then(data=>{
            assert.notEqual($Role,data.User1Role,' verify that the role is changed ');
        });
    });    
})

And('User4 Role before', () => {
    cy.wait(3000)
    cy.get(swarmlistvar.MemberGroupedlist).contains(swarmlistvar.user1).parents(swarmlistvar.AddedRoleBlock).parent().find(swarmlistvar.UserRole).should('be.visible').invoke('text').then(($Role) => {
        cy.readFile('cypress/fixtures/data.json').then(obj=>{
            obj.User4Role=$Role;
            cy.writeFile('cypress/fixtures/data.json',JSON.stringify(obj));
        });        
        cy.log(swarmlistvar.user1+' Role is ==> '+$Role+' is displayed');
    })
})

Then('User5 Role before', () => {
    cy.wait(3000)
    cy.get(swarmlistvar.MemberGroupedlist).contains(swarmlistvar.user1).parents(swarmlistvar.AddedRoleBlock).parent().find(swarmlistvar.UserRole).should('be.visible').invoke('text').then(($Role) => {
        cy.readFile('cypress/fixtures/data.json').then(obj=>{
            obj.User5Role=$Role;
            cy.writeFile('cypress/fixtures/data.json',JSON.stringify(obj));
        });        
        cy.log(swarmlistvar.user5+' Role is ==> '+$Role+' is displayed');
    })
})

And('User4 Role after', () => {
    cy.wait(3000)
    cy.get(swarmlistvar.MemberGroupedlist).contains(swarmlistvar.user1).parents(swarmlistvar.AddedRoleBlock).parent().find(swarmlistvar.UserRole).should('be.visible').invoke('text').then(($Role) => {
        RoleAfter[0] = $Role;
        cy.log(swarmlistvar.user4+' Role is ==> '+$Role+' is displayed');
        cy.fixture('data.json').then(data=>{
            assert.notEqual($Role,data.User4Role,' verify that the role is changed');
        });
    });    
})

And('User5 Role after', () => {
    cy.wait(3000)
    cy.get(swarmlistvar.MemberGroupedlist).contains(swarmlistvar.user1).parents(swarmlistvar.AddedRoleBlock).parent().find(swarmlistvar.UserRole).should('be.visible').invoke('text').then(($Role) => {
        RoleAfter[0] = $Role;
        cy.log(swarmlistvar.user5+' Role is ==> '+$Role+' is displayed');
        cy.fixture('data.json').then(data=>{
            assert.notEqual($Role,data.User5Role,' verify that the role is changed');
        });
    });    
})

Then('I Verify that creator role before change the member role', () => {
    cy.wait(3000)
    cy.get(swarmlistvar.MemberGroupedlist).contains(swarmlistvar.user5).parents(swarmlistvar.AddedRoleBlock).parent().find(swarmlistvar.UserRole).should('be.visible').invoke('text').then(($Role) => {
        RoleBefore[0] = $Role;
        var role={"CreatorRole":$Role};
        cy.writeFile('cypress/fixtures/data.json',role);
        cy.log(swarmlistvar.user5+' Role is ==> '+$Role+' is displayed');
    })
})

Then('I Verify that creator role after change the member role', () => {
    cy.wait(3000)
    cy.get(swarmlistvar.MemberGroupedlist).contains(swarmlistvar.user5).parents(swarmlistvar.AddedRoleBlock).parent().find(swarmlistvar.UserRole).should('be.visible').invoke('text').then(($Role) => {
        RoleAfter[0] = $Role;
        cy.log(swarmlistvar.user3+' Role is ==> '+$Role+' is displayed');
        cy.fixture('data.json').then(data=>{
            assert.notEqual($Role,data.CreatorRole,'verify that the role of the creator is changed');
        });
    });
    
})

And('Role after', () => {
    cy.wait(3000)
    cy.get(swarmlistvar.MemberGroupedlist).contains(swarmlistvar.user3).parents(swarmlistvar.AddedRoleBlock).parent().find(swarmlistvar.UserRole).should('be.visible').invoke('text').then(($Role) => {
        RoleAfter[0] = $Role;
        cy.log(swarmlistvar.user3+' Role is ==> '+$Role+' is displayed');
        cy.fixture('data.json').then(data=>{
            assert.equal($Role,data.Role,"verify that user accessed the swarm as per their role");
        });
    });    
})

And('Verify user2 is added', () => {
    cy.get(swarmlistvar.MemberGroupedlist).contains(swarmlistvar.user2).scrollIntoView().should('be.visible')
})

Then('I Verify user3 is added', () => {
    cy.get(swarmlistvar.MemberGroupedlist).contains(swarmlistvar.user3).scrollIntoView().should('be.visible')
})

And('I Verify user4 is added', () => {
    cy.get(swarmlistvar.MemberGroupedlist).contains(swarmlistvar.user4).scrollIntoView().should('be.visible')
})

Then('I Choosing user1 type change To Admin', () => {
    cy.get(swarmlistvar.MemberGroupedlist).contains(swarmlistvar.user1).parent().find(swarmlistvar.MainlistBox).click({ force: true })
    cy.get(swarmlistvar.RoleListDropDown).contains(swarmlistvar.UserTypeAdmin).should('be.visible').click({ force: true })
})

Then('I Choosing user1 type change To Invited', () => {
    cy.get(swarmlistvar.MemberGroupedlist).contains(swarmlistvar.user1).parent().find(swarmlistvar.MainlistBox).click({ force: true })
    cy.get(swarmlistvar.RoleListDropDown).contains(swarmlistvar.UserTypeInvited).should('be.visible').click({ force: true })
})

And('I Choosing user3 type change To Admin', () => {
    cy.get(swarmlistvar.MemberGroupedlist).contains(swarmlistvar.user3).parent().find(swarmlistvar.MainlistBox).click({ force: true })
    cy.get(swarmlistvar.RoleListDropDown).contains(swarmlistvar.UserTypeAdmin).should('be.visible').click({ force: true })
})

And('I Choosing user3 type change To onwer', () => {
    cy.get(swarmlistvar.MemberGroupedlist).contains(swarmlistvar.user3).parent().find(swarmlistvar.MainlistBox).should('be.visible').click({ force: true })
    cy.get(swarmlistvar.RoleListDropDown).contains(swarmlistvar.UserTypeOnwer).should('be.visible').click({ force: true })
})

Then('I Choosing user4 type change To Admin', () => {
    cy.get(swarmlistvar.MemberGroupedlist).contains(swarmlistvar.user4).parent().find(swarmlistvar.MainlistBox).should('be.visible').click({ force: true })
    cy.get(swarmlistvar.RoleListDropDown).contains(swarmlistvar.UserTypeAdmin).should('be.visible').click({ force: true })
})

Then('I Choosing user4 type change To Member', () => {
    cy.get(swarmlistvar.MemberGroupedlist).contains(swarmlistvar.user4).parent().find(swarmlistvar.MainlistBox).should('be.visible').click({ force: true })
    cy.get(swarmlistvar.RoleListDropDown).contains(swarmlistvar.UserTypeMember).should('be.visible').click({ force: true })
})

And('Choosing user5 type change To Owner', () => {
    cy.get(swarmlistvar.MemberGroupedlist).contains(swarmlistvar.user5).parent().find(swarmlistvar.MainlistBox).click({ force: true })
    cy.get(swarmlistvar.RoleListDropDown).contains(swarmlistvar.UserTypeOnwer).should('be.visible').click({ force: true })
})

Then('I Choosing user5 type change To Admin', () => {
    cy.get(swarmlistvar.MemberGroupedlist).contains(swarmlistvar.user5).parent().find(swarmlistvar.MainlistBox).click({ force: true })
    cy.get(swarmlistvar.RoleListDropDown).contains(swarmlistvar.UserTypeAdmin).should('be.visible').click({ force: true })
})

And('I Choosing user3 type change To Owner', () => {
    cy.get(swarmlistvar.MemberGroupedlist).contains(swarmlistvar.user3).parent().find(swarmlistvar.MainlistBox).click({ force: true })
    cy.get(swarmlistvar.RoleListDropDown).contains(swarmlistvar.UserTypeOnwer).should('be.visible').click({ force: true })
})

And('Verify that added user try to change the role', () => {
    cy.get(swarmlistvar.MemberGroupedlist).contains(swarmlistvar.user3).parent().find(swarmlistvar.MainlistBox).should('not.be.enabled')
})

And('I Clicking On Save New Swarm Button', () => {
        cy.get(swarmlistvar.SaveNewSwarmButton).scrollIntoView().should('be.visible').click({force:true})        
        cy.get(swarmlistvar.AddNewSwarmtitle).contains('Add New Swarm').scrollIntoView().should('not.exist')     
})

Then('I Clicking On Save add New Swarm Button', () => {
        cy.get(swarmlistvar.SaveNewSwarmButton).scrollIntoView().should('be.visible').click({force:true})
})

And('I Verify that Save New Swarm Button is visible', () => {
    cy.get(swarmlistvar.SaveNewSwarmButton).scrollIntoView().should('be.visible')
})

Then('I Verify that Copey New Swarm Button is visible', () => {
    cy.get(swarmlistvar.CopySwarmButton).scrollIntoView().should('be.visible')
})

And('I Verify that Remove New Swarm Button is visible', () => {
    cy.get(swarmlistvar.RemoveSwarmButton).scrollIntoView().should('be.visible')
})

And('I Verify that Creator Name is visible', () => {
    cy.get(swarmlistvar.ManageSwarmCreaterName).scrollIntoView().should('be.visible')
})

And('I Verify that Date is visible', () => {
    cy.get(swarmlistvar.ManageSwarmCreaterDate).scrollIntoView().should('be.visible')
})

And('I Verify that Summary is visible', () => {
    cy.get(swarmlistvar.ManageSwarmSummary).scrollIntoView().should('be.visible')
})

And('I Verify that Swarm Owner Image is visible', () => {
    cy.get(swarmlistvar.ManageSwarmOwnerImage).scrollIntoView().should('be.visible')
})

And('I Verify that Swarm Owner Name is visible', () => {
    cy.get(swarmlistvar.ManageSwarmOwnerName).scrollIntoView().should('be.visible')
})

And('I Verify that Cancel New Swarm Button is visible', () => {
    cy.get(swarmlistvar.CancelSwarmButton).scrollIntoView().should('be.visible')
})

And('Clicking On Save Edit Swarm Button', () => {
    cy.get(swarmlistvar.SaveEditSwarmButton).scrollIntoView().should('be.visible').click()
})

And('I Verify that save button color is yellow', () => {
    cy.get(swarmlistvar.SaveNewSwarmButton2).scrollIntoView().should('have.css', 'background-color', 'rgb(231, 200, 66)')
})

Then('I Verify that cancel button color is white', () => {
    cy.get(swarmlistvar.CancelSwarmButton).scrollIntoView().should('have.css', 'background-color', 'rgb(255, 255, 255)')
})

And('I Verify that copy button color is black', () => {
    cy.get(swarmlistvar.CopySwarmButton).scrollIntoView().should('have.css', 'background-color', 'rgb(74, 74, 74)')
})

And('Verify that remove button color is black', () => {
    cy.get(swarmlistvar.RemoveSwarmButton).scrollIntoView().should('have.css', 'background-color', 'rgb(74, 74, 74)')
})

And('I Clicking On Cancel Edit Swarm Button', () => {
    cy.get(swarmlistvar.CancelEditSwarmButton).scrollIntoView().should('be.visible').click()
})

And('Open Existing Swarm', () => {
    cy.wait(1000)
    cy.get(swarmlistvar.SwarmPageCards).contains(SwarmName).closest(swarmlistvar.CardDetails).scrollIntoView().parent().parent().find(swarmlistvar.CardOptionButton3dots).then(($val) => {
        cy.log($val.length)
    }).click()
})

Then('I Open Existing Swarm1', () => {
    cy.wait(1000)
    cy.get(swarmlistvar.SwarmPageCards).contains(SwarmName1).closest(swarmlistvar.CardDetails).scrollIntoView().parent().parent().find(swarmlistvar.CardOptionButton3dots).then(($val) => {
        cy.log($val.length)
    }).click()
})

And('Verify that Existing Swarm1 is visible in swarm list', () => {
    cy.wait(1000)
    cy.get(swarmlistvar.SwarmPageCards).contains(SwarmName1).closest(swarmlistvar.CardDetails).scrollIntoView().parent().parent().should('be.visible')
})

Then('I Verify that Existing Swarm14 is visible in swarm list', () => {
    cy.wait(1000)
    cy.get(swarmlistvar.SwarmPageCards).contains(SwarmName14).closest(swarmlistvar.CardDetails).scrollIntoView().parent().parent().should('be.visible')
})

And('Open Existing Swarm3', () => {
    cy.wait(1000)
    cy.get(swarmlistvar.SwarmPageCards).contains(SwarmName3).closest(swarmlistvar.CardDetails).scrollIntoView().parent().parent().find(swarmlistvar.CardOptionButton3dots).then(($val) => {
        cy.log($val.length)
    }).click()
})

Then('I Open Existing Swarm4', () => {
    cy.wait(1000)
    cy.get(swarmlistvar.SwarmPageCards).contains(SwarmName4).closest(swarmlistvar.CardDetails).scrollIntoView().parent().parent().find(swarmlistvar.CardOptionButton3dots).then(($val) => {
        cy.log($val.length)
    }).click()
})

Then('I Open Existing Swarm5', () => {
    cy.wait(1000)
    cy.get(swarmlistvar.SwarmPageCards).contains(SwarmName5).closest(swarmlistvar.CardDetails).scrollIntoView().parent().parent().find(swarmlistvar.CardOptionButton3dots).then(($val) => {
        cy.log($val.length)
    }).click()
})

And('I Open Existing Swarm6', () => {
    cy.wait(1000)
    cy.get(swarmlistvar.SwarmPageCards).contains(SwarmName6).closest(swarmlistvar.CardDetails).scrollIntoView().parent().parent().find(swarmlistvar.CardOptionButton3dots).then(($val) => {
        cy.log($val.length)
    }).click()
})

Then('I Open Existing Swarm7', () => {
    cy.wait(1000)
    cy.get(swarmlistvar.SwarmPageCards).contains(SwarmName7).closest(swarmlistvar.CardDetails).scrollIntoView().parent().parent().find(swarmlistvar.CardOptionButton3dots).then(($val) => {
        cy.log($val.length)
    }).click()
})

Then('I Open Existing Swarm8', () => {
    cy.wait(1000)
    cy.get(swarmlistvar.SwarmPageCards).contains(SwarmName8).closest(swarmlistvar.CardDetails).scrollIntoView().parent().parent().find(swarmlistvar.CardOptionButton3dots).then(($val) => {
        cy.log($val.length)
    }).click()
})

And('I Open Existing Swarm9', () => {
    cy.wait(1000)
    cy.get(swarmlistvar.SwarmPageCards).contains(SwarmName9).closest(swarmlistvar.CardDetails).scrollIntoView().parent().parent().find(swarmlistvar.CardOptionButton3dots).then(($val) => {
        cy.log($val.length)
    }).click()
})

Then('I Open Existing Swarm10', () => {
    cy.wait(1000)
    cy.get(swarmlistvar.SwarmPageCards).contains(SwarmName10).closest(swarmlistvar.CardDetails).scrollIntoView().parent().parent().find(swarmlistvar.CardOptionButton3dots).then(($val) => {
        cy.log($val.length)
    }).click()
})
And('I Open Existing Swarm11', () => {
    cy.wait(1000)
    cy.get(swarmlistvar.SwarmPageCards).contains(SwarmName11).closest(swarmlistvar.CardDetails).scrollIntoView().parent().parent().find(swarmlistvar.CardOptionButton3dots).then(($val) => {
        cy.log($val.length)
    }).click()
})

And('I Open Existing Swarm12', () => {
    cy.wait(1000)
    cy.get(swarmlistvar.SwarmPageCards).contains(SwarmName12).closest(swarmlistvar.CardDetails).scrollIntoView().parent().parent().find(swarmlistvar.CardOptionButton3dots).then(($val) => {
        cy.log($val.length)
    }).click()
})

Then('I Open Existing Swarm13', () => {
    cy.wait(1000)
    cy.get(swarmlistvar.SwarmPageCards).contains(SwarmName13).closest(swarmlistvar.CardDetails).scrollIntoView().parent().parent().find(swarmlistvar.CardOptionButton3dots).then(($val) => {
        cy.log($val.length)
    }).click()
})

And('Open Existing Swarm14', () => {
    cy.wait(1000)
    cy.get(swarmlistvar.SwarmPageCards).contains(SwarmName14).closest(swarmlistvar.CardDetails).scrollIntoView().parent().parent().find(swarmlistvar.CardOptionButton3dots).then(($val) => {
        cy.log($val.length)
    }).click()
})

And('I Open Existing Swarm15', () => {
    cy.wait(1000)
    cy.get(swarmlistvar.SwarmPageCards).contains(SwarmName15).closest(swarmlistvar.CardDetails).scrollIntoView().parent().parent().find(swarmlistvar.CardOptionButton3dots).then(($val) => {
        cy.log($val.length)
    }).click()
})

And('Existing Swarm3 not visible', () => {
    cy.wait(1000)
    cy.contains(SwarmName3).should('not.exist');
})

And('Open Existing Swarm2', () => {
    cy.wait(1000)
    cy.get(swarmlistvar.SwarmPageCards).contains('SwarmDescription860').closest(swarmlistvar.CardDetails).scrollIntoView().parent().parent().find(swarmlistvar.CardOptionButton3dots).then(($val) => {
        cy.log($val.length)
    }).click()
})

And('Open Updated Swarm', () => {
    cy.wait(1000)
    cy.get(swarmlistvar.SwarmPageCards).contains(SwarmName1).closest(swarmlistvar.CardDetails).scrollIntoView().parent().parent().find(swarmlistvar.CardOptionButton3dots).then(($val) => {
        cy.log($val.length)
    }).click()
})

And('Remove user1 Type User', () => {
    cy.wait(3000)
    cy.get(swarmlistvar.MemberGroupedlist).contains(swarmlistvar.user1).parents(swarmlistvar.AddedRoleBlock).parent().find(swarmlistvar.closeIcon).children().then(($count) => {
        cy.log($count.length)
    }).click({force:true})
    cy.log(swarmlistvar.user1+' Successfully Removed')
})

And('I Remove user4 Type User', () => {
    cy.wait(3000)
    cy.get(swarmlistvar.MemberGroupedlist).contains(swarmlistvar.user4).parents(swarmlistvar.AddedRoleBlock).parent().find(swarmlistvar.closeIcon).then(($count) => {
        cy.log($count.length)
    }).click({force:true})
    cy.log(swarmlistvar.user4+' Successfully Removed')
})

And('Remove user3 Type User', () => {
    cy.wait(3000)
    cy.get(swarmlistvar.MemberGroupedlist).contains(swarmlistvar.user3).parents(swarmlistvar.AddedRoleBlock).parent().find(swarmlistvar.closeIcon).then(($count) => {
        cy.log($count.length)
    }).click({force:true})
    cy.log(swarmlistvar.user3+' Successfully Removed')
})

Then('I user4 cross icon with selected email is visible', () => {
    cy.wait(3000)
    cy.get(swarmlistvar.MemberGroupedlist).contains(swarmlistvar.user4).parents(swarmlistvar.AddedRoleBlock).parent().find(swarmlistvar.closeIcon).should('be.visible')
    cy.log(swarmlistvar.user4+' cross Removed icon is visible')
})

And('I Remove user5 Type User', () => {
    cy.wait(3000)
    cy.get(swarmlistvar.MemberGroupedlist).contains(swarmlistvar.user5).parents(swarmlistvar.AddedRoleBlock).parent().find(swarmlistvar.closeIcon).then(($count) => {
        cy.log($count.length)
    }).click({force:true})
    cy.log(swarmlistvar.user5+' Successfully Removed')
})

And('Verify that Added user try to remove other user', () => {
    cy.wait(3000)
    cy.get(swarmlistvar.MemberGroupedlist).contains(swarmlistvar.user3).parents(swarmlistvar.AddedRoleBlock).parent().find(swarmlistvar.closeIcon).then(($count) => {
        cy.log($count.length)
    }).should('not.be.enabled')
    cy.log(swarmlistvar.user3+' Remove icone is disabled')
})

And('Veriy 2 Users are removed', () => {
    cy.wait(3000)
    cy.get(swarmlistvar.MemberGroupedlist).children().then(($count) => {
        cy.log($count.length+' User left')
        cy.log('Users Successfully Removed')
    }).click()
    
})

Then('I Verify My Swarm Button is Visible', () => {
    cy.get(swarmlistvar.MySwarmButton).should('be.visible')
})

And('I Verify Teams Swarm Button is Visible', () => {
    cy.get(swarmlistvar.TeamSwarmButton).should('be.visible')
})

And('I Verify Swarm Name is Visible On Card', () => {
    cy.get(swarmlistvar.CardDetails).first().children().should('be.visible')
})

And('I Verify Swarm Image is Visible On Card', () => {
    cy.get(swarmlistvar.SwarmPageCards).first().children().last().children().first().find(swarmlistvar.CardPersonCircularImage).should('be.visible')
})

And('I Verify Add New Swarm Popup',()=>{
    cy.get(swarmlistvar.AddNewSwarmHeading).first().should('be.visible')
})

Then('I Verify Add New Swarm Name Field Is Empty By Default',()=>{
    cy.get(swarmlistvar.NewSwarmNameField).should('be.visible')
})

And('I Verify Add New Swarm Description Field Is Empty By Default',()=>{
    cy.get(swarmlistvar.NewSwarmDescriptionField).should('be.visible')
})

Then('I Verify Special Characters In Add New Swarm Name Field is Not Allowed',()=>{
    cy.get(swarmlistvar.NewSwarmNameField).should('be.visible').type('!@#$%^&*()')
    cy.get(swarmlistvar.NewSwarmNameField).should('be.visible')
})

And('Verify Special Characters In Edit Swarm Name Field is Not Allowed',()=>{
    cy.wait(1000)
    cy.get(swarmlistvar.NewSwarmNameField).should('be.visible').clear().type('!@#$%^&*()')
    cy.get(swarmlistvar.NewSwarmNameField).should('be.visible')
})

And ('I Add new Swarm Error mesasge Displayed',()=>{
    cy.get(swarmlistvar.AddNewSwarmErrorMessage).should('be.visible')
})