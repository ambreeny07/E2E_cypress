Feature: LeftMenu
    Scenario: Verify that "Home" button is visible on left menu.
        Given I logged into the FIXPDQ app
        Then I Verify Home Button is visible

        Scenario: Verify that "Home" button is clickable and redirect to there respective page.
        Given I logged into the FIXPDQ app
        Then I Verify Home Button is clickable
        And I Validate Home Screen

        Scenario: Verify that "Workspace" button is visible on left menu.
        Given I logged into the FIXPDQ app
        Then I Verify WorkSpace Button is visible

        Scenario: Verify that "Workspace" button is clickable and redirect to the respective page.
        Given I logged into the FIXPDQ app
        Then I Verify WorkSpace Button is clickable
        And I Validate WorkSpace Screen

        Scenario: Verify that "Swarm List" button is visible on left menu.
        Given I logged into the FIXPDQ app
        Then I Verify SwarmList Button is visible

        Scenario: Verify that "Swarm List" button is clickable and redirect to the respective page.
        Given I logged into the FIXPDQ app
        Then I Verify SwarmList Button is visible
        When I Click On Swarm List Button In SideBar
        And I Verifiy SwarmList Page
        
        Scenario:  Verify that "Team" button is visible on left menu.
        Given I logged into the FIXPDQ app
        Then I Verify Team Button is visible

        Scenario:  Verify that "Team" button is clickable and redirect to the respective page.
        Given I logged into the FIXPDQ app
        Then I Verify Team Button is visible
        And I Verify Team Button is Clickable
        And I Verify My Team Page

        Scenario:  Verify that "PlayBook" button is visible on left menu.
        Given I logged into the FIXPDQ app
        Then I Verify PlayBook Button is visible

        Scenario:  Verify that "PlayBook" button is clickable and redirect to the respective page.
        Given I logged into the FIXPDQ app
        Then I Verify PlayBook Button is visible
        And I Verify PlayBook Button is Clickable
        And I Verify PlayBook Page

        Scenario:  Verify that "My Profile" button is visible on left menu.
        Given I logged into the FIXPDQ app
        Then I Verify Profile Button is visible        

        Scenario:  Verify that "My Profile" button is clickable and redirect to there respective page.
        Given I logged into the FIXPDQ app
        Then I Verify Profile Button is visible
        And I Verify Profile Button is Clickable
        And I Verify Profile Page

        
        

        

        
        


       

        


        


        