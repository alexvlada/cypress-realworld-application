import { onGetstartedpopupPage } from "./page_objects/getStartedPopup.cy";
import { onSigninPage } from "./page_objects/signIn.cy";

const username = Cypress.env('username');
const password = Cypress.env('password');

context('Login to account test suit', () => {
     
    before(() => 
    {
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

    it('Login to account - wrong credentials', () => { 

      onSigninPage.checkSigninTitle()
      onSigninPage.getUsername().type('wrong_username', { force: true })
      onSigninPage.getPassword().type('wrong_password', { force: true })
      onSigninPage.checkRememberMeFalse()
      onSigninPage.getSignInButton().click()
      onSigninPage.getWrongCredentialsAlert()
    })

    it('Login to account - mandatory entries', () => { 
      
      onSigninPage.getSignInButton().click()
      onSigninPage.checkSigninTitle()
      onSigninPage.checkSignInButtonStatus(0)
      onSigninPage.getUsername().click()
      onSigninPage.checkSigninHelperText(0)
      onSigninPage.getUsername().type(username, { force: true })
      onSigninPage.checkSigninHelperText(1)
      onSigninPage.checkSignInButtonStatus(0)
      onSigninPage.getPassword().type(password, { force: true })
      onSigninPage.checkSignInButtonStatus(1)
    })

    it('Successful login to account', () => { 

      onSigninPage.checkSigninTitle()
      onSigninPage.getUsername().type(username, { force: true })
      onSigninPage.getPassword().type(password, { force: true })
      onSigninPage.checkRememberMeFalse()
      onSigninPage.getSignInButton().click()
      onGetstartedpopupPage.checkPopupTitle()
  })


})