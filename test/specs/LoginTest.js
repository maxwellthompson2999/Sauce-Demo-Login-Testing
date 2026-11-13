const LoginPage = require('../pageobjects/LoginPage');

describe('Login Page Positive and Negative Tests', () => {

    it('should positively test login with valid credentials', async () => {

        const validUsers = LoginPage.credentials.allusers.filter(user => user !== 'locked_out_user'); // Exclude locked out user for positive test
        for (const user of validUsers) {
            await LoginPage.open();
            await LoginPage.userLogin(user, LoginPage.credentials.password);

            await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
            await expect(LoginPage.titleHeader).toHaveText('Products');
        }
    });
// Hi there
    it('should negatively test login with invalid credentials', async () => {
        for (const user of LoginPage.credentials.allusers) {
            await LoginPage.open();
            await LoginPage.userLogin(user, LoginPage.credentials.invalidPassword);

            await expect(LoginPage.errorMessage).toBeDisplayed();
            await expect(LoginPage.errorMessage).toHaveText(expect.stringContaining('Username and password do not match any user in this service'));
        }
    });

    it('should show error for locked out user', async () => {
        await LoginPage.open();
        await LoginPage.userLogin('locked_out_user', LoginPage.credentials.password);

        await expect(LoginPage.errorMessage).toBeDisplayed();
        await expect(LoginPage.errorMessage).toHaveText(expect.stringContaining('Sorry, this user has been locked out.'));
    });
});