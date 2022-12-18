import contactData from '../Data/contact.data'
import contactPage from '../Page/contact.page'
import auth from '../Page/auth.page'

describe('Contact Form test cases', () => {
    beforeEach(() => {
      cy.visit('/')
        
      //Login to account
        //Login to account
      cy.get(auth.registerBtn).click();
      auth.signIn('rrrtester011@test.com', 'Password@1')

      //navigate to contact page
      cy.get(contactPage.contactNav).click();

    })
  
    it('Verify contact for validation', () => {

        //click the submit button
        cy.get(contactPage.sendBtn).click();
        cy.wait(3000)

        //assert required fields
        cy.get(contactPage.errorMsg).should('contain', 'Field is required!');
    })

    it('Verify submitting contact form', () => {
        
        //complate contact form
        contactPage.contact('Dave', 'Winters', 'winter@gmail.com', 'Help', 'I need help in fixing issue with login')

        //assert form was submited successfully
        cy.get(contactPage.successMsg1).should('contain', 'Message Sent!');
        cy.get(contactPage.successMsg2).should('contain', 'Your message has been sent!');
    })


    it('Verify form for user with an invalid email', () => {

        //complete contant form
        cy.get(contactPage.firstNameField).type('Wayne');
        cy.get(contactPage.lastNameField).type('Barry');
        cy.get(contactPage.emailField).type('barry@.');
        cy.get(contactPage.subjectField).type('Thanks');
        cy.get(contactPage.messageField).type('Thank You');
        cy.get(contactPage.sendBtn).click();

        //assert invalid email message is displayed
        cy.get(contactPage.errorMsg).should('contain', 'Email is invalid');

    })

    
})