import { test } from '../fixtures';
import checkoutData from '../../Test-Data/checkout-data.json';

for (const data of checkoutData) {

    test(data.name, async ({
        homePage,
        productPage,
        placeOrderPage,
        page
    }) => {
        await homePage.goto();
        await homePage.openProduct(
            'Samsung galaxy s6'
        );
        await productPage.addToCart();
        await page.waitForTimeout(3000);
        await productPage.openCart();
        await page.waitForTimeout(3000);
        await placeOrderPage.openPlaceOrder();
        await placeOrderPage.fillForm(data);
        await placeOrderPage.purchase();
    });
}
