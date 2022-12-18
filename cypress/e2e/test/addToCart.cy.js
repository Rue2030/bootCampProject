import auth from '../Page/auth.page'
import addCart from '../Page/addToCart.page'

describe('Add to Cart', () => {
    beforeEach(() => {
      cy.visit('/')
        
      //Login to account
      cy.get(auth.registerBtn).click();
      auth.signIn('rrrtester011@test.com', 'Password@1')

    })
  
    it('Verify user can add single item to cart', () => {

        //assert product page and product is visible
        cy.get(addCart.productHeading).should('contain', 'Products');
        cy.get(addCart.product1).should('be.visible');

        addCart.addSingle()

        //assertions
        cy.get(addCart.cartSummary).contains(' Cart summary ').should('be.visible');
        cy.get(addCart.itemTitle).should('contain', ' Quality Fitted Hat ');
        cy.get(addCart.itemPrice).should('contain', ' $30.00 ');
        cy.get(addCart.checkout).contains(' Checkout ').should('be.visible');
    })

    it('Verify the user can add multiple icon to cart', () => {

        //assert product header and product are visible
        cy.get(addCart.productHeading).should('contain', 'Products');
        cy.get(addCart.product1).should('be.visible');

        addCart.addMultiple()

        //assertions for product 1
        cy.get(addCart.cartSummary).contains(' Cart summary ').should('be.visible');
        cy.get(addCart.itemTitle).should('contain', ' Quality Fitted Hat ');
        cy.get(addCart.itemPrice).should('contain', ' $30.00 ');
       
        //assertions for product 2
        cy.get(addCart.itemTitle).should('contain', ' Quality Trucker Hat ');
        cy.get(addCart.itemPrice).should('contain', ' $24.00 ');
        cy.get(addCart.checkout).scrollIntoView().contains(' Checkout ').should('be.visible');

    })

    it('Verify and item can be added to cart from the Product description page', () => {

        //assert product header and product are visible
        cy.get(addCart.productHeading).should('contain', 'Products');
        cy.get(addCart.product3).should('be.visible');
        cy.wait(3000);

        addCart.addProductDescript()

        //assertion
        cy.get(addCart.cartSummary).should('be.visible');
        cy.get(addCart.itemTitle).should('contain', ' Quality Mousepad ');
        cy.get(addCart.itemPrice).should('contain', ' $20.00 ');
        cy.get(addCart.checkout).contains(' Checkout ').should('be.visible');

    })
})