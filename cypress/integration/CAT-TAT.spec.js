///<reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {

    beforeEach(function(){
        cy.visit('./src/index.html')
    })

    it('Verifica o título da aplicação', function() {
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    })

    it.only('Preenche os campos obrigatórios e envia o formulário', function() {
        cy.get('#firstName').type('Anderson')
        cy.get('#lastName').type('Sá')
        cy.get('#email').type('andsa@mock.com')
        cy.get('#open-text-area').type('Basic Test')
        cy.get('button[type="submit"]').click()

        cy.get('.success').should('be.visible')
    })
})