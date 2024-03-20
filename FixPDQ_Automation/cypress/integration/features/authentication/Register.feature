Feature: Register
  Scenario: Verify that there should be visible the Fixpdq logo in sign up screen
    Given  I am on FIXPDQ page
    Then I click On SignUp On Login Page
    And I Verify Register Page
    Then I Enter Invalid Password
    And I Click On Register Button
    Then I Verify SignUp Screen Logo is Visible

  Scenario: Verify that there should be visible the two fields which are Email and Password text field
    Given  I am on FIXPDQ page
    Then I click On SignUp On Login Page
    And I Verify Register Page
    Then I Enter Invalid Password
    And I Click On Register Button
    Then I Verify that Email text field is visible
    And I Verify that Password text field is visible

  Scenario: Verify that validation message is showing when the user clicks on register without entering the email field
    Given  I am on FIXPDQ page
    Then I click On SignUp On Login Page
    And I Verify Register Page
    Then I Enter Invalid Password
    And I Click On Register Button
    Then I Validate Error Message

  Scenario:  Verify that validation message is showing when the user clicks on register without entering the password field.
    Given  I am on FIXPDQ page
    Then I click On SignUp On Login Page
    And I Verify Register Page
    Then I Enter Registered Email
    And I Click On Register Button
    Then I Validate Error Message

  Scenario: Verify that validation message is showing when the user enters invalid email format.
    Given  I am on FIXPDQ page
    Then I click On SignUp On Login Page
    And I Verify Register Page
    Then I Enter InValid Email
    And I Enter valid Password
    And I Click On Register Button
    Then I Validate Error Message
  
    Scenario: Verify that password entered must be in bullets form.
    Given  I am on FIXPDQ page
    Then I click On SignUp On Login Page
    And I Verify Register Page
    Then I Enter Registered Email
    And I Enter valid Password
    Then I check Registration password visible as bullet sign

  Scenario: Verify that error message is showing when the user enters existing user name.
    Given  I am on FIXPDQ page
    Then I click On SignUp On Login Page
    And I Verify Register Page
    Then I Enter Registered Email
    And I Enter valid Password
    And I Click On Register Button
    Then I Validate Error Message

  Scenario: Verify that the validation massage display when user clicks on register without filling the form.
    Given  I am on FIXPDQ page
    Then I click On SignUp On Login Page
    And I Verify Register Page
    And I Click On Register Button
    Then I Validate Error Message

  Scenario: Verify that the password length must be at least 8 characters
    Given  I am on FIXPDQ page
    Then I click On SignUp On Login Page
    And I Verify Register Page
    And I Enter New Email
    Then I Enter Invalid Password
    And I Click On Register Button
    Then I Validate Error Message
    And I Enter valid Password
    And I Click On Register Button
    Then I Verify Registeration Complete Confirmation Code

  Scenario: Verify that Placeholder text is visible in "Email" filed In Register.
    Given  I am on FIXPDQ page
    Then I click On SignUp On Login Page
    And I Verify Register Page
    Then I Verify Email PlaceHolder In SignUp Page

  Scenario: Verify that Placeholder text is visible in "Password" filed In Register.
    Given  I am on FIXPDQ page
    Then I click On SignUp On Login Page
    And I Verify Register Page
    Then I Verify Password PlaceHolder In SignUp Page

  Scenario: Verify that in password field the password must taken at least one uppercase & lowercase letters and numeric character and special characters
    Given  I am on FIXPDQ page
    Then I click On SignUp On Login Page
    And I Verify Register Page
    Then I Verify Password PlaceHolder In SignUp Page
    And I Verify that uppercase letters is enterd in password text field
    Then I Verify that lowercase letters is enterd in password text field
    And I Verify that numeric value is enterd in password text field
    Then I Verify that special characters is enterd in password text field

  Scenario: Verify that there must be fields are mandatory
    Given  I am on FIXPDQ page
    Then I click On SignUp On Login Page
    And I Verify Register Page
    Then I Enter Registered Email
    And I Enter valid Password
    
  Scenario: Verify that there should be visible and clickable the Register button
    Given  I am on FIXPDQ page
    Then I click On SignUp On Login Page
    And I Verify Register Page
    Then I Enter Registered Valid Email
    And I Enter valid Password
    Then I Verify that Register Button is Visible
    And I Click On Register Button
    Then I Verify that Confirm Code Button is Visible

  Scenario: Verify that if email and password both are correct as per requirement then the user should be registered successfully
    Given  I am on FIXPDQ page
    Then I click On SignUp On Login Page
    And I Verify Register Page
    Then I Enter Registered Valid Email
    And I Enter valid Password
    Then I Verify that Register Button is Visible
    And I Click On Register Button new
    Then I Verify that Confirm Code Button is Visible

  Scenario: Verify that if user put wrong email then validation should visible on Email field in red color
    Given  I am on FIXPDQ page
    Then I click On SignUp On Login Page
    And I Verify Register Page
    Then I Enter Wrong Email SignUp
    And I Enter valid Password
    Then I Verify that Register Button is Visible
    And I Click On Register Button
    Then I Validate Error Message

  Scenario: Verify that there should be visible the Sign In link button in bottom of the sign up page like "Already have an account ? Sign In" and it is clickable 
    Given  I am on FIXPDQ page
    Then I click On SignUp On Login Page
    And I Verify Register Page
    Then I Register Already_Have_An_Account_Sign_In Button is Visible
    And I Click On Register Already_Have_An_Account_Sign_In Button

  Scenario: Verify that when user click on Sign In link button then user should move to Sign In page 
    Given  I am on FIXPDQ page
    Then I click On SignUp On Login Page
    And I Verify Register Page
    Then I Register Already_Have_An_Account_Sign_In Button is Visible
    And I Click On Register Already_Have_An_Account_Sign_In Button
    Then I Verify SignUp Screen Logo is Visible

 Scenario: Verify that error message is showing when the user enters existing email or username.
    Given  I am on FIXPDQ page
    Then I click On SignUp On Login Page
    And I Verify Register Page
    Then I Enter Registered Email
    And I Enter valid Password
    Then I Verify that Register Button is Visible
    And I Click On Register Button
    Then I Validate Error Message

 Scenario: Verify that validation message is showing when the user enters invalid email format.
    Given  I am on FIXPDQ page
    Then I click On SignUp On Login Page
    And I Verify Register Page
    Then I Enter InValid Email
    And I Enter valid Password
    Then I Verify that Register Button is Visible
    And I Click On Register Button
    Then I Validate Error Message