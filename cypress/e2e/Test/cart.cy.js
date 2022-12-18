import billingPage from '../page/billing.page'
import addCart from '../Page/addToCart.page'
import auth from '../Page/auth.page'

describe('Cart test cases', () => {
    beforeEach(() => {
      cy.visit('/')
        
      //Login to account
      cy.get(auth.registerBtn).click();
      auth.signIn('rrrtester011@test.com', 'Password@1')

        cy.get(addCart.product1).should('be.visible');
        cy.wait(3000);
        cy.get(addCart.product1).click();
        cy.wait(3000);
        cy.get(addCart.addToCart).contains('Add To Cart').click();
        cy.get(billingPage.checkout).contains(' Checkout ').click();

    })
  
    it('Verify checkout without billing information', () => {

        cy.wait(3000);

        //click the continue button
        cy.get(billingPage.continueBtn).click();

        //aasert field validation
        cy.get(billingPage.errorMsg).contains(' This field is required ').should('be.visible');
    })

    it('Verify the check out process', () => {

        //enter billing info
        billingPage.billing('Dave Lee', 'dave@test.com', 'WestKings', 'Street', 'Bran', 'Kingston', '58375');

        //enter credit card info
        cy.iframe(billingPage.payment).find('#card-number').type('4242 4242 4242 4242')
        cy.iframe(billingPage.payment).find('#expiry-date').type('1211')
        cy.iframe(billingPage.payment).find('#cvv').type('424')
        cy.get(billingPage.continueBtn).click()

        //assertion
        // cy.wait(3000);
        // cy.get('[src="https://ui-automation-camp.vercel.app/"]').its('0.contentDocument.body').should('not.be.empty')
        //cy.iframe(billingPage.body).find(billingPage.thankYou).should('contain', 'Thank you for your order');
        // cy.get(billingPage.itemList).should('contain', ' Quality Fitted Hat ');
        // cy.get(billingPage.itemList).should('contain', ' $30.00 ');
        // cy.get(billingPage.billingInfo).should('contain', ' Dave Lee ');
        // cy.get(billingPage.billingInfo).should('contain', 'dave@test.com');
        // cy.get(billingPage.itemTotal).should('contain', ' $30.00 ');
        
        

    })

    it('Verify the can navigate but from Details page', () => {

        cy.wait(3000);

        //enter billing info
        billingPage.billing('Dave Lee', 'dave@test.com', 'WestKings', 'Street', 'Bran', 'Kingston', '58375');

        //enter credit card info
        cy.iframe(billingPage.payment).find('#card-number').type('4242 4242 4242 4242')
        cy.iframe(billingPage.payment).find('#expiry-date').type('1211')
        cy.iframe(billingPage.payment).find('#cvv').type('424')
        cy.get(billingPage.continueBtn).click()

        //click the back to home button
        cy.get(billingPage.backBtn).click()

        //assert 
        cy.get(billingPage.itemText).contains('Quality Fitted Hat').should('be.visible');
        cy.get(billingPage.itemText).contains('Back to products').should('be.visible');
    })
})