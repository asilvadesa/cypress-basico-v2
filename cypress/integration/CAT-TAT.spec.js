///<reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {

    beforeEach(function(){
        cy.visit('./src/index.html')
    })

    it('Verifica o título da aplicação', function() {
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    })

    it('Preenche os campos obrigatórios e envia o formulário', function() {
        
        const longText = 'Esse campo é um item obrigatório e por isso deve ser preenchido e para testa essa funcionalidade tenho que digitar um grande número de carateres.'
        
        cy.get('#firstName').type('Anderson')
        cy.get('#lastName').type('Sá')
        cy.get('#email').type('andsa@mock.com')
        cy.get('#open-text-area').type(longText, {delay:0})
        cy.get('button[type="submit"]').click()

        cy.get('.success').should('be.visible')
    })

    it('exibe mensagem de erro ao submeter o formulário com um email com formato inválido', function() {
        cy.get('#firstName').type('Anderson')
        cy.get('#lastName').type('Sá')
        cy.get('#email').type('andsa@mock,com')
        cy.get('#open-text-area').type('Basic Test')
        cy.get('button[type="submit"]').click()

        cy.get('.error').should('be.visible')
    })

    it('campo telefone aceita apenas valor númerico', function() {
        cy.get('#phone')
            .type('validaNumero')
            .should('have.value', '')
    })

    it('exibe mensagem de erro quando o telefone se torna campo obrigatório mas nao é informado', function() {
        cy.get('#firstName').type('Anderson')
        cy.get('#lastName').type('Sá')
        cy.get('#email').type('andsa@mock.com')
        cy.get('#open-text-area').type('Basic Test')
        cy.get('#phone-checkbox').click()
        cy.get('button[type="submit"]').click()

        cy.get('.error').should('be.visible')
    })

    it('exibe mensagem de error ao enviar formulario sem preencher os dados', function(){
        cy.get('button[type="submit"]').click()
        cy.get('.error').should('be.visible')
    })

    it('envia o formulario com sucesso usando comando customizado', function(){
        cy.fillMandatoryFieldsAndSubmit()
        cy.get('.success').should('be.visible')
    })

    it('envia o formulario com sucesso usando seletor contains', function(){
        cy.get('#firstName').type('Anderson')
        cy.get('#lastName').type('Sá')
        cy.get('#email').type('andsa@mock.com')
        cy.get('#open-text-area').type('longText', {delay:0})
        cy.contains('button', 'Enviar').click()

        cy.get('.success').should('be.visible')
    })

    it('seleciona um produto (Youtube) por seu texto', function() {
        cy.get('#product')
            .select('YouTube')
            .should('have.value', 'youtube')
    })

    it('seleciona um produto (Mentoria) pelo seu valor', function() {
        cy.get('#product')
            .select('mentoria')
            .should('have.value', 'mentoria')
    })

    it.only('seleciona um produto (Blog) pelo seu indice', function() {
        cy.get('#product')
            .select(1)
            .should('have.value', 'blog')
    })
})