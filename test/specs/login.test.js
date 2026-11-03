const LoginPage = require('../pageobjects/login.page');
const ProductsPage = require('../pageobjects/products.page');

describe('SauceDemo Positive Login', () => {

    it('should test login loop as well as add item to cart', async () => {
        for (const users of LoginPage.credentials.users) {
            await LoginPage.open();

            await LoginPage.userLogin(users, LoginPage.credentials.password);

            await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
            await expect(ProductsPage.titleHeader).toHaveText('Products');
        }

        await ProductsPage.addToCart();

        const cartBadge = await $('.shopping_cart_badge');
        await expect(cartBadge).toHaveText('1');
    });

});