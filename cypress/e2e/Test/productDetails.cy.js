describe('Product Details test cases', () => {
    beforeEach(() => {
      cy.visit('/')
        
      //Login to account
        cy.get("#login-text").should('contain', 'Welcome to the Automation Camp Store');
        cy.get("#signInOrRegister").click();    
        cy.get("[name='email']").type("rrrtester011@test.com");
        cy.get("[name='password']").type("Password@1");
        cy.get("[name='submit']").click();

        cy.get("#product-0").should('be.visible');
        cy.wait(6000);
        cy.get("#product-0").click();

    })
  
    it('Verify the product on the product details page', () => {

        cy.wait(3000);

        cy.get(".chakra-stack").contains('Quality Fitted Hat').should('be.visible');
        cy.get(".chakra-text").contains('3 Pack Unisex Vintage Washed Distressed Baseball-Cap,Retro Adjustable Dad Hats,Baseball Hat for Men Women').should('be.visible');
        cy.get(".chakra-text").contains('30').should('be.visible');
        cy.get(".css-1ccau2i").contains('hat').should('be.visible');
        cy.get("#add-to-cart").contains('Add To Cart').should('be.visible');
        
    })

    it('Verify the user is able to increase the quantity on product page', () => {

        cy.get("[inputmode='decimal']").should('have.value', '1');

        cy.get("#product-increase").click();

        cy.get("[inputmode='decimal']").should('have.value', '2');

    })

    it('Verify the user can navigate to checkout from product details', () => {

        cy.wait(3000);
        cy.get("#add-to-cart").contains('Add To Cart').click();

        cy.get(".snipcart-cart-header").contains(' Cart summary ').should('be.visible');
        cy.get(".snipcart-item-line__title").should('contain', ' Quality Fitted Hat ');
        cy.get(".snipcart-item-quantity__total-price").should('contain', ' $30.00 ');
        cy.get(".snipcart-base-button__label").contains(' Checkout ').should('be.visible');

    })
})