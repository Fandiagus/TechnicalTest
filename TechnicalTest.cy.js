/// <reference types="cypress" />

describe('login functionality', () => {
    
    it ('Login Ayo Indonesia', () => {
            cy.visit('https://ayo.co.id/')
            cy.get('[href="#"]').contains('Masuk').click()
            cy.wait(3000)
            cy.get('input[name="_phone"]').type('fandiagus07@gmail.com')
            cy.get('input[name="password"]').type('Fandicher19')
            cy.get('[type="submit"]').contains('Selanjutnya').click()
            cy.get('[href="https://ayo.co.id/venues"]').click()
            cy.wait(3000)
            cy.get('[src="https://api.ayo.co.id/image/venue/165839641511947.image_cropper_1658396347236.jpg"]').click()
            cy.viewport(3000,3000)
            cy.get('date="2023-02-21"').click()
            cy.get('[field-name="Lapangan 1"]').contains('1 Jadwal Tersedia').click()
            cy.contains('10:00 - 11:00').click()
            cy.get('.btn-ayo').contains('Selanjutnya').click()
            cy.get('.btn-ayo').contains('Lanjutkan ke Pembayaran').click()
            cy.get('[href="https://ayo.co.id/checkout/payment"]').click()
            cy.get('.btn-ayo').contains('Lakukan Pembayaran').click()
            cy.get('[href="#/bank-transfer"]').click()
            cy.get('[href="#/bank-transfer/bca-va"]').click()
            cy.get('button').contains('Back to merchant').click()
            cy.request({
                        url: 'https://ayo.co.id/checkout/pending?code=eyJpdiI6ImExWTdyemhmdUlKQTYyaVU4Sm1UU2c9PSIsInZhbHVlIjoiU1hCVlkyanFhUSs0L1JkdmtKL0VMZz09IiwibWFjIjoiNmYzOGMxZWVmYjc3OGYxODhkYWE2ZGI1MTliOWI0NDI4MjhhOWVjMTBjYWEzZTgwZDJkYzgyNmIxZDk4ZGVhZSIsInRhZyI6IiJ9',
                        method: 'POST',
                        body: {
                            
                        }
                    }).then((res) => {
                        expect(res.status).to.eq(200)
                    })
        })
    
    })
