import searchProduct from '../../support/pages/searchProduct';

describe('Search for a product', function() {

    it('Search for a product sucessfully', function() {
        searchProduct.go();
        searchProduct.search();
        searchProduct.validationResult();
    })

    it('Search for a non-existent product', function() {
        searchProduct.go();
        searchProduct.searchInexistent();
        searchProduct.validationInexistent();
    })
})