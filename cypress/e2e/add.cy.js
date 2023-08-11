import addProduct from "../support/pages/addProductPage";

describe('Add a product to cart', function() {

    it('Add a product from homepage', function() {
        addProduct.go();
        addProduct.fromHome();
        addProduct.validationHome();
    })

    it('Add a custom product to cart by product categories', function() {
        addProduct.goJackets();
        addProduct.selectProduct();
        addProduct.validationAdd();
    })
})