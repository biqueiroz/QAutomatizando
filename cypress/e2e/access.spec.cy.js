
it('to have access', function(){
    cy.visit('/')

    cy.title()
        .should('eq', 'Home Page')
})