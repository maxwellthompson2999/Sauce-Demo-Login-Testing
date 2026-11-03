const LoginPage = require('../pageobjects/login.page');

describe('SauceDemo Positive Login', () => {

    it('should successfully log in standard_user with secret_sauce', async () => {
        for (const users of LoginPage.credentials.users) {
            await LoginPage.open();

            await LoginPage.userLogin(users, LoginPage.credentials.password);

            await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
            await expect(LoginPage.titleHeader).toHaveText('Products');
        }
    });

});