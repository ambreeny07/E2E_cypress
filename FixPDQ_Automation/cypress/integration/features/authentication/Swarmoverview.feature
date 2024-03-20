Feature: Swarmoverview
    Scenario: Verify that on clicking filter icon, horizontal dropdown menu should appear on screen.
        Given I logged into the FIXPDQ app
        Then I Click On SwarmOverView Button
        And I Click On Filter Button
        Then I Verify horizontal dropdown menu appear

    Scenario: Verify that view states are visible and clickable from filter icon.
        Given I logged into the FIXPDQ app
        Then I Click On SwarmOverView Button
        And I Click On Filter Button
        Then I Verify View State is Visible

    Scenario: Verify that drop down of "View Actions" is visible in filter menu.
        Given I logged into the FIXPDQ app
        Then I Click On SwarmOverView Button
        And I Click On Filter Button
        Then I Verify View Action is Visible

    Scenario: Verify that all actions are clickable in view state.
        Given I logged into the FIXPDQ app
        Then I Click On SwarmOverView Button
        And I Click On Filter Button
        Then I Verify all View States are clickable

    Scenario: Verify that click on the "Work item priority" shows the drop down menu in filter options.
        Given I logged into the FIXPDQ app
        Then I Click On SwarmOverView Button
        And I Click On Filter Button
        Then I Click On Work On Priority Icon
        And I Verify Work On Priority Popup Shown

    Scenario: "Verify that user can select work priority by clicking on check boxes in dropdown menu of ''Work Item Priority''.
        Given I logged into the FIXPDQ app
        Then I Click On SwarmOverView Button
        And I Click On Filter Button
        Then I Click On Work On Priority Icon
        And I Verify Work On Priority Popup Shown
        Then I Checked On Work On Priority CheckBox

    Scenario: Verify that drop down menu bar diappears when click on ''Filter''.
        Given I logged into the FIXPDQ app
        Then I Click On SwarmOverView Button
        And I Click On Filter Button
        Then I Verify horizontal dropdown menu appear
        And I Click On Filter Button
        Then I Verify horizontal dropdown menu disappear

    Scenario: Verify that user can select multiple options from "Filter" dropdown menu "Work item priority" and "Due date" and ''View Actions''.
        Given I logged into the FIXPDQ app
        Then I Click On SwarmOverView Button
        And I Click On Filter Button
        Then I Verify horizontal dropdown menu appear
        Then I Click On Work On Priority Icon
        And I Verify Work On Priority Popup Shown
        Then I Checked On Work On Priority CheckBox
        And I Click On View Action Icon
        Then I Checked On View Action CheckBox

    Scenario: Verify that check boxes are clickable in ''Due date''.
        Given I logged into the FIXPDQ app
        Then I Click On SwarmOverView Button
        And I Click On Filter Button
        Then I Verify horizontal dropdown menu appear
        And I Click On Due Date Icon
        Then I Verify Due Date CheckBox is clickable

    Scenario: Verify that click on the "Due date" shows the drop down menu in the filter options.
        Given I logged into the FIXPDQ app
        Then I Click On SwarmOverView Button
        And I Click On Filter Button
        Then I Verify horizontal dropdown menu appear
        And I Click On Due Date Icon
        Then I Verify DueDate Popup Shown

    Scenario: "Verify that user can select work priority by clicking on check boxes in dropdown menu of ''Work Item Priority''.
        Given I logged into the FIXPDQ app
        Then I Click On SwarmOverView Button
        And I Click On Filter Button
        Then I Verify horizontal dropdown menu appear
        Then I Click On Work On Priority Icon
        And I Verify Work On Priority Popup Shown
        Then I Checked On Work On Priority CheckBox

    Scenario: Verify that all action icons are visible in ''View Actions'' drop down.
        Given I logged into the FIXPDQ app
        Then I Click On SwarmOverView Button
        And I Click On Filter Button
        And I Click On View Action Icon
        Then I Verify Popup menu appear
        And I Verify all View Actions Icons are Visible

    Scenario:  Verify that user is able to select and unselect all actions by clicking on ''Select All''and "Unselect All"
        Given I logged into the FIXPDQ app
        Then I Click On SwarmOverView Button
        And I Click On Filter Button
        Then I Verify horizontal dropdown menu appear
        And I Click On View Action Icon
        Then I Verify Select All view Action Button
        And I Click On View Action CheckBox
        Then I Verify UnSelect All view Action Button

    Scenario:  Verify that workspace option is clickable.
        Given I logged into the FIXPDQ app
        Then I Click On SwarmOverView Button
        And I Click On SideBar Workspace Option
















