 // <reference types="cypress" />

 describe('Working with inputs', () => {
    it('Visit the website', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.url().should('include', 'login.html')
    });
    it('Should fill username', () => {
        cy.get('#user_login').clear()
        cy.get('#user_login').type('username') 
     });
     it('Should fill password', () => {
         cy.get('input[name="user_password"]').clear()
         cy.get('input[name="user_password"]').type('password')
     }); 
    it('Should check on Checkbox Keep me signed in', () => {
        cy.get('#user_remember_me').check()
    });
    
    it('Should try to login with adminUser (INVALID)', () => {
        cy.fixture("user.json").then(users => {
            // Cari data dengan username "adminUser"
            const admin = users.find(user => user.username === "adminUser");
    
            // Gunakan data admin untuk pengujian
            const username = admin.username;
            const password = admin.password;
    
            // Interaksi form login
            cy.get('#user_login').clear();
            cy.get('#user_login').type(username);

            cy.wait(2000)
            cy.get('#user_login').clear();
            cy.get('#user_login').type('usernameTESTING');
    
            cy.get('input[name="user_password"]').clear();
            cy.get('input[name="user_password"]').type(password);
            cy.wait(2000)

            //ubah passowrd
            cy.get('input[name="user_password"]').clear();
            cy.get('input[name="user_password"]').type("ubah passowrd");

            cy.get('input[name="submit"]').click();
    
            // Verifikasi pesan error atau lainnya
            cy.get('.alert-error').should('contain.text', 'Login and/or password are wrong.');
        });
    });
        it('Should try to login with adminUser (VALID)', () => {
        cy.fixture("user.json").then(users => {
            // Cari data dengan username "adminUser"
            const admin = users.find(user => user.username === "username");
    
            // Gunakan data admin untuk pengujian
            const username = admin.username;
            const password = admin.password;
    
            // Interaksi form login
            cy.get('#user_login').clear();
            cy.get('#user_login').type(username);
    
            cy.get('input[name="user_password"]').clear();
            cy.get('input[name="user_password"]').type(password);
    
            cy.get('input[name="submit"]').click();
    
            // Verifikasi pesan error atau lainnya
            cy.get('.alert-error').should('contain.text', 'Login and/or password are wrong.');
        });
    });
})