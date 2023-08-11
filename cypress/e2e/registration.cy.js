import Registration from '../support/pages/registrationPage';


describe('Create New Customer Account', function() {


    it('Create a new account successfully', function() {
        Registration.go();
        Registration.clickSignup();
        Registration.verificationUrl();
        Registration.userData();
        Registration.userSignin();
        Registration.submitForm();
        Registration.validationRegister();
    })

    it('Registration without required fields', function(){
        Registration.go();
        Registration.clickSignup();
        Registration.verificationUrl();
        Registration.userData();
        Registration.submitForm();
        Registration.requiredField();
    })
})