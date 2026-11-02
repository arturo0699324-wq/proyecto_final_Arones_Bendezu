export class ProductPage {

    constructor(page) {

        this.page = page;

        this.addButton = page.getByRole('link', {
            name: 'Add to cart'
        });

        this.cartLink = page.locator('#cartur');

    }

    async addToCart() {

        this.page.once('dialog', async dialog => {
            await dialog.accept();
        });

        await this.addButton.click();

    }

    async openCart() {

        await this.cartLink.click();

    }

}