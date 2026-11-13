class LoginPage {

    credentials = {
        allusers: [
            'standard_user',
            'locked_out_user',
            'problem_user',
            'performance_glitch_user',
            'error_user',
            'visual_user',
        ],
        password: 'secret_sauce',
        invalidPassword: 'wrong_password',
    };
    get inputUsername() { return $('#user-name'); }
    get inputPassword() { return $('#password'); }
    get btnSubmit() { return $('#login-button'); }
    get titleHeader() { return $('.title'); }
    get errorMessage() { return $('[data-test="error"]'); }

    async open() {
        await browser.url('https://www.saucedemo.com/');
    }
// Hi
    async userLogin(username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }
}

module.exports = new LoginPage();