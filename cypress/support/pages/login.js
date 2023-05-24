const login = {
    email: 'roni_cost@example.com',
    passwrd: 'roni_cost3@example.com',
    invalid: 'teste@teste'
}

class loginPage {

    go(){
        cy.visit('/')
    }

    clickSignin() {
        cy.contains('Sign In').click()
    }
    
    verificationUrl() {
        cy.url()
        .should('include', '/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvMi5hbGdvbGlhLmNvbS8%2C/')
    }

    verificationPage() {
        cy.contains('Customer Login').should('be.visible')
    }

    userSignin() {
        cy.get('input[id="email"]').type(login.email)
        cy.get('input[id="pass"]').type(login.passwrd)
    }

    emailInvalid() {
        cy.get('input[id="email"]').type(login.invalid)
        cy.get('input[id="pass"]').type(login.passwrd)
    }

    submitLogin() {
        cy.wait(3000)
        cy.get('button').contains('Sign In')
        .click()
    }

    requiredField() {
        cy.get('div[class="mage-error"]').first().contains('This is a required field.')
            .should('be.visible')
        cy.get('div[id="pass-error"]').contains('This is a required field.')
            .should('be.visible')
    }

    requiredEmail() {
        cy.get('div[class="mage-error"]').first().contains('Please enter a valid email address (Ex: johndoe@domain.com).')
            .should('be.visible')
    }
}

export default new loginPage();