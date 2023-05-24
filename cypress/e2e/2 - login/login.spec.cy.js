import login from '../../support/pages/login';

describe('Login with a register user', function() {

    // it('Login successfully', function() {
    //     login.go();
    //     login.clickSignin();
    //     login.verificationUrl();
    //     login.verificationPage();
    //     login.userSignin();
    //     login.submitLogin();

    // })

    it('Login without data', function() {
        login.go();
        login.clickSignin();
        login.verificationUrl();
        login.verificationPage();
        login.submitLogin();
        login.requiredField();
    })

    it('Login with invalid email', function() {
        login.go();
        login.clickSignin();
        login.verificationUrl();
        login.verificationPage();
        login.emailInvalid();
        login.submitLogin();
        login.requiredEmail();    
    })



})