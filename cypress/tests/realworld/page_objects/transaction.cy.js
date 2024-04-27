export class TransactionPage {

    checkTransactionPath() {
        cy.location("pathname").should("equal", "/transaction/new")
    }

    getSearchField() {
        return cy.get('#user-list-search-input')
    }

    getUserIcon() {
        return cy.get('img[class="MuiAvatar-img"]')
    }

    getAmount() {
        return cy.get('#amount')
    }

    getDescription() {
        return cy.get('#transaction-create-description-input') 
    }

    getCreateTransactionButton() {
        return cy.contains('Create A Transaction')
    }

    getPayButton() {
        return cy.get('button[data-test="transaction-create-submit-payment"]')
    }

    checkCompleteTransaction(description) {
        cy.get('h2[class="MuiTypography-root MuiTypography-h6 MuiTypography-colorPrimary MuiTypography-gutterBottom"]').should('contain.text',description)
    }

    getRegurnToTransactionButton() {
        return cy.contains('Return To Transactions')
    }

    getCreateAnotherTransactionButton() {
        return cy.contains('Create Another Transaction')
    }
    

    getNewButton() {
        return cy.get('span[class="MuiButton-label"]').contains('New')        
    }

    getPaymentAmountSuccess() {
        cy.getBySel("alert-bar-success").should('be.visible')
    }

}    

export const onTransactionPage = new TransactionPage()