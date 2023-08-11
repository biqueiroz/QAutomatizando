import AddElements from "../elements/addElements";

const addEl = new AddElements();

const product = {
    orderHome: '4',
    nameHome: 'Fusion Backpack',
    nameCategory: 'Miko Pullover Hoodie',
    size: 'M',
    quantity: '3'
    }

const messages = {
    validationInitial: 'You added ',
    validationFinal: ' to your shopping cart.',
    addToCart: 'Add to Cart',
}


class addProduct {

    go() {
        cy.visit('/')
    }

    fromHome() {
        cy.wait(1000)
        cy.get(addEl.productHome())
        .eq(product.orderHome)
        .trigger('hover')
        .within($element =>{
           cy.get($element)
           .trigger('hover')
           cy.get($element.find(addEl.searchSubmit()))
           .click( { force: true } )
        })
    }

    validationHome(){
        cy.contains(messages.validationInitial + product.nameHome + messages.validationFinal)
        .should('be.visible')
    }

    goJackets() {
        cy.visit('/miko-pullover-hoodie.html')
    }

    selectProduct() {
        cy.get(addEl.size()).contains(product.size).click()
        cy.get(addEl.color()).click()
        cy.get(addEl.quantity()).clear().type(product.quantity)
        cy.contains('button', messages.addToCart).click();
    }

    validationAdd() {
        cy.wait(5000)
        cy.get(addEl.showCart()).click()
        cy.get(addEl.cart()).contains(product.nameCategory)
            .should('be.visible')
    }

}

export default new addProduct();