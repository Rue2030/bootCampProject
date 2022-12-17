class Wishlist{
    
    //Contact Selectors
    get product1() { return ('#product-0 #add-to-favorite') }
    get productRemove() { return ('#product-0 #remove-from-favorite') }
    get product2() { return ('#product-1') }
    get prodcutFav() { return ('#add-to-favorite') }
    get succesMsg() { return ('.css-njbp03>div') }
    get favNav() { return ('#top-favorite') }
    get removeFav() { return ('#remove-favorite-btn') }
    get nameProd() { return ('.chakra-stack.css-1oeb4ru>p') }
    get addToCart() { return ('#add-to-cart') }
    get favHeader() { return ('.chakra-heading.css-11cq7yk') }
    get removeMsg() { return ('.css-njbp03>div') }
    get emptyCart() { return ('.chakra-heading.css-kmq9po') }
    get emptyCartDes() { return ('.chakra-text.css-jneyc') }
    get home() { return ('#top-home') }
    get cartItem() { return ('.snipcart-item-line__header>h2') }
    get checkOut() { return ('[type="button"]>div') }
    
    
    
    //add favourites Methods
    addFavourite(){
        cy.get(this.product1).click()
    }

    //remove favourites Methods
    removeFavourite(){
        cy.get(this.productRemove).click()
    }

    //navigate to favourites Methods
    navFavourite(){
        cy.get(this.favNav).click()
    }

    //add to cart from favourites Methods
    addToCartFavourite(){
        cy.get(this.product1).click()
        cy.get(this.favNav).click()
        cy.wait(3000)
        cy.get(this.addToCart).click()
    }

    //add favourites from Product details page Methods
    productFavourite(){
        cy.wait(3000)
        cy.get(this.product2).click()
        cy.wait(3000)
        cy.get(this.prodcutFav).click()
    }
    
}
export default new Wishlist()