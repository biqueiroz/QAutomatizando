class LoginElements {
    email = () => 'input[id="email"]';
    password = () => 'input[id="pass"]';
    submit = () => 'button';
    requiredField = () => 'div[class="mage-error"]';
    requiredPass = () => 'div[id="pass-error"]';
}

export default LoginElements;