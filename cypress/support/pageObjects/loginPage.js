class LoginPage {
    elements = {
        usernameInput: () => cy.getByData('username'),
        passwordInput: () => cy.getByData('password'),
        loginButton: () => cy.getByData('login-button'),
        errorMessage: () => cy.getByData('error')
    }

    login(username, password) {
        this.elements.usernameInput().type(username);
        this.elements.passwordInput().type(password);
        this.elements.loginButton().click();
    }
}

export const loginPage = new LoginPage();