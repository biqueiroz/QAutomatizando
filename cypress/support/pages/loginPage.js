import LoginElements from "../elements/loginElements";

const loginEl = new LoginElements();

const login = {
    email: 'roni_cost@example.com',
    passwrd: 'roni_cost3@example.com',
    invalid: 'teste@teste',
}

const messages = {
    signIn: 'Sign In',
    verificationPage: 'Customer Login',
    required: 'This is a required field.',
    invalidEmail: 'Please enter a valid email address (Ex: johndoe@domain.com).',
}

class loginPage {

    go(){
        cy.visit('/')
    }

    clickSignin() {
        cy.contains(messages.signIn).click()
    }
    
    verificationUrl() {
        cy.url()
        .should('include', '/customer/account/login')
    }

    verificationPage() {
        cy.contains(messages.verificationPage).should('be.visible')
    }

    userSignin() {
        cy.get(loginEl.email()).type(login.email)
        cy.get(loginEl.password()).type(login.passwrd)
    }

    emailInvalid() {
        cy.get(loginEl.email()).type(login.invalid)
        cy.get(loginEl.password()).type(login.passwrd)
    }

    submitLogin() {
        cy.wait(2000)
        cy.get(loginEl.submit()).contains(messages.signIn)
        .click()
    }

    requiredField() {
        cy.get(loginEl.requiredField()).first().contains(messages.required)
            .should('be.visible')
        cy.get(loginEl.requiredPass()).contains(messages.required)
            .should('be.visible')
    }

    requiredEmail() {
        cy.get(loginEl.requiredField()).first().contains(messages.invalidEmail)
            .should('be.visible')
    }
}

export default new loginPage();