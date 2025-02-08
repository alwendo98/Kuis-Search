// <reference types="cypress" />

describe('Pencarian Data di Zero WebApp Security', () => {
    it('Melakukan pencarian dan menampilkan hasil yang ditemukan', () => {
        // Kunjungi halaman utama
        cy.visit('http://zero.webappsecurity.com/index.html');

        // Masukkan kata kunci ke dalam kolom pencarian dan tekan Enter
        cy.get('#searchTerm').type('bank{enter}');

        // Tunggu sebentar untuk memastikan hasil pencarian dimuat
        cy.wait(2000);

        // Verifikasi bahwa halaman hasil pencarian muncul
        cy.get('h2').should('contain', 'Search Results');

        // Pastikan ada hasil pencarian yang muncul
        cy.get('.top_offset').should('exist').and('be.visible');

        // Menampilkan hasil pencarian di console
        cy.get('.top_offset').each(($el, index) => {
            cy.log(`Hasil ${index + 1}: ${$el.text()}`);
        });
    });
});
