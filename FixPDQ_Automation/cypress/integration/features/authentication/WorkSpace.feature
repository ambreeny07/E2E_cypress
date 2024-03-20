Feature: WorkSpace
  Scenario: As a user I Verify that by clicking on Workspace, redirects to the correct page.
    Given I logged into the FIXPDQ app
    When I click on Work Space Button
    Then I verify work space page is visible

  Scenario: As a user I Verify that Search field is visible on top right corner of the workspace page.
    Given I logged into the FIXPDQ app
    When I click on Work Space Button
    Then I click on Work Space Button
    And I verify search field is visible

  Scenario: As a user I Verify that Filter bar is visible under the navigation links on workspace page.
    Given I logged into the FIXPDQ app
    When I click on Work Space Button
    Then I click on Work Space Button
    And I verify filter bar is visible
    Then I verify owner button in filter bar is visible
    And I verify creator button in filter bar is visible
    Then I verify priority buttons in filter bar is visible
    And I verify create date in filter bar is visible
