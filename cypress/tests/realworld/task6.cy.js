
import { onHomePage } from "./page_objects/home.cy";
import { onSigninPage } from "./page_objects/signIn.cy";
import { onMinePage } from "./page_objects/mine.cy";


const username = Cypress.env('username');
const password = Cypress.env('password');

context('Validate single transaction test suit', () => {
     
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

    it('Validate transaction', () => { 
       
      onSigninPage.checkSigninTitle()
      onSigninPage.getUsername().type(username, { force: true })
      onSigninPage.getPassword().type(password, { force: true })
      onSigninPage.getSignInButton().click()
      onHomePage.getToMine().click()
      onMinePage.checkMinePath()
      onMinePage.checkTitle()
      onMinePage.checkPaidTransaction(0, 100, 'Payment for Kristian Bradtke')
    })

})