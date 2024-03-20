Feature: MyProfile

   Scenario: Verify that Clicking on My Profile shows sub selection options i.e User Name, Setting and Log Out.
      Given I logged into the FIXPDQ app
      Then I Clicking On Profile Button
      And I Verify Profile Page
      Then I Verifying MyProfile NickName SubOptions
      And I Verifying MyProfile FirstName SubOptions
      Then I Verifying MyProfile LastName SubOptions
      And I Verifying MyProfile City SubOptions
      Then I Verifying MyProfile Notifications SubOptions
      And I Verifying MyProfile Email Notifications SubOptions
      Then I Verifying MyProfile SMS Notifications SubOptions
      