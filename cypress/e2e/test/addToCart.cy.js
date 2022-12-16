describe('Add to Cart', () => {
    beforeEach(() => {
      cy.visit('/')
        
      //Login to account
        cy.get("#login-text").should('contain', 'Welcome to the Automation Camp Store');
        cy.get("#signInOrRegister").click();    
        cy.get("[name='email']").type("rrrtester011@test.com");
        cy.get("[name='password']").type("Password@1");
        cy.get("[name='submit']").click();

    })
  
    it('Verify user can add single item to cart', () => {

        //Signing up for an account
        cy.get(".chakra-heading").should('contain', 'Products');

        cy.get("#product-0").should('be.visible');

        cy.wait(3000);

        cy.get("#product-0 #add-to-cart").contains("Add To Cart").click();
 
        cy.get(".snipcart-cart-header").contains(' Cart summary ').should('be.visible');
        cy.get(".snipcart-item-line__title").should('contain', ' Quality Fitted Hat ');
        cy.get(".snipcart-item-quantity__total-price").should('contain', ' $30.00 ');
        cy.get(".snipcart-base-button__label").contains(' Checkout ').should('be.visible');

        
    })

    it('Verify the user can add multiple icon to cart', () => {

        cy.get(".chakra-heading").should('contain', 'Products');

        cy.get("#product-0").should('be.visible');

        cy.wait(3000);

        cy.get("#product-0").contains("Add To Cart").click();

        cy.wait(3000);

        cy.get(".snipcart-modal__close-title").contains(" Continue shopping ").click();

        cy.get("#product-1").should('be.visible');

        cy.wait(3000);

        cy.get("#product-1 #add-to-cart").contains("Add To Cart").click();

        cy.get(".snipcart-cart-header").contains(' Cart summary ').should('be.visible');
        cy.get(".snipcart-item-line__product").should('contain', ' Quality Fitted Hat ');
        cy.get(".snipcart-item-quantity__total-price").should('contain', ' $30.00 ');
       
        cy.get(".snipcart-item-line__product").should('contain', ' Quality Trucker Hat ');
        cy.get(".snipcart-item-quantity__total-price").should('contain', ' $24.00 ');
        cy.get(".snipcart-base-button__label").scrollIntoView().contains(' Checkout ').should('be.visible');

    })

    it('Verify and item can be added to cart from the Product description page', () => {

        cy.get(".chakra-heading").should('contain', 'Products');

        cy.get("#product-2").should('be.visible');

        cy.wait(3000);

        cy.get("#product-2").click();

        cy.get(".chakra-heading").contains('Quality Mousepad').should('be.visible');
        cy.get(".chakra-stack").contains('JIALONG New Upgraded Version Large Mouse Pad Desk Mat Comfortable Mousepad with Personalized Design Extended Size 35.4 X 15.7X 0.12 inches for Laptop, Computer and PC ').should('be.visible');
        cy.get(".css-1ccau2i").contains('computer').should('be.visible');

        cy.get("#add-to-cart").contains("Add To Cart").click();

        cy.get(".snipcart-cart-header").should('be.visible');
        cy.get(".snipcart-item-line__header").should('contain', ' Quality Mousepad ');
        cy.get(".snipcart-item-quantity__total-price").should('contain', ' $20.00 ');
        cy.get(".snipcart-base-button__label").contains(' Checkout ').should('be.visible');

    })
})