export class SignupPage {

    checkSignupTitle() {
        cy.get('h1[data-test="signup-title"]').should('contain.text', 'Sign Up')
    }

    checkSignupHelperText(parameter,exists) {

        if (parameter == 'firstname')
          {
            if (exists == 0)
              {
                cy.get('#firstName-helper-text').should('be.visible').should('have.text', 'First Name is required')
              }
            else
              {
                cy.get('#firstName-helper-text').should('not.exist')
              }    
          }
        else if (parameter == 'lastname')
          {
            if (exists == 0)
                {           
                    cy.get('#lastName-helper-text').should('be.visible').should('have.text', 'Last Name is required')
                } 
            else   
                {           
                    cy.get('#lastName-helper-text').should('not.exist')
                }
          }
        else if (parameter == 'username')
          {
            if (exists == 0)
                {       
                    cy.get('#username-helper-text').should('be.visible').should('have.text', 'Username is required')
                } 
            else
                {       
                    cy.get('#username-helper-text').should('not.exist')
                }     
          }
        else if (parameter == 'password')
          {
            if (exists == 0)
                {
                    cy.get('#password-helper-text').should('be.visible').should('have.text', 'Enter your password');
                }
            else
                {
                    cy.get('#password-helper-text').should('not.exist')
                }    
          }  
        else if (parameter == 'confirmpassword')
          {
            if (exists == 0)
                {
                   cy.get('#confirmPassword-helper-text').should('be.visible').should('have.text', 'Confirm your password');
                }
            else 
                {
                    cy.get('#confirmPassword-helper-text').should('not.exist')
                }      
          }  
        else if (parameter == 'shortpassword')
          {
            if (exists == 0)
                {
                   cy.get('#password-helper-text').should('be.visible').should('have.text', 'Password must contain at least 4 characters');
                }
            else 
                {
                    cy.get('#password-helper-text').should('not.exist')
                }      
          }  
        else if (parameter == 'passwordmismatching')
          {
            if (exists == 0)
                {
                   cy.get('#confirmPassword-helper-text').should('be.visible').should('have.text', 'Password does not match');
                }
            else 
                {
                    cy.get('#confirmPassword-helper-text').should('not.exist')
                }      
          }     
        
    }

    getFirstname() {
        return cy.get('#firstName')   
    }

    getLastname() {
        return cy.get('#lastName')   
    }

    getUsername() {
        return cy.get('#username')   
    }

    getPassword() {
        return cy.get('#password')   
    }

    getConfirmPassword() {
        return cy.get('#confirmPassword')   
    }

    getSignUpButton() {
        return cy.get('span[class="MuiButton-label"]') 
    }

    checkSignUpButtonStatus(enabled) {
        let status
        
        if (enabled == 0)  
           {
              status = 'be.disabled'
           }
        else
           {
              status = 'be.enabled'
           }

           cy.get('button[data-test="signup-submit"]').eq(0).should(status)   
    }

}    
export const onSignupPage = new SignupPage()