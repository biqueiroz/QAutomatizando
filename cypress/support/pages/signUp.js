import { faker } from '@faker-js/faker/locale/pt_BR';

const user = {
    password: 'teste@123',
    failpassword: 'teste123',
}

class signupPage {

    go(){
        cy.visit('/')
    }

    clickSignup() {
        cy.contains('Create an Account').click()
    }
    
    verificationUrl() {
        cy.url()
        .should('include', '/customer/account/create/')
    }

    userData() {
        cy.get('input[id="firstname"]').type(faker.person.firstName())
        cy.get('input[id="lastname"]').type(faker.person.lastName())
        cy.get('input[class="checkbox"]').first().click()
        cy.get('input[id="assistance_allowed_checkbox"]').click()
    }

    userSignin() {
        cy.get('input[id="email_address"]').type(faker.internet.email())
        cy.get('input[id="password"]').type(user.password)
        cy.get('input[id="password-confirmation"]').type(user.password)
    }

    submitForm() {
        cy.get('button').contains('Create an Account')
        .click()
    }

    validationRegister() {
        cy.get('span[class="logged-in"]').contains('Welcome')
            .should('be.visible')
        cy.get('div[class="page messages"]').contains('Thank you for registering with Main Website Store.')
            .should('be.visible')
    }

    requiredField() {
        cy.get('div[class="mage-error"]').first().contains('This is a required field.')
            .should('be.visible')
        cy.get('div[id="lastname-error"]').contains('This is a required field.')
            .should('be.visible')
    }
}

export default new signupPage();