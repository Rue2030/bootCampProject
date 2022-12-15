describe('Authentication', () => {
    beforeEach(() => {
      cy.visit('/')
    })
  
    it('Verify the user can sign in with email and password', () => {

        //Signing up for an account
        cy.get("#login-text").should('contain', 'Welcome to the Automation Camp Store');
        cy.get("#signInOrRegister").click();

        cy.get(".auth0-lock-tabs").contains("Sign Up").click();
        
        cy.get("[name='email']").type("rrrtester011@test.com");
        cy.get("[name='password']").type("Password@1");
        cy.get("[name='submit']").click();
        cy.get("#top-sign-out").click();


        //Log into Application after signing up
        cy.get("#signInOrRegister").click();

        cy.get(".auth0-lock-tabs").contains("Log In").click();
        
        cy.get("[name='email']").type("rrrtester011@test.com");
        cy.get("[name='password']").type("Password@1");
        cy.get("[name='submit']").click();

        //assertions
        cy.get(".chakra-heading").should('contain', 'Automation Camp Store').should('be.visible');
        cy.get(".chakra-heading").should('contain', 'Products').should('be.visible');
        cy.get("#top-sign-out").should('be.visible');

        cy.get("#top-sign-out").click();
        
    })

    it('Verify the user cant sign in with invalid email and password', () => {

        //Log into Application after signing up
        cy.get("#login-text").should('contain', 'Welcome to the Automation Camp Store');
        cy.get("#signInOrRegister").click();

        cy.get(".auth0-lock-tabs").contains("Log In").click();
        
        cy.get("[name='email']").type("oka@gmail.com");
        cy.get("[name='password']").type("password");
        cy.get("[name='submit']").click();

        //error message assertion
        cy.get(".auth0-global-message-error>span").should('contain', 'Wrong email or password.');
    
    })

    it('Verify the user can sign up with email and password', () => {

        //Sign Up with email and password
        cy.get("#login-text").should('contain', 'Welcome to the Automation Camp Store');
        cy.get("#signInOrRegister").click();

        cy.get(".auth0-lock-tabs").contains("Sign Up").click();
        
        cy.get("[name='email']").type("wasss@test.com");
        cy.get("[name='password']").type("Password@1");

        cy.get("[name='submit']").click();

        //assertions to ensure user is signed up
        cy.get(".chakra-heading").should('contain', 'Automation Camp Store').should('be.visible');
        cy.get(".chakra-heading").should('contain', 'Products').should('be.visible');
        cy.get("#top-sign-out").should('be.visible');
        cy.get("#top-contact").should('be.visible');

        cy.get("#top-sign-out").click();
        

    })
})