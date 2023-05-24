const products = {
    product: 'Juno Jacket',
    inexistent: 'inexistenteError',
}

const messages = {
    result: '1 result found',
    msgError: 'No products for query',
}

class searchProduct {

    go(){
        cy.visit('/')
    }

    search() {
        cy.get('input[id="search"]').type(products.product).type('{enter}')
    }

    validationResult() {
        cy.contains(products.product).should('be.visible')
        cy.get('div').contains(messages.result).should('be.visible')
        
    }

    searchInexistent() {
        cy.get('input[id="search"]').type(products.inexistent).type('{enter}')
    }

    validationInexistent() {
        cy.get('.no-results').contains(messages.msgError).should('be.visible')
    }
}

export default new searchProduct();