/// <reference types="cypress" />


describe('Latihan dulu', () => {
    it("Should Load Testing Website", () => {
        cy.visit('https://books.toscrape.com/index.html');
        cy.url().should('include', '/index.html')
    });

    it("Click the link 'type'", () => {
        cy.get('.nav > :nth-child(1) > ul > :nth-child(1) > a').click()
        cy.get('h1').contains('Travel')
    });

    it("Click the link 'type' ", () => {
        cy.get('.nav > :nth-child(1) > ul > :nth-child(2) > a').click()
        cy.get('h1').contains('Mystery')  
    });
});
