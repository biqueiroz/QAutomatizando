import { faker } from '@faker-js/faker/locale/pt_BR';
import RegistrationElements from '../../support/elements/registrationElements';

const signupEl = new RegistrationElements();

const user = {
    firstname: faker.person.firstName(),
    lastname: faker.person.lastName(),
    email: faker.internet.email(),
    password: 'teste@123',
    failpassword: 'teste123',
}

const messages = {
    newAccount: 'Create an Account',
    registering: 'Thank you for registering with Main Website Store.',
    required: 'This is a required field.',
    invalidForm: 'Invalid Form Key. Please refresh the page.',
}

class Registration {

    go(){
        cy.visit('/')
    }

    clickSignup() {
        cy.contains(messages.newAccount).click()
    }
    
    verificationUrl() {
        cy.url()
        .should('include', '/customer/account/create/')
    }

    userData() {
        cy.get(signupEl.firstName()).type(user.firstname)
        cy.get(signupEl.lastName()).type(user.lastname)
        cy.get(signupEl.submitUserData()).first().check()
    }

    userSignin() {
        cy.get(signupEl.email()).type(user.email)
        cy.get(signupEl.password()).type(user.password)
        cy.get(signupEl.confirmPassword()).type(user.password)
    }

    submitForm() {
        cy.get('button').contains(messages.newAccount)
        .click()
    }

    validationRegister() {
        cy.get(signupEl.validationUser()).contains(user.firstname + ' ' + user.lastname)
            .should('be.visible')
        cy.get(signupEl.validationMessage()).contains(messages.registering)
            .should('be.visible')
    }

    requiredField() {
        cy.get(signupEl.requiredField()).first().contains(messages.required)
            .should('be.visible')
    }
}

export default new Registration();