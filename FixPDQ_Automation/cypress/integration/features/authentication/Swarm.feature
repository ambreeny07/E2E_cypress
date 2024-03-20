Feature: Swarm
    Scenario: Verify that clicking on "Add new swarm" page opens the respective page
        Given I logged into the FIXPDQ app
        When I Click On Swarm List Button In SideBar
        Then I Click On Add New Swarm Plus Green Button
        And I Verify Add New Swarm Popup

    Scenario: Verify all fields are empty by default when open add new swarm popup
        Given I logged into the FIXPDQ app
        When I Click On Swarm List Button In SideBar
        Then I Click On Add New Swarm Plus Green Button
        And I Verify Add New Swarm Popup
        Then I Verify Add New Swarm Name Field Is Empty By Default
        And I Verify Add New Swarm Description Field Is Empty By Default

    Scenario: Verify that the "Swarm Name" field does not allow any special characters.
        Given I logged into the FIXPDQ app
        When I Click On Swarm List Button In SideBar
        Then I Click On Add New Swarm Plus Green Button
        And I Verify Add New Swarm Popup
        Then I Verify Add New Swarm Name Field Is Empty By Default
        And I Verify Add New Swarm Description Field Is Empty By Default
        Then I Verify Special Characters In Add New Swarm Name Field is Not Allowed

    Scenario: Verify validation massage appears when leaving all fields empty and save the record
        Given I logged into the FIXPDQ app
        When I Click On Swarm List Button In SideBar
        Then I Click On Add New Swarm Plus Green Button
        And I Verify Add New Swarm Popup
        Then I Verify Add New Swarm Name Field Is Empty By Default
        And I Verify Add New Swarm Description Field Is Empty By Default
        Then I Clicking On Save add New Swarm Button
        And I Add new Swarm Error mesasge Displayed

    Scenario: Verify that the validation message is shown when the user leaves all the mandatory fields blank.
        Given I logged into the FIXPDQ app
        When I Click On Swarm List Button In SideBar
        Then I Click On Add New Swarm Plus Green Button
        And I Verify Add New Swarm Popup
        Then I Verify Add New Swarm Name Field Is Empty By Default
        And I Verify Add New Swarm Description Field Is Empty By Default
        Then I Clicking On Save add New Swarm Button
        And I Add new Swarm Error mesasge Displayed


    Scenario: Verify that validation message shown when user click on save without adding any owner.
        Given I logged into the FIXPDQ app
        When I Click On Swarm List Button In SideBar
        Then I Click On Add New Swarm Plus Green Button
        And I Verify Add New Swarm Popup
        Then I Entering New Swarm Name
        And I Entering New Swarm Description
        And I Remove user5 Type User
        Then I Clicking On Save add New Swarm Button
        And I Add new Swarm Error mesasge Displayed

    Scenario: Verify that page redirecting to the "My Swarms" screen when clicks on "Save" button.
        Given I logged into the FIXPDQ app
        When I Click On Swarm List Button In SideBar
        Then I Click On Add New Swarm Plus Green Button
        And I Verify Add New Swarm Popup
        Then I Entering New Swarm16 Name
        And I Entering New Swarm Description
        Then I Clicking On Add User Button
        And I Choosing user4 as a user To add
        Then I Choosing user4 type change To Admin
        And I Clicking On Save New Swarm Button
        And I Verifiy SwarmList Page

    Scenario: Verify that by clicking "Manage Swarms" button redirecting to the correct page.
        Given I logged into the FIXPDQ app
        When I Click On Swarm List Button In SideBar
        And I Verifiy SwarmList Page

    Scenario: Verify that user is able to edit the record with valid data.
        Given I logged into the FIXPDQ app
        When I Click On Swarm List Button In SideBar
        Then I Click On Add New Swarm Plus Green Button
        And I Entering New Swarm1 Name
        And I Entering New Swarm Description
        Then I Clicking On Add User Button
        And I Choosing user4 as a user To add
        Then I Choosing user4 type change To Admin
        And I Clicking On Save New Swarm Button
        Then I Open Existing Swarm1
        And Change Swarm Name
        And Change Swarm Description
        And I Entering New Swarm Description
        And Clicking On Save Edit Swarm Button
        And Open Updated Swarm
        And Verify New Changed Swarm Name
        And Verify New Changed Swarm Description

    Scenario: Verify that validation message shown when creator removes all the added members.
        Given I logged into the FIXPDQ app
        When I Click On Swarm List Button In SideBar
        Then I Click On Add New Swarm Plus Green Button
        And Entering New Swarm12 Name
        And I Entering New Swarm Description
        And I Clicking On Save New Swarm Button
        Then I Open Existing Swarm12
        And I Remove user5 Type User
        Then I Clicking On Save add New Swarm Button
        And I Add new Swarm Error mesasge Displayed

    Scenario: Verify that added members are allowed to access the swarm as per their authority.
        Given I logged into the FIXPDQ app
        When I Click On Swarm List Button In SideBar
        Then I Click On Add New Swarm Plus Green Button
        And I Entering New Swarm13 Name
        And I Entering New Swarm Description
        Then I Clicking On Add User Button
        And I Choosing user3 as a user To add
        Then I Clicking On Add User Button
        And I Choosing user3 type change To Admin
        Then Role before
        And I Clicking On Save New Swarm Button
        Then I Clicking On Profile Button
        And I Clicking On  MyProfile Logout Button
        Then I enter user3 a valid email
        And I enter user3 a valid password
        And I click on login button
        When I Click On Swarm List Button In SideBar
        Then I Open Existing Swarm13
        And Role after

    Scenario: Verify that when user click on Swarm List then the pop-up option should be visible and option should be like Add New Swarm And Manage Swarm
        Given I logged into the FIXPDQ app
        When I Click On Swarm List Button In SideBar


    Scenario: Verify that when user click on Swarm List and the two options should be appeared then user click on Add New Swarm option
        Given I logged into the FIXPDQ app
        When I Click On Swarm List Button In SideBar
        Then I Click On Add New Swarm Plus Green Button
        And I Add New Swarm title is visible

    Scenario: Verify that when user click on Add New Swarm then the add new swarm pop-up screen should be appeard
        Given I logged into the FIXPDQ app
        When I Click On Swarm List Button In SideBar
        Then I Click On Add New Swarm Plus Green Button
        And I Add New Swarm title is visible

    Scenario: Verify that there should be visible the title name of Add New Swarm on top of the pop-up screen
        Given I logged into the FIXPDQ app
        When I Click On Swarm List Button In SideBar
        Then I Click On Add New Swarm Plus Green Button
        And I Add New Swarm title is visible

    Scenario: Verify that there should be visible the cross icon on top right side of the pop-up screen and it should be clickable
        Given I logged into the FIXPDQ app
        When I Click On Swarm List Button In SideBar
        Then I Click On Add New Swarm Plus Green Button
        And I Add New Swarm title is visible
        Then I Cross Icone On Top Right Pop-Up Screen is visible

    Scenario: Verify that there should be visible the Swarm name text field and it field have the placeholder and the placeholder should be like: "swarm name"
        Given I logged into the FIXPDQ app
        When I Click On Swarm List Button In SideBar
        Then I Click On Add New Swarm Plus Green Button
        And I verify new swarm name text field placeholder is visible
        Then I verify new swarm name text field placeholder should be like: swarm name

    Scenario: Verify that there should be visible the description box of Swarm to write the any description
        Given I logged into the FIXPDQ app
        When I Click On Swarm List Button In SideBar
        Then I Click On Add New Swarm Plus Green Button
        And I verify new swarm new swarm description text field is visible
        Then I verify new swarm new swarm description text field placeholder is visible
        And I verify new swarm description text field placeholder should be like swarm Description
        And I Entering New Swarm Description

    Scenario: Verify that there should be visible the placeholder of description like: "Swarm Description"
        Given I logged into the FIXPDQ app
        When I Click On Swarm List Button In SideBar
        Then I Click On Add New Swarm Plus Green Button
        Then I verify new swarm new swarm description text field placeholder is visible
        And I verify new swarm description text field placeholder should be like swarm Description

    Scenario: Verify that there should be limitation of swarm description box and the limitation should be 300 characters not more than 300 and also not allowed to write more characters.
        Given I logged into the FIXPDQ app
        When I Click On Swarm List Button In SideBar
        Then I Click On Add New Swarm Plus Green Button
        And I verify new swarm new swarm description text field is visible
        Then I verify new swarm new swarm description text field placeholder is visible
        And I verify new swarm description text field placeholder should be like swarm Description
        Then I entering 300 characters in Swarm Description

    Scenario: Verify that there make sure the speacial characters are not allowed in (title or summary) Swarm name.
        Given I logged into the FIXPDQ app
        When I Click On Swarm List Button In SideBar
        Then I Click On Add New Swarm Plus Green Button
        And I verify new swarm new swarm description text field is visible
        Then I verify new swarm new swarm description text field placeholder is visible
        And I verify new swarm description text field placeholder should be like swarm Description
        Then I Verify that value is get from swarm name
        And I entering speacial characters in Swarm Name
        Then I Verify that Speacial characters are not allowed in Swarm name

    Scenario: Verify that there should be visible the creator who add the new swarm and it's email should be visible in creator field and user can just view the email because it's not the editable or clickable
        Given I logged into the FIXPDQ app
        When I Click On Swarm List Button In SideBar
        Then I Click On Add New Swarm Plus Green Button
        And I Verify that The creator should be visible with email

    Scenario: Verify that the image of user's email should be visible as well
        Given I logged into the FIXPDQ app
        When I Click On Swarm List Button In SideBar
        Then I Click On Add New Swarm Plus Green Button
        And I Verify that The creator should be visible with email
        Then I Verify that Image should be visible against the email

    Scenario: Verify that the creator email should be fixed and it's not editable and it's totaly fixed but user can just view this email
        Given I logged into the FIXPDQ app
        When I Click On Swarm List Button In SideBar
        Then I Click On Add New Swarm Plus Green Button
        And I Verify that The creator should be visible with email
        Then I Verify that Image should be visible against the email
        And I Click On Creator close icon
        And I Verify that The creator should be visible with email

    Scenario: Verify that the Swarm name, Description and Creator these are all mandatory fields or required fields and also visible the asterik " * " on mandatorty fields
        Given I logged into the FIXPDQ app
        When I Click On Swarm List Button In SideBar
        Then I Click On Add New Swarm Plus Green Button
        And I Verify that asterik is showing Swarm name
        Then I Verify that asterik is showing Description
        And I Verify that asterik is showing Creator

    Scenario: Verify that the interested parties should be visible with all registered emails.
        Given I logged into the FIXPDQ app
        When I Click On Swarm List Button In SideBar
        Then I Click On Add New Swarm Plus Green Button
        And I Verify that the interested parties should be visible
        Then I Clicking On Add User Button
        And I verify that user3 is visible in drop down
        Then I verify that user4 is visible in drop down
        And I verify that user5 is visible in drop down

    Scenario: Verify that the interested party field have the placeholder like "Search to add..." and it is clickable
        Given I logged into the FIXPDQ app
        When I Click On Swarm List Button In SideBar
        Then I Click On Add New Swarm Plus Green Button
        And I Verify that the placeholder of interested party should be visible
        Then I verify that Clicking on Search to add

    Scenario: Verify that there should be visible the Add button icon "+" which is clickable and when user press the add button then there should be open the dropdown list
        Given I logged into the FIXPDQ app
        When I Click On Swarm List Button In SideBar
        Then I Click On Add New Swarm Plus Green Button
        And I Verify that Add button icon plus sign is visible
        Then I Clicking On Add User Button
        And I verify that user5 is visible in drop down

    Scenario: Verify that there should be visible the registered email creator selected the multiple emails
        Given I logged into the FIXPDQ app
        When I Click On Swarm List Button In SideBar
        Then I Click On Add New Swarm Plus Green Button
        And I Verify that Add button icon plus sign is visible
        Then I Clicking On Add User Button
        And I Choosing user4 as a user To add
        Then I Clicking On Add User Button
        And I Choosing user3 as a user To add

    Scenario: Verify that there should be visible the cross icon with selected email field just because to remove the field
        Given I logged into the FIXPDQ app
        When I Click On Swarm List Button In SideBar
        Then I Click On Add New Swarm Plus Green Button
        And I Verify that Add button icon plus sign is visible
        Then I Clicking On Add User Button
        And I Choosing user4 as a user To add
        Then I user4 cross icon with selected email is visible
        And I Remove user4 Type User

    Scenario: Verify that there should be visible the different buttons which are: Save, Cancel, Copy, Remove
        Given I logged into the FIXPDQ app
        When I Click On Swarm List Button In SideBar
        Then I Click On Add New Swarm Plus Green Button
        And I Verify that Save New Swarm Button is visible
        Then I Verify that Copey New Swarm Button is visible
        And I Verify that Remove New Swarm Button is visible
        Then I Verify that Cancel New Swarm Button is visible

    Scenario: Verify that all buttons should be clickable and perform some functionality like if Press save button then swarm should be saved and if user press cancel then its canceled same as other copy and remove button perform its own functionality
        Given I logged into the FIXPDQ app
        When I Click On Swarm List Button In SideBar
        Then I Click On Add New Swarm Plus Green Button
        Then I Entering New Swarm17 Name
        And I Entering New Swarm Description
        And I Clicking On Save New Swarm Button
        Then I Click On Add New Swarm Plus Green Button
        And I Clicking On Cancel Edit Swarm Button

    Scenario: Verify that the save button should be in yellow color button and cancel should be white button and other two buttons should be grey color
        Given I logged into the FIXPDQ app
        When I Click On Swarm List Button In SideBar
        Then I Click On Add New Swarm Plus Green Button
        And I Verify that save button color is yellow
        Then I Verify that cancel button color is white
        And I Verify that copy button color is black

    Scenario: Verify that user click on Add New Swarm and pop-up screen should be opened then fill up the text boxes like Enter the Swarm name and it's description and then select the interested party and select it's role then press the Save button to create the swarm
        Given I logged into the FIXPDQ app
        When I Click On Swarm List Button In SideBar
        Then I Click On Add New Swarm Plus Green Button
        And I Verify Add New Swarm Popup
        Then I Entering New Swarm Name
        And I Entering New Swarm Description
        Then I Clicking On Add User Button
        And I Choosing user4 as a user To add
        Then I Choosing user4 type change To Admin
        And I Clicking On Save New Swarm Button
        And I Verifiy SwarmList Page

    Scenario: Verify that validation message shown when creator removes all the added members.
        Given I logged into the FIXPDQ app
        When I Click On Swarm List Button In SideBar
        Then I Click On Add New Swarm Plus Green Button
        And I Entering New Swarm14 Name
        And I Entering New Swarm Description
        And I Clicking On Save New Swarm Button
        Then I Verify that Existing Swarm14 is visible in swarm list

    Scenario: Verify that the Cancel button should be used to cancel the swarm
        Given I logged into the FIXPDQ app
        When I Click On Swarm List Button In SideBar
        Then I Click On Add New Swarm Plus Green Button
        Then I Entering New Swarm Name
        And I Entering New Swarm Description
        And I Clicking On Cancel Edit Swarm Button

    Scenario: Verify that when user add new swarm then creator have complete access to add members and change roles
        Given I logged into the FIXPDQ app
        When I Click On Swarm List Button In SideBar
        Then I Click On Add New Swarm Plus Green Button
        And I Verify that The creator should be visible with email
        Then I Entering New Swarm Name
        And I Entering New Swarm Description
        Then I Clicking On Add User Button
        And I Choosing user4 as a user To add
        Then I Choosing user4 type change To Admin

    Scenario: Verify that there will be at least one owner in the team.
        Given I logged into the FIXPDQ app
        When I Click On Swarm List Button In SideBar
        Then I Click On Add New Swarm Plus Green Button
        Then I Clicking On Add User Button
        And I Choosing user3 as a user To add
        Then I Verify that creator role before change the member role
        And I Choosing user3 type change To Owner
        Then I Verify that creator role after change the member role

    Scenario: Verify that if the owner changes the role of any member then it should also be visible to them as well instantly.
        Given I logged into the FIXPDQ app
        When I Click On Swarm List Button In SideBar
        Then I Click On Add New Swarm Plus Green Button
        And I entering new swarm15 name
        And I Entering New Swarm Description
        Then I Clicking On Add User Button
        And I Choosing user3 as a user To add
        Then I Clicking On Add User Button
        And I Choosing user3 type change To Admin
        Then Role before
        And I Clicking On Save New Swarm Button
        Then I Clicking On Profile Button
        And I Clicking On  MyProfile Logout Button
        Then I enter user3 a valid email
        And I enter user3 a valid password
        And I click on login button
        Then I Validate Profile Button On Home Screen
        When I Click On Swarm List Button In SideBar
        And I Open Existing Swarm15
        And Role after

    Scenario: Verify that creator should select multiple Interested Parties And creator can select multiple admins.
        Given I logged into the FIXPDQ app
        When I Click On Swarm List Button In SideBar
        Then I Click On Add New Swarm Plus Green Button
        And I Verify that The creator should be visible with email
        Then I Entering New Swarm Name
        And I Entering New Swarm Description
        Then I Clicking On Add User Button
        And I Choosing user4 as a user To add
        Then I Choosing user4 type change To Admin
        Then I Clicking On Add User Button
        And I Choosing user3 as a user To add
        And I Choosing user3 type change To Admin

    Scenario: Verify that if creator select the "xyz" as a owner then xyz have access to change the role of Admin, Member, and Invited except owner and creator
        Given I logged into the FIXPDQ app
        When I Click On Swarm List Button In SideBar
        Then I Click On Add New Swarm Plus Green Button
        And I entering new swarm4 name
        And I Entering New Swarm Description
        Then I Clicking On Add User Button
        And I Choosing user3 as a user To add
        And I Choosing user3 type change To onwer
        Then Role before
        Then I Clicking On Add User Button
        And I Choosing user1 as a user To add
        Then I Choosing user1 type change To Admin
        And User1 Role before
        Then I Clicking On Add User Button
        And I Choosing user4 as a user To add
        Then I Choosing user4 type change To Admin
        And User4 Role before
        Then User5 Role before
        And I Clicking On Save New Swarm Button
        Then I Clicking On Profile Button
        And I Clicking On  MyProfile Logout Button
        Then I enter user3 a valid email
        And I enter user3 a valid password
        And I click on login button
        And I Validate Profile Button On Home Screen
        When I Click On Swarm List Button In SideBar
        Then I Open Existing Swarm4
        And Role after
        Then I Choosing user1 type change To Invited
        And User1 Role after
        Then I Choosing user4 type change To Member
        And User4 Role after
        Then I Choosing user5 type change To Admin
        And User5 Role after

    Scenario: Verify that firstly creator add the member and then remove it so check that member still visible from it's own account or not
        Given I logged into the FIXPDQ app
        When I Click On Swarm List Button In SideBar
        Then I Click On Add New Swarm Plus Green Button
        And I Entering New Swarm3 Name
        And I Entering New Swarm Description
        Then I Clicking On Add User Button
        And I Choosing user3 as a user To add
        And Remove user3 Type User
        And I Clicking On Save New Swarm Button
        Then I Clicking On Profile Button
        And I Clicking On  MyProfile Logout Button
        Then I enter user3 a valid email
        And I enter user3 a valid password
        And I click on login button
        Then I Validate Profile Button On Home Screen
        And Existing Swarm3 not visible

    Scenario: Verify that there should be visible the title name "Edit Name" top left of the screen
        Given I logged into the FIXPDQ app
        When I Click On Swarm List Button In SideBar
        Then I Click On Add New Swarm Plus Green Button
        And I Entering New Swarm5 Name
        And I Entering New Swarm Description
        And I Clicking On Save New Swarm Button
        Then I Open Existing Swarm5
        And I EditSwarm title is visible

    Scenario: Verify that there should be visible the cross icon on top right side of pop-up screen and it is clickable
        Given I logged into the FIXPDQ app
        When I Click On Swarm List Button In SideBar
        Then I Click On Add New Swarm Plus Green Button
        And I Entering New Swarm6 Name
        And I Entering New Swarm Description
        And I Clicking On Save New Swarm Button
        And I Open Existing Swarm6
        Then I Cross Icone On Top Right Pop-Up Screen is visible

    Scenario: Verify that there should be visible the "Swarm name" (title or summary) which is text field and it is also mandatory field
        Given I logged into the FIXPDQ app
        When I Click On Swarm List Button In SideBar
        Then I Click On Add New Swarm Plus Green Button
        And I Entering New Swarm7 Name
        And I Entering New Swarm Description
        And I Clicking On Save New Swarm Button
        Then I Open Existing Swarm7
        And I Edit Swarm name text field is visible

    Scenario: Verify that there should be visible the search bar where user can search the any person and select the role of them
        Given I logged into the FIXPDQ app
        When I Click On Swarm List Button In SideBar
        Then I Click On Add New Swarm Plus Green Button
        And I Entering New Swarm8 Name
        And I Entering New Swarm Description
        And I Clicking On Save New Swarm Button
        Then I Open Existing Swarm8
        And I Verify that the placeholder of interested party should be visible
        Then I Clicking On Add User Button
        And I Choosing user4 as a user To add
        Then I Choosing user4 type change To Admin

    Scenario: Verify that there will be a only one owner in the team.
        Given I logged into the FIXPDQ app
        When I Click On Swarm List Button In SideBar
        Then I Click On Add New Swarm Plus Green Button
        And I Entering New Swarm9 Name
        And I Entering New Swarm Description
        And I Clicking On Save New Swarm Button
        And I Open Existing Swarm9
        Then I Clicking On Add User Button
        And I Choosing user3 as a user To add
        Then I Verify that creator role before change the member role
        And I Choosing user3 type change To Owner
        Then I Verify that creator role after change the member role

    Scenario: Verify that there should be visible the total number of members of Interested parties
        Given I logged into the FIXPDQ app
        When I Click On Swarm List Button In SideBar
        Then I Click On Add New Swarm Plus Green Button
        And I Entering New Swarm10 Name
        And I Entering New Swarm Description
        And I Clicking On Save New Swarm Button
        Then I Open Existing Swarm10
        Then I verify that Clicking on Search to add
        And I verify that the Total number of members of Interested parties

    Scenario: Verify that when user click on search bar of Add new Swarm pop-up screen then open it and click on members list search bar and this search bar is visible in persons list to search specific person
        Given I logged into the FIXPDQ app
        When I Click On Swarm List Button In SideBar
        Then I Click On Add New Swarm Plus Green Button
        And Entering New Swarm11 Name
        And I Entering New Swarm Description
        And I Clicking On Save New Swarm Button
        And I Open Existing Swarm11
        Then I verify that Clicking on Search to add
        And I verify that the Total number of members of Interested parties

    Scenario: Add swarm option should be visible at the end of the page.
        Given I logged into the FIXPDQ app
        When I Click On Swarm List Button In SideBar
        Then I Click On Add New Swarm Plus Green Button

    Scenario: All swarm should show in grid view.
        Given I logged into the FIXPDQ app
        When I Click On Swarm List Button In SideBar
        And I Verify that Creator Name is visible
        And I Verify that Date is visible

    Scenario: Creator name and date should be visible right after description swarm
        Given I logged into the FIXPDQ app
        When I Click On Swarm List Button In SideBar
        And I Verify that Creator Name is visible
        And I Verify that Date is visible

    Scenario: Swarm summary should show in gray area on swarm grid.
        Given I logged into the FIXPDQ app
        When I Click On Swarm List Button In SideBar
        And I Verify that Summary is visible

    Scenario: Owner name with image should be visible at the down left corner.
        Given I logged into the FIXPDQ app
        When I Click On Swarm List Button In SideBar
        And I Verify that Swarm Owner Image is visible
        And I Verify that Swarm Owner Name is visible




