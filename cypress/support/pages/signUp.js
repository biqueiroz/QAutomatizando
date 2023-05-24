import { faker } from '@faker-js/faker/locale/pt_BR';

const user = {
    firstname: faker.person.firstName(),
    lastname: faker.person.lastName(),
    email: faker.internet.email(),
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
        cy.get('input[id="firstname"]').type(user.firstname)
        cy.get('input[id="lastname"]').type(user.lastname)
        cy.get('input[class="checkbox"]').first().click()
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
        cy.get('.box-information > .box-content > p').contains(user.firstname + ' ' + user.lastname)
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