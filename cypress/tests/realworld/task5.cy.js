
import { onHomePage } from "./page_objects/home.cy";
import { onSigninPage } from "./page_objects/signIn.cy";
import { onFriendsPage } from "./page_objects/friends.cy";
import { onTransactionPage } from "./page_objects/transaction.cy";

const username = Cypress.env('username');
const password = Cypress.env('password');

context('Create single transaction test suit', () => {
     
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

    it('Create new transaction', () => { 
       
      onSigninPage.checkSigninTitle()
      onSigninPage.getUsername().type(username, { force: true })
      onSigninPage.getPassword().type(password, { force: true })
      onSigninPage.getSignInButton().click()

      onHomePage.getToHome().click()
      cy.wait(1000)

      onHomePage.getToFriends().click()
      cy.wait(1000)

      onFriendsPage.checkFriensPath()
      onFriendsPage.checkTitle()      
      onTransactionPage.getCreateTransactionButton().click()
      cy.wait(1000)      
      onTransactionPage.checkTransactionPath()
      onTransactionPage.getSearchField().type('Kristian Bradtke', { force: true })
      onTransactionPage.getUserIcon().eq(0).click()
      onTransactionPage.getAmount().type(100, { force: true })
      onTransactionPage.getDescription().type('Payment for Kristian Bradtke', { force: true })
      onTransactionPage.getPayButton().click()
      onTransactionPage.getPaymentAmountSuccess()
      onTransactionPage.checkCompleteTransaction('Paid $100.00 for Payment for Kristian Bradtke')
      onTransactionPage.getRegurnToTransactionButton().click()
    })

})