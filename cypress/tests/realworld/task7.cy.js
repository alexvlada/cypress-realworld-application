import { onHomePage } from "./page_objects/home.cy";
import { onSigninPage } from "./page_objects/signIn.cy";
import { onMinePage } from "./page_objects/mine.cy";
import { onTransactionPage } from "./page_objects/transaction.cy";

const username = Cypress.env('username');
const password = Cypress.env('password');

const paymentData = {
  "payments": [
    {
      "index": 2,
      "friendName": 'Darrel Ortiz',
      "paymentAmount": 200,
      "paymentNote": "Payment for Darrel Ortiz"
    },
    {
      "index": 1,
      "friendName": 'Lia Rosenbaum',
      "paymentAmount": 300,
      "paymentNote": "Payment for Lia Rosenbaum"
    },
    {
      "index": 0,
      "friendName": 'Ted Parisian',
      "paymentAmount": 400,
      "paymentNote": "Payment for Ted Parisian" 
    }
  ]
}

context('Multiply payment transactions test suit', () => {
     
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

    it('Create multiply payment transactions', () => { 
       
      onSigninPage.checkSigninTitle()
      onSigninPage.getUsername().type(username, { force: true })
      onSigninPage.getPassword().type(password, { force: true })
      onSigninPage.getSignInButton().click()
      onHomePage.getToHome().click()

      onHomePage.getToMine().click()
      cy.wait(1000)
      onMinePage.checkMinePath()
      onMinePage.checkTitle()
      cy.wait(1000)

      cy.get('body').then($body => {
        if ($body.find("selector:contains('Create Another Transaction')").length > 0) {
          onTransactionPage.getCreateAnotherTransactionButton().click()
        } else {
          onTransactionPage.getNewButton().click()
        }
      });

      paymentData.payments.forEach(payment => { 
        onTransactionPage.checkTransactionPath()
        onTransactionPage.getSearchField().type(payment.friendName, { force: true })
        onTransactionPage.getUserIcon().eq(0).click()
        onTransactionPage.getAmount().type(payment.paymentAmount, { force: true })
        onTransactionPage.getDescription().type(payment.paymentNote, { force: true })
        onTransactionPage.getPayButton().click()
        onTransactionPage.getCreateAnotherTransactionButton().click()  
      });

    })

    it('Validate multiply payment transactions', () => { 
       
      onSigninPage.checkSigninTitle()
      onSigninPage.getUsername().type(username, { force: true })
      onSigninPage.getPassword().type(password, { force: true })
      onSigninPage.getSignInButton().click()
      onHomePage.getToHome().click()

      onHomePage.getToMine().click()
      cy.wait(1000)
      onMinePage.checkMinePath()
      onMinePage.checkTitle()
      cy.wait(1000)

      paymentData.payments.forEach(payment => { 
        onMinePage.checkPaidTransaction(payment.index, payment.paymentAmount, payment.paymentNote)
      });

    })

    it('Set slider values', () => { 
       
      onSigninPage.checkSigninTitle()
      onSigninPage.getUsername().type(username, { force: true })
      onSigninPage.getPassword().type(password, { force: true })
      onSigninPage.getSignInButton().click()
      onHomePage.getToHome().click()

      onHomePage.getToMine().click()
      cy.wait(1000)
      onMinePage.checkMinePath()
      onMinePage.checkTitle()
      cy.wait(1000)

      cy.get('.MuiChip-deleteIcon').eq(1).click({ force: true });

      function dragSliderToValue(sliderSelector, thumbIndex, value, totalRange = 1000) {
        cy.get(sliderSelector).then(($slider) => {
          const sliderWidth = $slider.width();
          const valuePercentage = value / totalRange;
          const dragPositionX = sliderWidth * valuePercentage;

          cy.wrap($slider)
            .find('.MuiSlider-thumb')
            .eq(thumbIndex)
            .trigger('mousedown', { which: 1, force: true })
            .trigger('mousemove', { clientX: dragPositionX, force: true })
            .trigger('mouseup', { force: true });
        });
      }

      dragSliderToValue('[data-test="transaction-list-filter-amount-range-slider"]', 1, 4060);

      onMinePage.checkAmountRange(100,400)
      
    })

    it('Set slider values by command', () => { 
       
      onSigninPage.checkSigninTitle()
      onSigninPage.getUsername().type(username, { force: true })
      onSigninPage.getPassword().type(password, { force: true })
      onSigninPage.getSignInButton().click()
      onHomePage.getToHome().click()

      onHomePage.getToMine().click()
      cy.wait(1000)
      onMinePage.checkMinePath()
      onMinePage.checkTitle()
      cy.wait(1000)

      cy.setTransactionAmountRange(100,400)
      onMinePage.checkAmountRange(100,400)
      
    })

})