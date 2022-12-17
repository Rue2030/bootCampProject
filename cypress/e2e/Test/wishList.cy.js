import Favorite from '../Page/wishList.page'

describe('Favourites test cases', () => {
    beforeEach(() => {
      cy.visit('/')
        
      //Login to account
        cy.get("#login-text").should('contain', 'Welcome to the Automation Camp Store');
        cy.get("#signInOrRegister").click();    
        cy.get("[name='email']").type("rrrtester011@test.com");
        cy.get("[name='password']").type("Password@1");
        cy.get("[name='submit']").click();

    })
  
    it('Verify user navigate to favorites and check empty favourites', () => {

        Favorite.navFavourite()

        //Assert empty cart
        cy.get(Favorite.favHeader).should('contain', 'Favorites');
        cy.get(Favorite.emptyCart).should('contain', 'No favorites added!');
        cy.get(Favorite.emptyCartDes).should('contain', 'You can add favorites from the home page.');
    })

    it('Verify user can add a favourites from product list page', () => {
        
        Favorite.addFavourite()

        //assert product was added from productlist page
        cy.get(Favorite.succesMsg).should('contain', 'Quality Fitted Hat added to favorites');
        cy.get(Favorite.favNav).should('contain', '1');

        Favorite.navFavourite()
        cy.get(Favorite.favHeader).should('contain', 'Favorites');

        //assert product is in the favourites
        cy.get(Favorite.nameProd).should('contain', 'Quality Fitted Hat');
        cy.get(Favorite.addToCart).should('contain', 'Add To Cart');
    })

    it('Verify user can remove a favourites from product list page', () => {
        
        Favorite.addFavourite()

        //asser product was added to favourites
        cy.get(Favorite.succesMsg).should('contain', 'Quality Fitted Hat added to favorites');
        cy.get(Favorite.favNav).should('contain', '1');

        Favorite.navFavourite()
        cy.get(Favorite.favHeader).should('contain', 'Favorites');

        //assert product is in the favourite
        cy.get(Favorite.nameProd).should('contain', 'Quality Fitted Hat');
        
        //navigate back the home page
        cy.get(Favorite.home).click()

        //remove product from Favourite and assert is has been removed
        Favorite.removeFavourite()

        cy.get(Favorite.succesMsg).should('contain', 'Quality Fitted Hat removed from favorites');
        cy.get(Favorite.favNav).should('contain', '0');

        //waiting on toast messages to close in order to click home button
        cy.wait(6000);

        Favorite.navFavourite()
        cy.get(Favorite.favHeader).should('contain', 'Favorites');

        //assert favourite page is empty
        cy.get(Favorite.emptyCart).should('contain', 'No favorites added!');
        cy.get(Favorite.emptyCartDes).should('contain', 'You can add favorites from the home page.');
    })

    it('Verify user can remove a favourites from favourites page', () => {
        
        Favorite.addFavourite()

        //asser product was added to favourites
        cy.get(Favorite.succesMsg).should('contain', 'Quality Fitted Hat added to favorites');
        cy.get(Favorite.favNav).should('contain', '1');

        Favorite.navFavourite()
        cy.get(Favorite.favHeader).should('contain', 'Favorites');

        //assert product is in the favourite
        cy.get(Favorite.nameProd).should('contain', 'Quality Fitted Hat');
        
        //remove product from Favourite and assert is has been removed
        cy.get(Favorite.removeFav).click();
        cy.get(Favorite.succesMsg).should('contain', 'Quality Fitted Hat removed from favorites');
        cy.get(Favorite.favNav).should('contain', '0');

        //assert favourite page is empty
        cy.get(Favorite.emptyCart).should('contain', 'No favorites added!');
        cy.get(Favorite.emptyCartDes).should('contain', 'You can add favorites from the home page.');
    })

    it('Verify user can add a favourites from product details page', () => {
        
        //add product to favourites from the Product details page
        Favorite.productFavourite()

        //assert product was added
        cy.get(Favorite.succesMsg).should('contain', 'Quality Trucker Hat added to favorites');
        cy.get(Favorite.favNav).should('contain', '1');

        Favorite.navFavourite()
        cy.get(Favorite.favHeader).should('contain', 'Favorites');

        //assert product is in the favourites
        cy.get(Favorite.nameProd).should('contain', 'Quality Trucker Hat');

    })


    it('Verify user can add to cart from the favourites page', () => {
        
        //add item to cart from the favourites page
        Favorite.addToCartFavourite()

        //assert item was added to cart
        cy.get(Favorite.cartItem).should('contain', 'Quality Fitted Hat');
        cy.get(Favorite.checkOut).should('contain', ' Checkout ');


    })

    
})