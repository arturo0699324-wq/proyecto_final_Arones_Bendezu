import { test, expect } from '../fixtures';
import dataCart from '../../Test-Data/data-cart.json';

for (const product of dataCart) {

    test(product.name, async ({
        homePage,
        productPage,
        cartPage,
        page
    }) => {

        await homePage.goto();
        await homePage.openProduct(
            product.productName
        );
        await productPage.addToCart();
        await page.waitForTimeout(3000);
        await productPage.openCart();
        await page.waitForTimeout(3000);
        await expect(
            cartPage.rowFor(product.productName)
        ).toBeVisible();
    });

}