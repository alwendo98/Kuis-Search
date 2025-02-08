/// <reference types="cypress" />

describe('Ambil Data dari Input Email dan Password', () => {
    it('should type and retrieve data from email and password inputs', () => {
      // Kunjungi halaman
      
      cy.visit('https://example.cypress.io/commands/actions');
  
      // Input email
  
      cy.get('.action-email') // Selector input email bawaan
        .type('Testing@gmail.com') // Isi dengan teks
        .should('have.value', 'Testing@gmail.com') // Verifikasi nilai email
        .invoke('val') // Ambil nilai input email
        .then((emailValue) => {
          cy.log('Nilai input email:', emailValue); // Cetak nilai ke log Cypress
        });
  
      // Tambahkan input password secara manual ke halaman
      cy.document().then((doc) => {
        const passwordField = doc.createElement('input');
        passwordField.setAttribute('type', 'password');
        passwordField.setAttribute('class', 'action-password');
        passwordField.setAttribute('placeholder', 'Password');
        doc.body.appendChild(passwordField);
      });
  
      // Input password
      cy.get('.action-password') // Selector input password
        .type('securePassword123') // Isi dengan teks
        .should('have.value', 'securePassword123') // Verifikasi nilai password
        .invoke('val') // Ambil nilai input password
        .then((passwordValue) => {
          cy.log('Nilai input password:', passwordValue); // Cetak nilai ke log Cypress
        });

        // Tambahkan input "Full Name" secara manual ke halaman
    cy.document().then((doc) => {
        const fullNameInput = doc.createElement('input');
        fullNameInput.setAttribute('type', 'text');
        fullNameInput.setAttribute('class', 'action-full-name');
        fullNameInput.setAttribute('placeholder', 'Full Name');
        doc.body.appendChild(fullNameInput);
      });
  
      // Interaksi dengan input "Full Name"
      cy.get('.action-full-name') // Selector input yang ditambahkan
        .type('Testing') // Isi dengan teks "Testing"
        .should('have.value', 'Testing') // Verifikasi bahwa nilai telah terisi
        .invoke('val') // Ambil nilai input
        .then((fullNameValue) => {
          // Cetak nilai ke console
          cy.log('Nilai input full name:', fullNameValue);
        });
    });
});
  