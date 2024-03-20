const auth = require('../pages/Authentication.json');

var RegisterEmail ="ambreensqa" + Math.floor((Math.random() * 10000))+"@getnada.com";

Then('I click On SignUp On Login Page', () => {
  cy.get(auth.LoginScreen_SignUp).should('be.visible').click();
});

And('I Verify Register Page',()=>{
  cy.get(auth.Register_Button).should('be.visible')  
});

Then('I Verify SignUp Screen Logo is Visible', () => {
  cy.get(auth.Register_FixPDQ_logo).should('be.visible')
})

Then('I Enter Invalid Password',()=>{
  cy.fixture('Common.json').then(common=>{
    cy.get(auth.Register_Password).should('be.visible').type(common.RegisterInValidPassword)
  })  
});

And('I Enter valid Password',()=>{
  cy.fixture('Common.json').then(common=>{
    cy.get(auth.Register_Password).should('be.visible').type(common.ValidPassword)
  })  
});

And('I Click On Register Button',()=>{
  cy.get(auth.Register_Button).should('be.visible').click({force:true});
});

Then('I Register Already_Have_An_Account_Sign_In Button is Visible',()=>{
  cy.get(auth.Register_AlreadyHaveAnAccountSignIn).should('be.visible');
});

And('I Click On Register Already_Have_An_Account_Sign_In Button',()=>{
  cy.get(auth.Register_AlreadyHaveAnAccountSignIn).should('be.visible').click({force:true});
});

And('I Click On Register Button new',()=>{
  cy.get(auth.Register_Button).should('be.visible').click({force:true});  
   cy.get(auth.Register_Confirm_Code_Button,{timeout:2000}).then(element=>{
     if(element.is(':visible')){
     }else{      
      RegisterEmail ="ambreensqa" + Math.floor((Math.random() * 10000))+"@getnada.com";
      cy.get(auth.Register_Email).clear().should('be.visible').type(RegisterEmail);
      cy.get(auth.Register_Button).should('be.visible').click({force:true});
     }
   })
});

Then('I Verify that Register Button is Visible',()=>{
  cy.get(auth.Register_Button).should('be.visible');
});

Then('I Verify that Confirm Code Button is Visible',()=>{
  cy.get(auth.Register_Confirm_Code_Button).should('be.visible');
});

Then('I Validate Error Message',()=>{
  cy.get(auth.Register_Validation_Message).last().should('be.visible')
});

And('Validate Invalid_email_address_format Error Message is visible',()=>{
  cy.contains("Invalid email address format.").should('be.visible')
});

Then('I Enter Registered Email', () => {
  cy.fixture('Common.json').then(common=>{
    cy.get(auth.Register_Email).should('be.visible').type(common.ValidEmail);
  })
});

Then('I Enter Registered Valid Email', () => {
  cy.fixture('Common.json').then(common=>{
    cy.get(auth.Register_Email).should('be.visible').type(RegisterEmail);
  })
});

Then('I Enter Wrong Email SignUp', () => {
  cy.fixture('Common.json').then(common=>{
    cy.get(auth.Register_Email).should('be.visible').type(common.InValidEmail);
  })
});

Then('I Verify that Email text field is visible', () => {
  cy.fixture('Common.json').then(common=>{
    cy.get(auth.Register_Email).should('be.visible').clear();
  })
});

And('I Verify that Password text field is visible', () => {
  cy.fixture('Common.json').then(common=>{
    cy.get(auth.Register_Password).should('be.visible').clear();
  })
});

Then('I Enter InValid Email', () => {
  cy.fixture('Common.json').then(common=>{
    cy.get(auth.Register_Email).should('be.visible').type(common.InValidEmail);
  })
});

And('I Enter New Email', () => {
  const rndInt = Math.floor(Math.random() * 100) + 1;
  cy.get(auth.Register_Email).should('be.visible').type(rndInt+"ayounas.ai@gmail.com");
});

Then('I Verify Registeration Complete Confirmation Code', () => {
  cy.contains('Confirm Code').parent().should('be.visible')
});

Then('I check Registration password visible as bullet sign', () => {
  cy.get(auth.Register_Password).should('be.visible')
  cy.get(auth.Register_Password).should('have.attr','type',"password")
});

Then('I Verify Email PlaceHolder In SignUp Page', () => {
  cy.get(auth.Register_Email).should('be.visible')
  cy.get(auth.Register_Email).should('have.attr','placeholder',"example@mail.com")
});

Then('I Verify Password PlaceHolder In SignUp Page', () => {
  cy.get(auth.Register_Password).should('be.visible')
  cy.get(auth.Register_Password).should('have.attr','placeholder',"At least 8 charactors")
  cy.get(auth.Register_Password).should('have.attr','placeholder',"At least 8 charactors")
});

Then('I Verify that special characters is enterd in password text field',()=>{
  cy.get(auth.Register_Password).should('be.visible').type('@#')
})

And('I Verify that numeric value is enterd in password text field',()=>{
  cy.get(auth.Register_Password).should('be.visible').type('12') 
})

And('I Verify that uppercase letters is enterd in password text field',()=>{
  cy.get(auth.Register_Password).should('be.visible').type('PDQ')
})

Then('I Verify that lowercase letters is enterd in password text field',()=>{
  cy.get(auth.Register_Password).should('be.visible').type('pdq')
})