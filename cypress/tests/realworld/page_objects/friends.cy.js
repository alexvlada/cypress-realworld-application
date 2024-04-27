export class FriendsPage {

    checkFriensPath() {
        cy.location("pathname").should("equal", "/contacts")
    }
    
    checkTitle() {
        return cy.get('div[class="MuiListSubheader-root MuiListSubheader-sticky MuiListSubheader-gutters"]').should('be.visible').should('contain.text', 'Contacts')
                                   
    }

}    
export const onFriendsPage = new FriendsPage()