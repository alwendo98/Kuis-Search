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
        it('Should make a payment successfully', () => {
            cy.visit('http://zero.webappsecurity.com/bank/pay-bills.html');
    
            // Isi form pembayaran
            cy.get('#sp_payee').select('Apple'); // Pilih penerima pembayaran
            cy.get('#sp_account').select('Loan'); // Pilih akun
            cy.get('#sp_amount').type('400'); // Masukkan jumlah pembayaran
            cy.get('#sp_date').type('2025-02-08{enter}'); // Masukkan tanggal
            cy.get('#sp_description').type('Testing Form'); // Masukkan deskripsi
            cy.get('#pay_saved_payees').click(); // Klik tombol "Pay"
    
            // Verifikasi pesan sukses
            cy.get('#alert_content')
              .should('be.visible')
              .and('contain', 'The payment was successfully submitted.');
        });
    });
    
    