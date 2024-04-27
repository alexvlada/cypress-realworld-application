import { onSigninPage } from "./page_objects/signIn.cy";
import { onSignupPage } from "./page_objects/signUp.cy";

const firstname = 'Fizicko'
const lastname = 'Lice'
const username = Cypress.env('username')//firstname + lastname + randomNumber
const password = Cypress.env('password')//'Getitnow2024!'

context('Create account test suit', () => {
     
    before(() => {
      Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false;
      });
    }) 
  
    beforeEach(() => {
      cy.visit('/signin')
    })

    afterEach(() => {
     
    })

    it('Create account - mandatory entries', () => { 
          
      onSigninPage.getSignupLink().click()
      onSignupPage.checkSignupTitle()
      onSignupPage.getFirstname().click()
      onSignupPage.getLastname().click()
      onSignupPage.getUsername().click()
      onSignupPage.getPassword().click()
      onSignupPage.getConfirmPassword().click()
      onSignupPage.getFirstname().click()
      onSignupPage.checkSignUpButtonStatus(0)
     
      onSignupPage.checkSignupHelperText('firstname',0)
      onSignupPage.checkSignupHelperText('lastname',0)
      onSignupPage.checkSignupHelperText('username',0)
      onSignupPage.checkSignupHelperText('password',0)
      onSignupPage.checkSignupHelperText('confirmpassword',0)
      
      onSignupPage.getFirstname().type(firstname, { force: true })
      onSignupPage.getLastname().type(lastname, { force: true })
      onSignupPage.getUsername().type(username, { force: true })
      onSignupPage.getPassword().type(password, { force: true })
      onSignupPage.getConfirmPassword().type(password, { force: true })

      onSignupPage.checkSignupHelperText('firstname',1)
      onSignupPage.checkSignupHelperText('lastname',1)
      onSignupPage.checkSignupHelperText('username',1)
      onSignupPage.checkSignupHelperText('password',1)
      onSignupPage.checkSignupHelperText('confirmpassword',1)

      onSignupPage.checkSignUpButtonStatus(1)
    })

    it('Create account - short password', () => { 
          
      onSigninPage.getSignupLink().click()
      onSignupPage.checkSignupTitle()

      onSignupPage.getFirstname().type(firstname, { force: true })
      onSignupPage.getLastname().type(lastname, { force: true })
      onSignupPage.getUsername().type(username, { force: true })
      onSignupPage.getPassword().type('xyz', { force: true })
      onSignupPage.checkSignUpButtonStatus(0)
      onSignupPage.checkSignupHelperText('shortpassword',0)
    })

    it('Create account - password confirmation mismatching', () => { 
          
      onSigninPage.getSignupLink().click()
      onSignupPage.checkSignupTitle()

      onSignupPage.getFirstname().type(firstname, { force: true })
      onSignupPage.getLastname().type(lastname, { force: true })
      onSignupPage.getUsername().type(username, { force: true })
      onSignupPage.getPassword().type(password, { force: true })
      onSignupPage.getConfirmPassword().type('xyz', { force: true })
      onSignupPage.checkSignUpButtonStatus(0)
      onSignupPage.checkSignupHelperText('passwordmismatching',0)

    })

    it('Create account - successful registration', () => { 
      
      onSigninPage.getSignupLink().click()
      onSignupPage.checkSignupTitle()
      onSignupPage.getFirstname().type(firstname, { force: true })
      onSignupPage.getLastname().type(lastname, { force: true })
      onSignupPage.getUsername().type(username, { force: true })
      onSignupPage.getPassword().type(password, { force: true })
      onSignupPage.getConfirmPassword().type(password, { force: true })
      onSignupPage.getSignUpButton().click()
      cy.wait(1000)
      onSigninPage.checkSigninPath()
      onSigninPage.checkSigninTitle()
     
    })

})