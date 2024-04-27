import { onCreatebankaccountPage } from "./page_objects/createBankAccount.cy";
import { onFinishedpopupPage } from "./page_objects/finishedPopup.cy";
import { onGetstartedpopupPage } from "./page_objects/getStartedPopup.cy";
import { onHomePage } from "./page_objects/home.cy";
import { onSigninPage } from "./page_objects/signIn.cy";
import { onMyAccountPage } from "./page_objects/myAccount.cy";

const username = Cypress.env('username');
const password = Cypress.env('password');

const subtitle1 = 'Fizicko L'
const subtitle2 = '@'+username

function generateBankAccountDataSet1() {
  return {
    bankName: 'Test Bank',
    routingNumber: '110000000', 
    accountNumber: '000123456789' 
  };
}

context('My account test suit', () => {
     
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

    it('Successful bank account registration', () => { 
       
      onSigninPage.checkSigninTitle()
      onSigninPage.getUsername().type(username, { force: true })
      onSigninPage.getPassword().type(password, { force: true })
      onSigninPage.getSignInButton().click()
      
      onGetstartedpopupPage.checkPopupTitle()
      onGetstartedpopupPage.getNextButton().click()
      onCreatebankaccountPage.checkPopupTitle()
      onCreatebankaccountPage.getBankName().type(generateBankAccountDataSet1().bankName, { force: true })
      onCreatebankaccountPage.getRoutingNumber().type(generateBankAccountDataSet1().routingNumber, { force: true })
      onCreatebankaccountPage.getAccountNumber().type(generateBankAccountDataSet1().accountNumber, { force: true })
      onCreatebankaccountPage.getSaveButton().click()
      onFinishedpopupPage.checkPopupTitle()
      onFinishedpopupPage.getDoneButton().click()
    })

    it('Validate account data', () => { 

      onSigninPage.checkSigninTitle()
      onSigninPage.getUsername().type(username, { force: true })
      onSigninPage.getPassword().type(password, { force: true })
      onSigninPage.getSignInButton().click()
      onHomePage.checkPopupTitle()
      onHomePage.getToAccountData().click()
      onHomePage.getRootSubtitle1().should('be.visible').should('contain.text', subtitle1)
      onHomePage.getRootSubtitle2().should('be.visible').should('contain.text', subtitle2)
      onMyAccountPage.checkTitle()
      
      onMyAccountPage.checkFirstName('Fizicko')
      onMyAccountPage.checkLastName('Lice')
      onMyAccountPage.checkEmail('')
      onMyAccountPage.checkPhoneNumber('')
    })

    it('Account data update', () => { 

      onSigninPage.checkSigninTitle()
      onSigninPage.getUsername().type(username, { force: true })
      onSigninPage.getPassword().type(password, { force: true })
      onSigninPage.getSignInButton().click()
  
      onHomePage.getToAccountData().click()      
      onMyAccountPage.getFirstName().clear().type('Fizicko updated', { force: true })
      onMyAccountPage.getLastName().clear().type('Lice updated ', { force: true })
      onMyAccountPage.getEmail().clear().type('fizickolice@gmail.com', { force: true })
      onMyAccountPage.getPhoneNumber().clear().type('123456789', { force: true })
      onMyAccountPage.getSaveButton().click()
  
    })

    it('Validate updated account data', () => { 

      onSigninPage.checkSigninTitle()
      onSigninPage.getUsername().type(username, { force: true })
      onSigninPage.getPassword().type(password, { force: true })
      onSigninPage.getSignInButton().click()
  
      onHomePage.getToAccountData().click()      
  
      onMyAccountPage.checkFirstName('Fizicko updated')
      onMyAccountPage.checkLastName('Lice updated')
      onMyAccountPage.checkEmail('fizickolice@gmail.com')
      onMyAccountPage.checkPhoneNumber('123456789')
      onHomePage.getRootSubtitle1().should('be.visible').should('contain.text', 'Fizicko updated L')
  
    })

})