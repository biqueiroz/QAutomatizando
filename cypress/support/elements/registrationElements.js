class RegistrationElements {
    firstName = () => 'input[id="firstname"]';
    lastName = () => 'input[id="lastname"]';
    submitUserData = () => 'input[class="checkbox"]';
    email = () => 'input[id="email_address"]';
    password = () => 'input[id="password"]';
    confirmPassword = () => 'input[id="password-confirmation"]';
    validationUser = () => '.box-information > .box-content > p';
    validationMessage = () => '.message-success';
    requiredField = () => 'div[class="mage-error"]';
    invalidError = () => '.message-error';
}

export default RegistrationElements;