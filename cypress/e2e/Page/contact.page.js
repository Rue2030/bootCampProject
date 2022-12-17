class contact{
    
    //Contact Selectors
    get firstNameField() { return ('#firstName') }
    get lastNameField() { return ('#lastName') }
    get emailField() { return ('#email') }
    get subjectField() { return ('#subject') }
    get contactNav() { return ('#top-contact') }
    get messageField() { return ('#message') }
    get errorMsg() { return ('.chakra-form__error-message') }
    get sendBtn() { return ('button.chakra-button.css-vs0e4t') }
    get successMsg1() { return ('#toast-1-title') }
    get successMsg2() { return ('#toast-1-description') }

    
    

    // get provinceField() { return ('[name="province"]') }
    // get postalField() { return ('[name="postalCode"]') }
    // get continueBtn() { return ('.snipcart-button-primary') }
    // get errorMsg() { return ('.snipcart-field-error') }
    // get payment() { return ('.snipcart-payment-card-form iframe') }
    // get backBtn() { return ('.snipcart-modal__close-title') }
    // get itemList() { return ('.snipcart-cart-summary-items-list iframe') }
    // get billingInfo() { return ('.snipcart-checkout-step__col iframe') }
    // get itemTotal() { return ('.snipcart-summary-fees__item iframe') }
    // get thankYou() { return ('snipcart__font--subtitle iframe') }
    
    
    //Contact Info Methods
    contact(firstname, lastname, email, subject, message){
        cy.get(this.firstNameField).type(firstname)
        cy.get(this.lastNameField).type(lastname)
        cy.get(this.emailField).type(email)
        cy.get(this.subjectField).type(subject)
        cy.get(this.messageField).type(message)
        cy.get(this.sendBtn).click()
    }
}
export default new contact()