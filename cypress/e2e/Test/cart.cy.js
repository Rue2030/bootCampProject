import billingPage from '../page/billing.page'

describe('Cart test cases', () => {
    beforeEach(() => {
      cy.visit('/')
        
      //Login to account
        cy.get("#login-text").should('contain', 'Welcome to the Automation Camp Store');
        cy.get("#signInOrRegister").click();    
        cy.get("[name='email']").type("rrrtester011@test.com");
        cy.get("[name='password']").type("Password@1");
        cy.get("[name='submit']").click();

        cy.get("#product-0").should('be.visible');
        cy.wait(3000);
        cy.get("#product-0").click();
        cy.wait(3000);
        cy.get("#add-to-cart").contains('Add To Cart').click();
        cy.get("[type='button']").contains(' Checkout ').click();

    })
  
    it('Verify checkout without billing information', () => {

        cy.wait(3000);

        cy.get(billingPage.continueBtn).click();

        cy.get(billingPage.errorMsg).contains(' This field is required ').should('be.visible');
    })

    it('Verify the check out process', () => {

        billingPage.billing('Dave Lee', 'dave@test.com', 'WestKings', 'Street', 'Bran', 'Kingston', '58375');

        cy.iframe(billingPage.payment).find('#card-number').type('4242 4242 4242 4242')
        cy.iframe(billingPage.payment).find('#expiry-date').type('1211')
        cy.iframe(billingPage.payment).find('#cvv').type('424')

        cy.get(billingPage.continueBtn).click()

        //assertion
        // cy.iframe('[class="aut-iframe"]').find(billingPage.thankYou).should('contain', 'Thank you for your order');
        // cy.iframe('[class="aut-iframe"]').find(billingPage.itemList).should('contain', ' Quality Fitted Hat ');
        // cy.iframe('[class="aut-iframe"]').find(billingPage.itemList).should('contain', ' $30.00 ');
        // cy.iframe('[class="aut-iframe"]').find(billingPage.billingInfo).should('contain', ' Dave Lee ');
        // cy.iframe('[class="aut-iframe"]').find(billingPage.billingInfo).should('contain', 'dave@test.com');
        // cy.iframe('[class="aut-iframe"]').find(billingPage.itemTotal).should('contain', ' $30.00 ');
        
        

    })

    it('Verify the can navigate but from Details page', () => {

        cy.wait(3000);

        billingPage.billing('Dave Lee', 'dave@test.com', 'WestKings', 'Street', 'Bran', 'Kingston', '58375');

        cy.iframe(billingPage.payment).find('#card-number').type('4242 4242 4242 4242')
        cy.iframe(billingPage.payment).find('#expiry-date').type('1211')
        cy.iframe(billingPage.payment).find('#cvv').type('424')

        cy.get(billingPage.continueBtn).click()

        cy.get(billingPage.backBtn).click()

        cy.get('.chakra-heading').contains('Quality Fitted Hat').should('be.visible');
        cy.get('.chakra-heading').contains('Back to products').should('be.visible');
    })
})