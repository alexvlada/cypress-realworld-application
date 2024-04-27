export class FinishedpopupPage {

    checkPopupTitle() {
        cy.get('h2[class="MuiTypography-root MuiTypography-h6"]').should('be.visible').should('contain.text', 'Finished')
    }

    getDoneButton() {
        return cy.get('button[data-test="user-onboarding-next"]')
    }

}    
export const onFinishedpopupPage = new FinishedpopupPage()