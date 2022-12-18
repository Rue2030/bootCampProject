import auth from '../Page/auth.page'
import addCart from '../Page/addToCart.page'
import details from '../Page/details.page'

describe('Product Details test cases', () => {
    beforeEach(() => {
      cy.visit('/')
        
      //Login to account
      cy.get(auth.registerBtn).click();
      auth.signIn('rrrtester011@test.com', 'Password@1');
      cy.get(addCart.product1).should('be.visible');
      cy.wait(6000);
      cy.get(addCart.product1).click();

    })
  
    it('Verify the product on the product details page', () => {

        cy.wait(3000);

        //assert product details on page
        cy.get(details.itemName).contains('Quality Fitted Hat').should('be.visible');
        cy.get(details.itemText).contains('3 Pack Unisex Vintage Washed Distressed Baseball-Cap,Retro Adjustable Dad Hats,Baseball Hat for Men Women').should('be.visible');
        cy.get(details.itemText).contains('30').should('be.visible');
        cy.get(details.category).contains('hat').should('be.visible');
        cy.get(details.addToCart).contains('Add To Cart').should('be.visible');
        
    })

    it('Verify the user is able to increase the quantity on product page', () => {

        cy.get(details.Qty).should('have.value', '1');

        //increase quantity in cart
        details.increase()

        //assert quantity increase
        cy.get(details.Qty).should('have.value', '2');

    })

    it('Verify the user can navigate to checkout from product details', () => {

        cy.wait(3000);

        //add item to cart
        details.addCart()

        //assert item in cart
        cy.get(details.summary).contains(' Cart summary ').should('be.visible');
        cy.get(details.itemTitle).should('contain', ' Quality Fitted Hat ');
        cy.get(details.itemPrice).should('contain', ' $30.00 ');
        cy.get(details.checkout).contains(' Checkout ').should('be.visible');
    })
})