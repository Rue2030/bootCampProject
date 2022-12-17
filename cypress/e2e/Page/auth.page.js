class contact{
    
    //Contact Selectors
    get registerBtn() { return ('#signInOrRegister') }
    get signUpTab() { return ('li:last-child') }
    get signInTab() { return ('li:first-child') }
    get emailField() { return ('[name="email"]') }
    get passwordField() { return ('[name="password"]') }
    get submitBtn() { return ('[name="submit"]') }
    get signOutBtn() { return ('#top-sign-out') }
    get errorMsg() { return ('.auth0-global-message-error>span') }
    get sendBtn() { return ('button.chakra-button.css-vs0e4t') }
    get successMsg1() { return ('#toast-1-title') }
    get successMsg2() { return ('#toast-1-description') }

    
    //SignUp Info Methods
    signUp(email, password){
        cy.get(this.signUpTab).click()
        cy.get(this.emailField).type(email)
        cy.get(this.passwordField).type(password)
        cy.get(this.submitBtn).click()
    }

    //Sigin Info Methods
    signIn(email, password){
        cy.get(this.emailField).type(email)
        cy.get(this.passwordField).type(password)
        cy.get(this.submitBtn).click()
    }

    //Signout method
    signOut(){
        cy.wait(3000)
        cy.get(this.signOutBtn).click()
    }
}
export default new contact()