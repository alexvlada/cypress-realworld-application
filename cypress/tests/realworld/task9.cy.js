const baseUrl = 'http://localhost:3001'
const username = Cypress.env('username');
const password = Cypress.env('password');
const newUsername = "demouser"+Cypress.env('randomNumber');
let newUserid



const accountData = {
                      "bankName": "Test Bank 2",
                      "accountNumber": "000123456789",
                      "routingNumber": "110000000"
                    }

const demoUserData = {
                       "firstName": "Demo",
                       "lastName": "User",
                       "username": newUsername,
                       "password": "Getitnow2024!",
                       "email": newUsername+"@gmail.com",
                       "phoneNumber": "123456789",
                       "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1041.jpg"
                     } 
                     
const demoUserDataUpdated = {
                                "firstName": "Demo updated",
                                "lastName": "User updated",
                                "email": newUsername+"updated@gmail.com",
                                "phoneNumber": "123456789updated"                                
                            } 
                            
const demoUserDataDelete = {"id": newUserid}                              

describe('API create user test suite', () => {

    it('API user autentification', () => {

        cy.request({
            method: 'POST',
            url: baseUrl+'/login',
            body: {
                    "username": username,
                    "password": password
                  }
        }).then(response => {
            expect(response.status).to.eq(200);
            expect(response.statusText).to.eq("OK");

        })

    })


    it('API create new user', () => {

        cy.request({
            method: 'POST',
            url: baseUrl+'/login',
            body: {
                    "username": username,
                    "password": password
                  }
        }).then(response => {
            expect(response.status).to.eq(200);

            cy.request({
                method: 'POST',
                url: baseUrl+'/users',
                body: demoUserData
            }).then(response => {
                expect(response.status).to.eq(201);
                cy.log(JSON.stringify(response.body.user))

                newUserid = response.body.user.id
                expect(response.body.user.firstName).to.eq("Demo");
                expect(response.body.user.lastName).to.eq("User");
                expect(response.body.user.username).to.eq(newUsername);
                expect(response.body.user.email).to.eq(newUsername+"@gmail.com");
                expect(response.body.user.phoneNumber).to.eq("123456789");
            })  

        })

    })


    it('API new user login', () => {

        cy.request({
            method: 'POST',
            url: baseUrl+'/login',
            body: {
                    "username": newUsername,
                    "password": password
                  }
        }).then(response => {
            expect(response.status).to.eq(200);
            expect(response.statusText).to.eq("OK");

        })

    })
    
    it("API validate new user's data", () => {
        cy.request({
            method: 'POST',
            url: baseUrl + '/login',
            body: {
                "username": username,
                "password": password
            }
        }).then(response => {

            //cy.log("new user id: " + baseUrl + '/users/' + newUserid);
            
            cy.request({
                method: 'GET',
                url: baseUrl + '/users/'         
            }).then(response => {
                expect(response.status).to.eq(200);

                //cy.log(JSON.stringify(response.body.results))
              
                const resp = JSON.parse(JSON.stringify(response.body.results[response.body.results.length-1]))

                expect(resp.id).to.eq(newUserid);
                expect(resp.firstName).to.eq('Demo');
                expect(resp.lastName).to.eq("User");
                expect(resp.email).to.eq(newUsername+"@gmail.com");
                expect(resp.phoneNumber).to.eq("123456789")
                
            });
            
            
        });
    });

    it("API update new user's data", () => {

        cy.request({
            method: 'POST',
            url: baseUrl+'/login',
            body: {
                    "username": username,
                    "password": password
                }
        }).then(response => {
            expect(response.status).to.eq(200);

            cy.request({
                method: 'PATCH',
                url: baseUrl + '/users/' + newUserid,
                body: demoUserDataUpdated
            }).then(response => {
                expect(response.status).to.eq(204);
       
                const requestBody = JSON.parse(response.requestBody);

                // Log the firstName
                //cy.log(requestBody.firstName);
            
                // Assert the firstName is as expected
                expect(requestBody.firstName).to.eq('Demo updated');
                expect(requestBody.lastName).to.eq("User updated");
                expect(requestBody.email).to.eq(newUsername+"updated@gmail.com");
                expect(requestBody.phoneNumber).to.eq("123456789updated")

                cy.log(JSON.stringify(response));

       
            
            })  

        })

    })

    it("API validate updated new user's data", () => {
        cy.request({
            method: 'POST',
            url: baseUrl + '/login',
            body: {
                "username": username,
                "password": password
            }
        }).then(response => {

            //cy.log("new user id: " + baseUrl + '/users/' + newUserid);
            
            cy.request({
                method: 'GET',
                url: baseUrl + '/users/'         
            }).then(response => {
                expect(response.status).to.eq(200);
              
                const resp = JSON.parse(JSON.stringify(response.body.results[response.body.results.length-1]))

                expect(resp.id).to.eq(newUserid);
                expect(resp.firstName).to.eq('Demo updated');
                expect(resp.lastName).to.eq("User updated");
                expect(resp.email).to.eq(newUsername+"updated@gmail.com");
                expect(resp.phoneNumber).to.eq("123456789updated")
                
            });   
        });
    });

    it("API validate updated new user's data - using loop", () => {
        cy.request({
            method: 'POST',
            url: baseUrl + '/login',
            body: {
                "username": username,
                "password": password
            }
        }).then(response => {
            
            cy.request({
                method: 'GET',
                url: baseUrl + '/users/'         
            }).then(response => {
                expect(response.status).to.eq(200);  
                
                const resp = JSON.parse(JSON.stringify(response.body.results))
                
                for (let i = 0; i < resp.length; i++) {
                    
                    if (resp[i].id == newUserid) {

                        expect(resp[i].id).to.eq(newUserid);
                        expect(resp[i].firstName).to.eq('Demo updated');
                        expect(resp[i].lastName).to.eq("User updated");
                        expect(resp[i].email).to.eq(newUsername+"updated@gmail.com");
                        expect(resp[i].phoneNumber).to.eq("123456789updated")

                    }        
                }              
            });   
        });
    });

})