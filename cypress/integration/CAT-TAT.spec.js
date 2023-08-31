///<reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {

    beforeEach(function(){
        cy.visit('./src/index.html')
    })

    it('Verifica o título da aplicação', function() {
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    })

    it.only('Preenche os campos obrigatórios e envia o formulário', function() {
        
        const longText = 'Esse campo é um item obrigatório e por isso deve ser preenchido e para testa essa funcionalidade tenho que digitar um grande número de carateres.'
        
        cy.get('#firstName').type('Anderson')
        cy.get('#lastName').type('Sá')
        cy.get('#email').type('andsa@mock.com')
        cy.get('#open-text-area').type(longText, {delay:0})
        cy.get('button[type="submit"]').click()

        cy.get('.success').should('be.visible')
    })
})