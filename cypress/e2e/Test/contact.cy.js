import contactData from '../Data/contact.data'
import contactPage from '../Page/contact.page'

describe('Search test cases', () => {
    beforeEach(() => {
      cy.visit('/')
        
      //Login to account
        cy.get("#login-text").should('contain', 'Welcome to the Automation Camp Store');
        cy.get("#signInOrRegister").click();    
        cy.get("[name='email']").type("rrrtester011@test.com");
        cy.get("[name='password']").type("Password@1");
        cy.get("[name='submit']").click();
        cy.get(contactPage.contactNav).click();

    })
  
    it('Verify contact for validation', () => {

        cy.get(contactPage.sendBtn).click();
        cy.wait(3000)
        cy.get(contactPage.errorMsg).should('contain', 'Field is required!');
    })

    it('Verify submitting contact form', () => {
        
        contactPage.contact('Dave', 'Winters', 'winter@gmail.com', 'Help', 'I need help in fixing issue with login')
        cy.get(contactPage.successMsg1).should('contain', 'Message Sent!');
        cy.get(contactPage.successMsg2).should('contain', 'Your message has been sent!');
    })


    it.skip('Verify form for without an email', () => {

        cy.get(contactPage.firstNameField).should(contactData.message);
        cy.get(contactPage.lastNameField).should(contactData.message);
        cy.get(contactPage.emailField).should(contactData.message);
        cy.get(contactPage.subjectField).should(contactData.message);
        cy.get(contactPage.messageField).type(contactData.message);
        cy.get(contactPage.sendBtn).click();

    })

    
})