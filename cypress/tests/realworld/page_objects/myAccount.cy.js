export class MyAccountPage {

    checkTitle() {
        return cy.get('h2[class="MuiTypography-root MuiTypography-h6 MuiTypography-colorPrimary MuiTypography-gutterBottom"]').should('be.visible').should('contain.text', 'User Settings')
    }

    checkFirstName(parameter) {
        cy.get('[data-test="user-settings-firstName-input"]').invoke('val').then((value) => {
            cy.wrap(value).should('be.equal', parameter)
        });    
    }
    
    checkLastName(parameter) {
        cy.get('[data-test="user-settings-lastName-input"]').invoke('val').then((value) => {
            cy.wrap(value).should('be.equal', parameter)
        });    
    }

    checkEmail(parameter) {
        cy.get('[data-test="user-settings-email-input"]').invoke('val').then((value) => {
            cy.wrap(value).should('be.equal', parameter)
        });    
    }

    checkPhoneNumber(parameter) {
        cy.get('[data-test="user-settings-phoneNumber-input"]').invoke('val').then((value) => {
            cy.wrap(value).should('be.equal', parameter)
        });    
    }


    getFirstName() {
        return cy.get('#user-settings-firstName-input')
    }

    getLastName() {
        return cy.get('#user-settings-lastName-input')
    }

    getEmail() {
        return cy.get('#user-settings-email-input')
    }

    getPhoneNumber() {
        return cy.get('#user-settings-phoneNumber-input')
    }

    getSaveButton() {
        return cy.get('button[data-test="user-settings-submit"]')
    }

}    
export const onMyAccountPage = new MyAccountPage()