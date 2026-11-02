const LoginPage = require('../pageobjects/login.page');

describe('SauceDemo Positive Login', () => {

    it('should successfully log in standard_user with secret_sauce', async () => {
        // Step 1: Navigate to SauceDemo
        await LoginPage.open();

        // Step 2: Log in using valid standard_user credentials
        await LoginPage.userLogin('standard_user', 'secret_sauce');

        // Step 3: Assert redirect to inventory page and check products header
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        await expect(LoginPage.titleHeader).toHaveText('Products');
    });

});