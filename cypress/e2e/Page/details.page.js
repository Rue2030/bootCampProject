class details{
    
    //Contact Selectors
    get addToCart() { return ("#add-to-cart") }
    get category() { return (".css-1ccau2i") }
    get itemName() { return ('.chakra-stack') }
    get itemText() { return ('.chakra-text') }
    get icreaseQty() { return ('#product-increase') }
    get Qty() { return ('[inputmode="decimal"]') }
    get summary() { return ('.snipcart-cart-header') }
    get checkout() { return ('.snipcart-base-button__label') }
    get itemTitle() { return ('.snipcart-item-line__title') }
    get itemPrice() { return ('.snipcart-item-quantity__total-price') }
    
    //Increase Qty Methods
    increase(){
        cy.get(this.icreaseQty).click()
    }

    //add to cart Methods
    addCart(){
        cy.get(this.addToCart).click()
    }
}
export default new details()