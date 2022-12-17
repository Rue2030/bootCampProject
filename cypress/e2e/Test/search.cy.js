describe('Search test cases', () => {
    beforeEach(() => {
      cy.visit('/')
        
      //Login to account
        cy.get("#login-text").should('contain', 'Welcome to the Automation Camp Store');
        cy.get("#signInOrRegister").click();    
        cy.get("[name='email']").type("rrrtester011@test.com");
        cy.get("[name='password']").type("Password@1");
        cy.get("[name='submit']").click();

    })
  
    it('Verify user can search valid item name', () => {

        cy.get('#search').type('Quality Trucker Hat');

        cy.get('.css-12qzrsi').should('contain', 'Quality Trucker Hat');
    })

    it('Verify user can search invalid item name', () => {

        cy.get('#search').type('No Data');

        cy.get('.css-12qzrsi').should('be.empty');

    })

    it('Verify user can search filtered option', () => {

        cy.get('#category').select(1);
        cy.get('#search').type('Quality Sweatshirt');
        cy.get('.css-12qzrsi').should('contain', 'Quality Sweatshirt');

        cy.get('#search').clear();
        cy.get('#search').type('Quality Trucker Hat');
        cy.get('.css-12qzrsi').should('be.empty');
    })
})