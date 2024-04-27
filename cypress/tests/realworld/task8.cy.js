
const username = Cypress.env('username');
const password = Cypress.env('password');

const accountData = {
                      "bankName": "Test Bank 2",
                      "accountNumber": "000123456789",
                      "routingNumber": "110000000"
                    }

describe('API bank account test suite', () => {

    it('Verify bank account', () => {

        cy.request({
            method: 'POST',
            url: 'http://localhost:3001/login',
            body: {
                    "username": username,
                    "password": password
                  }
        }).then(response => {
            expect(response.status).to.eq(200);

            cy.request({
                method: 'POST',
                url: 'http://localhost:3001/graphql',
                body: {
                        "operationName": "ListBankAccount",
                        "query": "\n  query ListBankAccount {\n    listBankAccount {\n      id\n      uuid\n      userId\n      bankName\n      accountNumber\n      routingNumber\n      isDeleted\n      createdAt\n      modifiedAt\n    }\n  }\n"
                      }
            }).then(response => {
                expect(response.status).to.eq(200);
                
                for (let i = 0; i < response.body.data.listBankAccount.length; i++) {
                    if (response.body.data.listBankAccount[i].bankName == accountData.bankName) {
                        expect(response.body.data.listBankAccount[i].accountNumber).to.contains(accountData.accountNumber);
                        expect(response.body.data.listBankAccount[i].routingNumber).to.contains(accountData.routingNumber);
                    }
                    
                }

            })  

        })

    })

})