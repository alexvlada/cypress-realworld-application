export class CreatebankaccountPage {

    checkPopupTitle() {
        cy.get('h2[class="MuiTypography-root MuiTypography-h6"]').should('be.visible').should('contain.text', 'Create Bank Account')
    }

    checkTitle() {
        cy.get('h2[class="MuiTypography-root MuiTypography-h6 MuiTypography-colorPrimary MuiTypography-gutterBottom"]').should('be.visible').should('contain.text', 'Create Bank Account')
    }

    checkCreateNewBankAccountsPath() {
        cy.location("pathname").should("equal", "/bankaccounts/new")
    }
    
    getBankName() {
        return cy.get('#bankaccount-bankName-input')
    } 

    getRoutingNumber() {
        return cy.get('#bankaccount-routingNumber-input')
    }

    getAccountNumber() {
        return cy.get('#bankaccount-accountNumber-input')
    }

    getSaveButton() {
        return cy.get('button[data-test="bankaccount-submit"]')
    }


    checkCreateAccountHelperText(parameter,exists) {

        if (parameter == 'bankname')
          {
            if (exists == 0)
              {
                cy.get('#bankaccount-bankName-input-helper-text').should('be.visible').should('have.text', 'Enter a bank name')
              }
            else
              {
                cy.get('#bankaccount-bankName-input-helper-text').should('not.exist')
              }    
          }
        else if (parameter == 'routingnumber')
          {
            if (exists == 0)
                {           
                    cy.get('#bankaccount-routingNumber-input-helper-text').should('be.visible').should('have.text', 'Enter a valid bank routing number')
                } 
            else   
                {           
                    cy.get('#bankaccount-routingNumber-input-helper-text').should('not.exist')
                }
          }
        else if (parameter == 'accountnumber')
          {
            if (exists == 0)
                {       
                    cy.get('#bankaccount-accountNumber-input-helper-text').should('be.visible').should('have.text', 'Enter a valid bank account number')
                } 
            else
                {       
                    cy.get('#bankaccount-accountNumber-input-helper-text').should('not.exist')
                }     
          }
        else if (parameter == 'shortbankname')
          {
            if (exists == 0)
                {       
                    cy.get('#bankaccount-bankName-input-helper-text').should('be.visible').should('have.text', 'Must contain at least 5 characters')
                } 
            else
                {       
                    cy.get('#bankaccount-bankName-input-helper-text').should('not.exist')
                }     
          }  
        else if (parameter == 'invalidroutingnumber')
          {
            if (exists == 0)
                {       
                    cy.get('#bankaccount-routingNumber-input-helper-text').should('be.visible').should('have.text', 'Must contain a valid routing number')
                } 
            else
                {       
                    cy.get('#bankaccount-routingNumber-input-helper-text').should('not.exist')
                }     
          }  
        else if (parameter == 'shortaccountnumber')
          {
            if (exists == 0)
                {       
                    cy.get('#bankaccount-accountNumber-input-helper-text').should('be.visible').should('have.text', 'Must contain at least 9 digits')
                } 
            else
                {       
                    cy.get('#bankaccount-accountNumber-input-helper-text').should('not.exist')
                }     
          } 
        else if (parameter == 'accountnumbertoolong')
          {
            if (exists == 0)
                {       
                    cy.get('#bankaccount-accountNumber-input-helper-text').should('be.visible').should('have.text', 'Must contain no more than 12 digits')
                } 
            else
                {       
                    cy.get('#bankaccount-accountNumber-input-helper-text').should('not.exist')
                }     
          }    
        
    }

    checkSaveButtonStatus(enabled) {
        let status
        
        if (enabled == 0)  
           {
              status = 'be.disabled'
           }
        else
           {
              status = 'be.enabled'
           }

           cy.get('button[data-test="bankaccount-submit"]').should(status)   
    }


}    
export const onCreatebankaccountPage = new CreatebankaccountPage()