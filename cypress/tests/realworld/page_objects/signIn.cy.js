export class SigninPage {

    checkSigninTitle() {
        cy.get('h1[class="MuiTypography-root MuiTypography-h5"]').should('be.visible').should('contain.text', 'Sign in');

    }

    checkSigninPath() {
        cy.location("pathname").should("equal", "/signin")
    }
      
    getSignupLink () {
        return cy.get('a[data-test="signup"]')
    }


    getUsername() {
        return cy.get('#username')   
    }

    getPassword() {
        return cy.get('#password')   
    }

    checkRememberMeFalse() {
        cy.get('input[name="remember"]').should('not.be.checked')
    }
      
    getSignInButton() {
        return cy.get('span[class="MuiButton-label"]') 
    }

    getWrongCredentialsAlert() {
        return cy.get('.MuiAlert-message').should('contain.text', 'Username or password is invalid');
    } 
     
    checkSignInButtonStatus(enabled) {
        let status
        
        if (enabled == 0)  
           {
              status = 'be.disabled'
           }
        else
           {
              status = 'be.enabled'
           }

           cy.get('button[data-test="signin-submit"]').should(status)   
    }

    checkSigninHelperText(exists) {
        if (exists == 0)
            {
                cy.get('#username-helper-text').should('be.visible').should('have.text', 'Username is required')
            }
        else
            {
                cy.get('#username-helper-text').should('not.exist')
            }  
    }

}    
export const onSigninPage = new SigninPage()