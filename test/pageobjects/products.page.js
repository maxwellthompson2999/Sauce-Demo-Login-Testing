class ProductsPage {

    get btnAddToCart() {
        return $('#add-to-cart-sauce-labs-backpack');
    }

    get titleHeader() {
        return $('.title');
    }

    async addToCart() {
        await this.btnAddToCart.click();
    }

    // Functions (actions like addToCart) go here

}

module.exports = new ProductsPage();