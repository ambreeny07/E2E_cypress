Feature: Home

   Scenario: Verify that user can view logo on top left of screen.
      Given I logged into the FIXPDQ app
      Then I Verify Home Screen Logo is Visible

   Scenario: Verify logo is clickable and redirect user to home screen.
      Given I logged into the FIXPDQ app
      When I Click On Home Screen Logo
      Then I Verify Home Screen Page

   Scenario: Verify that filter icon is clickable and open up the filter options.
      Given I logged into the FIXPDQ app
      Then I Verify Filter Clickable

   Scenario: Verify that all actions in filter are clickable.
      Given I logged into the FIXPDQ app
      Then I Verify Filter Clickable

   Scenario: Verify that click on the "Due date" shows the drop down menu in the filter options.
      Given I logged into the FIXPDQ app
      Then I Verify Filter Clickable
      And I Click On DueDate
      And I Verify Due Date PopUp Menu

   Scenario: Verify that user can select/unselect all options from "Due date" when click on "Select All / UNSELECT ALL"..
      Given I logged into the FIXPDQ app
      Then I Verify Filter Clickable
      And I Click On DueDate
      And I Click On Due Date Select all
      And I Click On Due Date Unselect all

   Scenario: Verify that all actions in filter are clickable.
      Given I logged into the FIXPDQ app
      Then I Verify Filter Clickable
      And I Verify All Filter Actions

   Scenario: Verify that check boxes are clickable in "Due date".
      Given I logged into the FIXPDQ app
      Then I Verify Filter Clickable
      And I Click On DueDate
      And I Click On Due Date Select all

   Scenario: Verify that user can select work priority by clicking on check boxes in dropdown menu of "Work Item Priority".
      Given I logged into the FIXPDQ app
      Then I Verify Filter Clickable
      And I Click On Work item priority
      And I Verify Work item priority Options CheckBox Checkable

   Scenario: Verify that user can select multiple options from "Filter" dropdown menu "Work item priority" and "Due date".
      Given I logged into the FIXPDQ app
      Then I Verify Filter Clickable
      And I Click On Work item priority
      And I Check First Box From Work item priority Options
      And I Click On DueDate
      And I Check First Box From DueDate Options

   Scenario: Verify that drop down menu bar diappears when click on "Filter".
      Given I logged into the FIXPDQ app
      Then I Click Filter
      And I Verify View Action Visible
      Then I Click Filter
      And I Verify View Action Not Visible

   Scenario: Verify that "Who needs my help" is visible and clicakble on home screen.
      Given I logged into the FIXPDQ app
      When I Verify Who need my help is visible
      Then I Verify Who need my help is Clickable

   Scenario:  Verify that "Who need to help me" is visible and clicakble on home screen.
      Given I logged into the FIXPDQ app
      When I Verify WHO NEED TO HELP ME is visible
      Then I Verify WHO NEED TO HELP ME is Clickable

   Scenario:  Verify that only one of "Who needs my help" and "Who need to help me" is selectable at once.
      Given I logged into the FIXPDQ app
      Then I Verify WHO NEED TO HELP ME is Clickable
      And I Not Selected Status Who need my help
      And I Selected Status WHO NEED TO HELP ME

   Scenario: Verify that one card for coach of each swarm is visible on home screen.
      Given I logged into the FIXPDQ app
      Then I Verify Description Card Is Visible

   Scenario: Verify that user can view left menu bar on screen.
      Given I logged into the FIXPDQ app
      Then I Verify Side Menu Bar Is Visible

   Scenario: Verify that swarm overview button redirects to work item card view.
      Given I logged into the FIXPDQ app
      Then I Click On SwarmOverView Button

   Scenario: Verify that "Me As Owner" is visible on "Swarm Overview" screen.
      Given I logged into the FIXPDQ app
      Then I Click On SwarmOverView Button
      And I Verify Me As Owner is Visible

   Scenario: Verify that owner icon is visible in "Me as Owner" section.
      Given I logged into the FIXPDQ app
      Then I Click On SwarmOverView Button
      And I Verify Me As Owner is Visible
      And I Verify Me As Owner Icon is Visible

   Scenario: Verify that count is visible in "Me As Owner" section.
      Given I logged into the FIXPDQ app
      Then I Click On SwarmOverView Button
      And I Verify Me As Owner is Visible
      And I Verify Me As Owner Count is Visible

   Scenario: Verify that "Me As Owner" is clickable.
      Given I logged into the FIXPDQ app
      Then I Click On SwarmOverView Button
      And I Verify Me As Owner is Visible
      And I Verify Me As Owner is Clickable

   Scenario: Verify that "Me As Creator" is visible on "Swarm Overview" screen.
      Given I logged into the FIXPDQ app
      Then I Click On SwarmOverView Button
      And I Verify Me As Creator is Visible

   Scenario: Verify that creater icon is visible in "Me As Creator" section.
      Given I logged into the FIXPDQ app
      Then I Click On SwarmOverView Button
      And I Verify Me As Creator is Visible
      And I Verify ME AS CREATOR Icon is Visible

   Scenario: Verify that count is visible in "Me As Creator" section.
      Given I logged into the FIXPDQ app
      Then I Click On SwarmOverView Button
      And I Verify Me As Creator is Visible
      And I Verify ME AS CREATOR Count is Visible

   Scenario: Verify that click on the "Work item priority" shows the drop down menu in filter options.
      Given I logged into the FIXPDQ app
      Then I Verify Filter Clickable
      And I Click On Work item priority
      And I Verify Work item priority PopUp Menu

   Scenario: Verify that "Me As Creator" is clickable.
      Given I logged into the FIXPDQ app
      Then I Click On SwarmOverView Button
      And I Verify Me As Creator is Visible
      And I Verify Me As Creator is Clickable

   Scenario: Verify that "Everything" section is visible on "Swarm Overview" screen.
      Given I logged into the FIXPDQ app
      Then I Click On SwarmOverView Button
      And I Verify Everything is Visible

   Scenario: Verify that folder icon is visible in "Everything" section.
      Given I logged into the FIXPDQ app
      Then I Click On SwarmOverView Button
      And I Verify Everything is Visible
      And Verify Everything Icon is Visible

   Scenario: Verify that count is visible in "Everything" section.
      Given I logged into the FIXPDQ app
      Then I Click On SwarmOverView Button
      And I Verify Everything is Visible
      And Verify Everything Count is Visible

   Scenario: Verify that "Everything"section is clickable.
      Given I logged into the FIXPDQ app
      Then I Click On SwarmOverView Button
      And I Verify Everything is Visible
      And I Verify Everything is Clickable

   Scenario: Verify that swarm dropdown is visible in left menu bar.
      Given I logged into the FIXPDQ app
      Then I Verify Swarm Selector Is Visible

   Scenario: Verify that search bar is visible when user clicks on swarm dropdown menu.
      Given I logged into the FIXPDQ app
      Then I Verify Swarm Selector Is Visible
      And I Click On Swarm Selector
      And I Search Box of Swarm Selector Is Visible

   Scenario: Verify that swarm overview is clickable.
      Given I logged into the FIXPDQ app
      Then Verify SwarmOverView Button is clickable

   Scenario: Verify that search bar show hover effect.
      Given I logged into the FIXPDQ app
      Then I Verify Swarm Selector Is Visible
      And I Click On Swarm Selector
      And I Verify Swarm Selector ListBox hover Is Visible

   Scenario: Verify that search bar is clickable from swarm search section
      Given I logged into the FIXPDQ app
      Then I Verify Swarm Selector Is Visible
      And I Click On Swarm Selector
      And I Verify Swarm Selector ListBox hover Is Visible
      And I Verify Swarm Search Area is Clickable

   Scenario: Verify that swarm names are clickable.
      Given I logged into the FIXPDQ app
      Then I Verify Swarm Selector Is Visible
      And I Click On Swarm Selector
      And I Verify Swarm Selector ListBox hover Is Visible
      And I Verify Swarm Selector ListBox Options are Clickable

   Scenario: Verify that on selecting any swarm, system redirects to particular page.
      Given I logged into the FIXPDQ app
      Then I Verify Swarm Selector Is Visible
      And I Click On Swarm Selector
      And I Verify Swarm Selector ListBox hover Is Visible
      And I Verify Page after Clicking On Swarm Selector ListBox Options

   Scenario: Verify that selected swarm name is displayed in swarm section.
      Given I logged into the FIXPDQ app
      Then I Verify Swarm Selector Is Visible
      And I Click On Swarm Selector
      And I Verify Swarm Selector ListBox hover Is Visible
      And I Verify Page after Clicking On Swarm Selector ListBox Options

   Scenario: Verify that user can view number people to whom i want to assign tickets in "Who need to help me" section.
      Given I logged into the FIXPDQ app
      And I Verify WHO NEED TO HELP ME People Count is visible

   Scenario: Verify that user can view number of people who want to assign their tickets to me in"Who needs my help" section.
      Given I logged into the FIXPDQ app
      Then I Verify WHO NEEDS MY HELP People Count is visible

      Scenario: "Who needs my help" filter people who assigned ticket to me.
      Given I logged into the FIXPDQ app
      Then I Verify WHO NEEDS MY HELP People Count is visible
      And I Verify Number of WHO NEEDS MY HELP Cards

      Scenario: Verify that swarm name is visible on each person's card and coach card
      Given I logged into the FIXPDQ app
      Then I Get SwarmName
      And I Verify SwarmName From The Coach Card




       

      






