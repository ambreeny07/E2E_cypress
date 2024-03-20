Feature: SwarmList

      Scenario: Add New Swarm with multiple users added and one will be admin
            Given I logged into the FIXPDQ app
            When I Click On Swarm List Button In SideBar
            Then I Click On Add New Swarm Plus Green Button
            Then I Entering New Swarm Name
            And I Entering New Swarm Description
            Then I Clicking On Add User Button
            And I Choosing user3 as a user To add
            Then I Clicking On Add User Button
            And I Choosing user4 as a user To add
            Then I Choosing user4 type change To Admin
            And I Clicking On Save New Swarm Button
            When I Click On Swarm List Button In SideBar
            And Open Existing Swarm
            Then I Verify user3 is added
            And I Verify user4 is added

      Scenario: Remove One Admin and One Member From By Editing an Existing Swarm
            Given I logged into the FIXPDQ app
            When I Click On Swarm List Button In SideBar
            Then I Click On Add New Swarm Plus Green Button
            And I Entering New Swarm1 Name
            And I Entering New Swarm Description
            Then I Clicking On Add User Button
            And I Choosing user3 as a user To add
            Then I Clicking On Add User Button
            And I Choosing user4 as a user To add
            Then I Choosing user4 type change To Admin
            And I Clicking On Save New Swarm Button
            Then I Open Existing Swarm1
            And I Remove user4 Type User
            And Clicking On Save Edit Swarm Button
            Then I Open Existing Swarm1

      Scenario: Verify that "My Swarms" and "Team's Swarms" are shown at the left top corner of the page.
            Given I logged into the FIXPDQ app
            Then I Verify SwarmList Button is visible
            When I Click On Swarm List Button In SideBar
            Then I Verify My Swarm Button is Visible
            And I Verify Teams Swarm Button is Visible

      Scenario: Verify that the swarm name is visible for each person.
            Given I logged into the FIXPDQ app
            Then I Verify SwarmList Button is visible
            When I Click On Swarm List Button In SideBar
            And I Verify Swarm Name is Visible On Card

      Scenario: Verify that the image of each person is visible in the swarm card.
            Given I logged into the FIXPDQ app
            Then I Verify SwarmList Button is visible
            When I Click On Swarm List Button In SideBar
            And I Verify Swarm Image is Visible On Card

      Scenario: Verify that the image of each person is visible in the swarm card.
            Given I logged into the FIXPDQ app
            Then I Verify SwarmList Button is visible
            When I Click On Swarm List Button In SideBar
            And I Verify Swarm Image is Visible On Card


