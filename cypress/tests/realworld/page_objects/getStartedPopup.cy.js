export class GetstartedpopupPage {

    checkPopupTitle() {
        cy.get('h2[class="MuiTypography-root MuiTypography-h6"]').should('be.visible').should('contain.text', 'Get Started with Real World App')
    }

    getNextButton() {
        return cy.get('button[data-test="user-onboarding-next"]')
    }

}    
export const onGetstartedpopupPage = new GetstartedpopupPage()