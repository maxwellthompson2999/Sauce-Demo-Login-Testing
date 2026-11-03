class LoginPage {
    credentials = {
        users: ['problem_user', 'error_user', 'visual_user', 'standard_user',],
        password: 'secret_sauce'
    };


    // 1. selectors for Sauce
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

    // 2. action methods
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