export class BankAccountsPage {

    checkBankAccountsPath() {
        cy.location("pathname").should("equal", "/bankaccounts")
    }
    
    checkTitle() {
        return cy.get('h2[class="MuiTypography-root MuiTypography-h6 MuiTypography-colorPrimary MuiTypography-gutterBottom"]').should('be.visible').should('contain.text', 'Bank Accounts')
    }

    getCreateButton() {
        return cy.contains('Create')
    }

    checkAccount(bank) {
        cy.get('p[class="MuiTypography-root MuiTypography-body1 MuiTypography-colorPrimary MuiTypography-gutterBottom"]').should('contain',bank)
    }

}    
export const onBankAccountsPage = new BankAccountsPage()