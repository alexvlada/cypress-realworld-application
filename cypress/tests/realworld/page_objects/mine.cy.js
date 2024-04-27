export class MinePage {

    checkMinePath() {
        cy.location("pathname").should("equal", "/personal")
    }
    
    checkTitle() {
        return cy.get('div[class="MuiListSubheader-root MuiListSubheader-sticky MuiListSubheader-gutters"]').should('be.visible').should('contain.text', 'Personal')
    }

    getCreateTransactionButton() {
        return cy.contains('Create A Transaction')
    }

    checkPaidTransaction(index, paymentAmount, paymentNote) {

        cy.get('p[class="MuiTypography-root MuiTypography-body2 MuiTypography-colorTextSecondary MuiTypography-gutterBottom"]').eq(index).should('be.visible').and('contain.text', paymentNote)         
        
        cy.wrap(paymentAmount).then((numberString) => {
            const number = parseInt(numberString, 10); // Convert string to number
            const currencyFormattedAmount = new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD',
              minimumFractionDigits: 2,
            }).format(number);
          
            cy.log(currencyFormattedAmount); 

            cy.get('body').then($body => {
                if ($body.find('span[class="MuiTypography-root makeStyles-amountNegative-82 MuiTypography-body1 MuiTypography-colorPrimary MuiTypography-displayInline"]').eq(index).length) 
                     {
                       cy.get('span[class="MuiTypography-root makeStyles-amountNegative-82 MuiTypography-body1 MuiTypography-colorPrimary MuiTypography-displayInline"]').eq(index).should('be.visible').and('contain.text', currencyFormattedAmount) 
                     } 
                else 
                     {
                        cy.get('span[class="MuiTypography-root makeStyles-amountNegative-69 MuiTypography-body1 MuiTypography-colorPrimary MuiTypography-displayInline"]').eq(index).should('be.visible').and('contain.text', currencyFormattedAmount) 
                     }
              });

        });
                 
    }

    checkAmountRange(rangeFrom, rangeTo) {

        cy.get('span[class="MuiTypography-root makeStyles-amountNegative-82 MuiTypography-body1 MuiTypography-colorPrimary MuiTypography-displayInline"]').each(($element, index) => {

            cy.wrap($element).invoke('text').then((text) => {

               const cleanedText = text.replace('-$', '');
               const numericValue = parseFloat(cleanedText);
               cy.log(numericValue);
               expect(numericValue).to.be.within(rangeFrom, rangeTo);
            });
        
        });

    }
    
}    
export const onMinePage = new MinePage()