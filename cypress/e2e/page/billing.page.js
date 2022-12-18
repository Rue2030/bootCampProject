class Billing{
    
    //Billing Selectors
    get userNameField() { return ('[name="name"]') }
    get emailField() { return ('[name="email"]') }
    get address1Field() { return ('[name="address1"]') }
    get address2Field() { return ('[name="address2"]') }
    get cityField() { return ('[name="city"]') }
    get countryField() { return ('[name="country"]') }
    get countryOption() { return ('[value="JM"]') }
    get provinceField() { return ('[name="province"]') }
    get postalField() { return ('[name="postalCode"]') }
    get continueBtn() { return ('.snipcart-button-primary') }
    get errorMsg() { return ('.snipcart-field-error') }
    get payment() { return ('.snipcart-payment-card-form iframe') }
    get backBtn() { return ('.snipcart-modal__close-title') }
    get itemList() { return ('.snipcart-cart-summary-items-list iframe') }
    get billingInfo() { return ('.snipcart-checkout-step__col iframe') }
    get itemTotal() { return ('.snipcart-summary-fees__item iframe') }
    get thankYou() { return ('snipcart__font--subtitle iframe') }
    
    

    

    //Billing Info Methods
    billing(fullname, email, address1, address2, city, province, postalCode){
        cy.get(this.userNameField).type(fullname)
        cy.get(this.emailField).type(email)
        cy.get(this.address1Field).type(address1)
        cy.get(this.address2Field).type(address2)
        cy.get(this.cityField).type(city)
        cy.get(this.postalField).type(postalCode)
        cy.get(this.countryField).select(0)
        cy.get(this.provinceField).select(0)
        cy.get(this.continueBtn).click()
    }
}
export default new Billing()