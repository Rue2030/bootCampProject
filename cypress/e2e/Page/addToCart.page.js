class addCart{
    
    //addCart Selectors
    get product1() { return ('#product-0') }
    get addToCartProduct1() { return ('#product-0 #add-to-cart') }
    get cartSummary() { return ('.snipcart-cart-header') }
    get itemTitle() { return ('.snipcart-item-line__title') }
    get itemPrice() { return ('.snipcart-item-quantity__total-price') }
    get checkout() { return ('.snipcart-base-button__label') }
    get productHeading() { return ('.chakra-heading') }
    get contShopping() { return ('.snipcart-modal__close-title') }
    get product2() { return ('#product-1') }
    get product3() { return ('#product-2') }
    get addToCartProduct2() { return ('#product-1 #add-to-cart') }
    get addToCart() { return ('#add-to-cart') }

    
    //add single Methods
    addSingle(){
        cy.wait(3000);
        cy.get(this.addToCartProduct1).click()
    }

    //add multiple Info Methods
    addMultiple(){
        cy.wait(3000);
        cy.get(this.addToCartProduct1).click()
        cy.get(this.contShopping).click()
        cy.wait(3000);
        cy.get(this.addToCartProduct2).click()
    }

    //add from Product page method
    addProductDescript(){
        cy.wait(3000)
        cy.get(this.product3).click()
        cy.wait(3000)
        cy.get(this.addToCart).click()
    }
}
export default new addCart()