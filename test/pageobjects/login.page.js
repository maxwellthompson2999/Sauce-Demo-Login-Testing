class LoginPage {
    // 1. Define selectors for SauceDemo elements
    get inputUsername() {
        return $('#user-name');
    }

    get inputPassword() {
        return $('#password');
    }

    get btnSubmit() {
        return $('#login-button');
    }

    get titleHeader() {
        return $('.title');
    }

    // 2. Define action methods
    async open() {
        await browser.url('https://www.saucedemo.com/');
    }

    async userLogin(username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }
}

module.exports = new LoginPage();