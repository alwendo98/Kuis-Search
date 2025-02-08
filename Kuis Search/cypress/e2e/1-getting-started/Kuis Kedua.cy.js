// <reference types="cypress" />

describe ('Latihan Login', () => {
    it("Should Load Login Website", () => {
        cy.visit('http://zero.webappsecurity.com/login.html');

        cy.fixture("user").then(user =>{
            const username = user.username
            const password = user.password

            cy.get('#user_login').type(username)
              cy.get('#user_password').type(password)
              cy.get('#user_remember_me').click()
              cy.get('.btn').click()
    
              
        })

    });
   it("Click the link 'type'", () => {
        cy.get('#account_activity_tab > a').click()
        cy.get('#transfer_funds_tab > a').click()
        cy.get('#pay_bills_tab > a').click()
        cy.get('#money_map_tab > a').click()
        cy.get('#online_statements_tab > a').click() 
   });

})
    