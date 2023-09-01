Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){
    cy.get('#firstName').type('Anderson')
    cy.get('#lastName').type('Sá')
    cy.get('#email').type('andsa@mock.com')
    cy.get('#open-text-area').type('Basic Test', {delay:0})
    cy.get('button[type="submit"]').click()
})