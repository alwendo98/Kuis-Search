/// <reference types="cypress" />


describe('Ambil Data dari Input dengan Type', () => {
    it('should type and retrieve data from input', () => {
      // Kunjungi halaman
      cy.visit('https://example.cypress.io/commands/actions');
  
      // Temukan input dengan placeholder "Email"
      cy.get('.action-email') // Selector input dengan class "action-email"
        .type('Testing@example.com') // Isi dengan teks
        .should('have.value', 'Testing@example.com') // Verifikasi bahwa nilai telah terisi
        .invoke('val') // Ambil nilai dari input
        .then((emailValue) => {
          // Cetak nilai ke console
          cy.log('Nilai input email:', emailValue);
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
        .type('Testing123') // Isi dengan teks
        .should('have.value', 'Testing123') // Verifikasi nilai password
        .invoke('val') // Ambil nilai input password
        .then((passwordValue) => {
          cy.log('Nilai input password:', passwordValue); // Cetak nilai ke log Cypress
        });

      // Tambahkan elemen "Full Name" secara manual ke halaman
      cy.document().then((doc) => {
        const fullNameField = doc.createElement('input');
        fullNameField.setAttribute('type', 'text');
        fullNameField.setAttribute('class', 'action-fullName1');
        fullNameField.setAttribute('placeholder', 'Full Name');
        doc.body.appendChild(fullNameField);
      });
  
      
      // Input Full Name
      cy.get('.action-fullName1') // Selector input dengan class "action-fullName1"
        .type('Testing') // Isi dengan teks
        .should('have.value', 'Testing') // Verifikasi bahwa nilai telah terisi
        .invoke('val') // Ambil nilai dari input
        .then((fullName1Value) => {
          // Cetak nilai ke console
          cy.log('Nilai input fullName1:', fullName1Value);
        });
    });
  });