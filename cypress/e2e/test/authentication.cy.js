import { faker } from '@faker-js/faker';
import auth from '../Page/auth.page'

//create random emails for signup
const randomEmail = faker.internet.email();
const randomEmail2 = faker.internet.email();

describe('Authentication', () => {
    beforeEach(() => {
      cy.visit('/')

      cy.get("#login-text").should('contain', 'Welcome to the Automation Camp Store');
      cy.get(auth.registerBtn).click();
    })
  
    it('Verify the user can sign in with email and password', () => {

        //Signing up for an account
        auth.signUp(randomEmail, 'Password@1');

        //signout
        auth.signOut();

        //Log into Application after signing up
        cy.get("#signInOrRegister").click();
        auth.signIn(randomEmail, 'Password@1');

        //assertions
        cy.get(".chakra-heading").should('contain', 'Automation Camp Store').should('be.visible');
        cy.get(".chakra-heading").should('contain', 'Products').should('be.visible');
        cy.get(auth.signOutBtn).should('be.visible');

        //cy.get("#top-sign-out").click();
        auth.signOut();
        
    })

    it('Verify the user cant sign in with invalid email and password', () => {

        //Log into Application after signing up
        auth.signIn('oka@gmail.com', 'Password');

        //error message assertion
        cy.get(auth.errorMsg).should('contain', 'Wrong email or password.');
    
    })

    it('Verify the user can sign up with email and password', () => {

        //Sign Up with email and password
        auth.signUp(randomEmail2, 'Password@1');

        //assertions to ensure user is signed up
        cy.get(".chakra-heading").should('contain', 'Automation Camp Store').should('be.visible');
        cy.get(".chakra-heading").should('contain', 'Products').should('be.visible');
        cy.get(auth.signOutBtn).should('be.visible');
        cy.get("#top-contact").should('be.visible');

        //signout
        auth.signOut()
        
    })
})