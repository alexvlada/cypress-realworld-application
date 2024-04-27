export class HomePage {

    checkPopupTitle() {
        cy.get('svg[class="makeStyles-logo-26"]').should('be.visible')
    }

    getToHome() {
        return cy.contains('Home')
    }

    getToMine() {
        return cy.contains('Mine')
    }

    getToFriends() {
        return cy.contains('Friends')
    }

    Friends

    getToAccountData() {
        return cy.contains('My Account')
    }

    getToBankAccountsData() {
        return cy.contains('Bank Accounts')
    }

    getDoneButton() {
        return cy.get('button[data-test="user-onboarding-next"]')
    }

    getRootSubtitle1() {
        return cy.get('h6[data-test="sidenav-user-full-name"]')
    }

    getRootSubtitle2() {
        return cy.get('h6[data-test="sidenav-username"]')
    }

}    
export const onHomePage = new HomePage()