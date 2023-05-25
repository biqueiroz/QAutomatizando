const product = {
    orderHome: '4',
    nameHome: 'Fusion Backpack',
    nameCategory: 'Miko Pullover Hoodie',
    size: 'M',
    quantity: '3'
    }


class addProduct {

    go() {
        cy.visit('/')
    }

    fromHome() {
        cy.wait(1000)
        cy.get('ol.product-items li.product-item > div')
        .eq(product.orderHome)
        .trigger('hover')
        .within($element =>{
           cy.get($element)
           .trigger('hover')
           cy.get($element.find('button[type="submit"]'))
           .click( { force: true } )
        })
    }

    validationHome(){
        cy.contains('You added ' + product.nameHome + ' to your shopping cart.')
        .should('be.visible')
    }

    goJackets() {
        cy.visit('/miko-pullover-hoodie.html')
    }

    selectProduct() {
        // cy.contains(product.nameCategory).click();

        cy.get('.size > .swatch-attribute-options').contains(product.size).click()
        cy.get('#option-label-color-93-item-57').click()
        cy.get('#qty').clear().type(product.quantity)
        cy.contains('button', 'Add to Cart').click();
    }

    validationAdd() {
        cy.contains('You added ' + product.nameCategory + ' to your shopping cart.')
            .should('be.visible')
    }
    
    

}

export default new addProduct();