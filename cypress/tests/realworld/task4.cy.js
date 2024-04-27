import { onCreatebankaccountPage } from "./page_objects/createBankAccount.cy";
import { onHomePage } from "./page_objects/home.cy";
import { onSigninPage } from "./page_objects/signIn.cy";
import { onBankAccountsPage } from "./page_objects/bankAccounts.cy";

const username = Cypress.env('username');
const password = Cypress.env('password');

function generateBankAccountDataSet1() {
  return {
    bankName: 'Test Bank 2',
    routingNumber: '110000000', 
    accountNumber: '000123456789' 
  };
}

context('Bank account test suit', () => {
     
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

    it('Bank account registration - mandatory entries', () => { 
       
      onSigninPage.checkSigninTitle()
      onSigninPage.getUsername().type(username, { force: true })
      onSigninPage.getPassword().type(password, { force: true })
      onSigninPage.getSignInButton().click()

      onHomePage.getToBankAccountsData().click()
      cy.wait(1000)
      onBankAccountsPage.checkBankAccountsPath()
      onBankAccountsPage.checkTitle()

      onBankAccountsPage.getCreateButton().click()
      cy.wait(1000)

      onCreatebankaccountPage.checkCreateNewBankAccountsPath()
      onCreatebankaccountPage.checkTitle()
      onCreatebankaccountPage.getSaveButton().click().click()
      onCreatebankaccountPage.checkSaveButtonStatus(0)
      onCreatebankaccountPage.checkCreateAccountHelperText('bankname',0)
      onCreatebankaccountPage.getBankName().type(generateBankAccountDataSet1().bankName, { force: true })
      onCreatebankaccountPage.getRoutingNumber().click()
      onCreatebankaccountPage.getAccountNumber().click()
      onCreatebankaccountPage.checkCreateAccountHelperText('routingnumber',0)
      onCreatebankaccountPage.getRoutingNumber().type(generateBankAccountDataSet1().routingNumber, { force: true })
      onCreatebankaccountPage.checkCreateAccountHelperText('accountnumber',0)
      onCreatebankaccountPage.getAccountNumber().type(generateBankAccountDataSet1().accountNumber, { force: true }) 
      onCreatebankaccountPage.checkCreateAccountHelperText('bankname',1)   
      onCreatebankaccountPage.checkCreateAccountHelperText('routingnumber',1)
      onCreatebankaccountPage.checkCreateAccountHelperText('accountnumber',1)
      onCreatebankaccountPage.checkSaveButtonStatus(1) 
    })

    it('Bank account registration - short Bank name', () => { 
       
      onSigninPage.checkSigninTitle()
      onSigninPage.getUsername().type(username, { force: true })
      onSigninPage.getPassword().type(password, { force: true })
      onSigninPage.getSignInButton().click()

      onHomePage.getToBankAccountsData().click()
      cy.wait(1000)
      onBankAccountsPage.checkBankAccountsPath()
      onBankAccountsPage.checkTitle()

      onBankAccountsPage.getCreateButton().click()
      cy.wait(1000)

      onCreatebankaccountPage.checkCreateNewBankAccountsPath()
      onCreatebankaccountPage.checkTitle()
      onCreatebankaccountPage.getBankName().type('xyz', { force: true })
      onCreatebankaccountPage.checkCreateAccountHelperText('shortbankname',0)
      onCreatebankaccountPage.getBankName().clear().type(generateBankAccountDataSet1().bankName, { force: true })
      onCreatebankaccountPage.checkCreateAccountHelperText('shortbankname',1)
    })

    it('Bank account registration - invalid routing number', () => { 
       
      onSigninPage.checkSigninTitle()
      onSigninPage.getUsername().type(username, { force: true })
      onSigninPage.getPassword().type(password, { force: true })
      onSigninPage.getSignInButton().click()

      onHomePage.getToBankAccountsData().click()
      cy.wait(1000)
      onBankAccountsPage.checkBankAccountsPath()
      onBankAccountsPage.checkTitle()

      onBankAccountsPage.getCreateButton().click()
      cy.wait(1000)

      onCreatebankaccountPage.checkCreateNewBankAccountsPath()
      onCreatebankaccountPage.checkTitle()
      onCreatebankaccountPage.getBankName().type(generateBankAccountDataSet1().bankName, { force: true })
      onCreatebankaccountPage.getRoutingNumber().type('xyz', { force: true })
      onCreatebankaccountPage.checkCreateAccountHelperText('invalidroutingnumber',0)
      onCreatebankaccountPage.getRoutingNumber().clear().type(generateBankAccountDataSet1().routingNumber, { force: true })
      onCreatebankaccountPage.checkCreateAccountHelperText('invalidroutingnumber',1)
    })

    it('Bank account registration - short account number', () => { 
       
      onSigninPage.checkSigninTitle()
      onSigninPage.getUsername().type(username, { force: true })
      onSigninPage.getPassword().type(password, { force: true })
      onSigninPage.getSignInButton().click()

      onHomePage.getToBankAccountsData().click()
      cy.wait(1000)
      onBankAccountsPage.checkBankAccountsPath()
      onBankAccountsPage.checkTitle()

      onBankAccountsPage.getCreateButton().click()
      cy.wait(1000)

      onCreatebankaccountPage.checkCreateNewBankAccountsPath()
      onCreatebankaccountPage.checkTitle()
      onCreatebankaccountPage.getBankName().type(generateBankAccountDataSet1().bankName, { force: true })
      onCreatebankaccountPage.getRoutingNumber().type(generateBankAccountDataSet1().routingNumber, { force: true })
      onCreatebankaccountPage.getAccountNumber().type('000', { force: true })
      onCreatebankaccountPage.checkCreateAccountHelperText('shortaccountnumber',0)
      onCreatebankaccountPage.getAccountNumber().clear().type(generateBankAccountDataSet1().accountNumber, { force: true })
      onCreatebankaccountPage.checkCreateAccountHelperText('shortaccountnumber',1)
    })

    it('Bank account registration - account number too long', () => { 
       
      onSigninPage.checkSigninTitle()
      onSigninPage.getUsername().type(username, { force: true })
      onSigninPage.getPassword().type(password, { force: true })
      onSigninPage.getSignInButton().click()

      onHomePage.getToBankAccountsData().click()
      cy.wait(1000)
      onBankAccountsPage.checkBankAccountsPath()
      onBankAccountsPage.checkTitle()

      onBankAccountsPage.getCreateButton().click()
      cy.wait(1000)

      onCreatebankaccountPage.checkCreateNewBankAccountsPath()
      onCreatebankaccountPage.checkTitle()
      onCreatebankaccountPage.getBankName().type(generateBankAccountDataSet1().bankName, { force: true })
      onCreatebankaccountPage.getRoutingNumber().type(generateBankAccountDataSet1().routingNumber, { force: true })
      onCreatebankaccountPage.getAccountNumber().type('00000000000000000000', { force: true })
      onCreatebankaccountPage.checkCreateAccountHelperText('accountnumbertoolong',0)
      onCreatebankaccountPage.getAccountNumber().clear().type(generateBankAccountDataSet1().accountNumber, { force: true })
      onCreatebankaccountPage.checkCreateAccountHelperText('accountnumbertoolong',1)
    })


    it('Successful bank account registration', () => { 
       
      onSigninPage.checkSigninTitle()
      onSigninPage.getUsername().type(username, { force: true })
      onSigninPage.getPassword().type(password, { force: true })
      onSigninPage.getSignInButton().click()

      onHomePage.getToBankAccountsData().click()
      cy.wait(1000)
      onBankAccountsPage.checkBankAccountsPath()
      onBankAccountsPage.checkTitle()

      onBankAccountsPage.getCreateButton().click()
      cy.wait(1000)

      onCreatebankaccountPage.checkCreateNewBankAccountsPath()
      onCreatebankaccountPage.checkTitle()
      onCreatebankaccountPage.getBankName().type(generateBankAccountDataSet1().bankName, { force: true })
      onCreatebankaccountPage.getRoutingNumber().type(generateBankAccountDataSet1().routingNumber, { force: true })
      onCreatebankaccountPage.getAccountNumber().type(generateBankAccountDataSet1().accountNumber, { force: true })
      onCreatebankaccountPage.getSaveButton().click()
      onBankAccountsPage.checkAccount('Test Bank')
      onBankAccountsPage.checkAccount('Test Bank 2')
    })

})