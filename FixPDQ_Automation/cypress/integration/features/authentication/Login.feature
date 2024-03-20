Feature: Login
  Scenario: Verify that if user enter wrong password then the validation error message should be visible
    Given  I am on FIXPDQ page
    When I enter a valid email
    Then I enter a invalid password
    And I click on login button
    Then I Validating Error Message

  Scenario: Verify that error message is showing when the user enters invalid email and valid password
    Given  I am on FIXPDQ page
    When I enter a invalid email
    Then I enter a valid password
    And I click on login button
    Then I Validating Error Message

  Scenario: Verify that error message is showing when the user enters invalid credentials
    Given  I am on FIXPDQ page
    When I enter a invalid email
    Then I enter a invalid password
    And I click on login button
    Then I Validating Error Message

  Scenario: Verify that validation message is showing when the user clicks Login without entering the email and password
    Given  I am on FIXPDQ page
    And I click on login button
    Then I Validating Error Message

  Scenario: Verify that there should be visible the two fields which are mandatory and the fields are Email and Password
    Given  I am on FIXPDQ page
    When I enter a valid email
    Then I enter a valid password
    And I click on login button
    
  Scenario: Verify that if user enter the valid email and password then it should logged In successfully 
    Given  I am on FIXPDQ page
    When I enter a valid email
    Then I enter a valid password
    And I click on login button
    And I Validate Profile Button On Home Screen

  Scenario: Verify that the data in password field is visible as bullet signs.
    Given  I am on FIXPDQ page
    When I enter a valid email
    Then I enter a valid password
    And I check password visible as bullet sign

  Scenario: Verify that the email placeholder should be like: "example@mail.com"
    Given  I am on FIXPDQ page
    Then I Verify Email PlaceHolder In Login Page

    Scenario: Verify that Placeholder text is visible in "Password" filed In Login.
    Given  I am on FIXPDQ page
    Then I Verify Password PlaceHolder In Login Page

    Scenario: Verify that if user enter email without ".com" and "@" then the validation error should be visible
    Given  I am on FIXPDQ page
    When I enter a invalid email
    Then I enter a invalid password
    And I click on login button
    Then I Validating Error Message

    Scenario: Verify that the Login button should be visible and clickable
    Given  I am on FIXPDQ page
    When I enter a valid email
    Then I enter a valid password
    And I Verify that login button is visible
    And I click on login button
    
    Scenario: Verify that when user press the login button then user's dashboard opened 
    Given  I am on FIXPDQ page
    When I enter a valid email
    Then I enter a valid password
    And I Verify that login button is visible
    And I click on login button
    And I Validate Profile Button On Home Screen
