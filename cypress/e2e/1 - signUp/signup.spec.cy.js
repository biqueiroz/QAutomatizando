import signUp from '../../support/pages/signUp';

describe('Create New Customer Account', function() {

    it('Create a new account successfully', function() {
        signUp.go();
        signUp.clickSignup();
        signUp.verificationUrl();
        signUp.userData();
        signUp.userSignin();
        signUp.submitForm();
        signUp.validationRegister();
    })

    it('Registration without required fields', function(){
        signUp.go();
        signUp.clickSignup();
        signUp.verificationUrl();
        signUp.userSignin();
        signUp.submitForm();
        signUp.requiredField();

    })
})