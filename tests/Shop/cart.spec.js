import { test, expect } from '../fixtures';

test('agregar producto al carrito', async ({
    homePage,
    productPage,
    cartPage,
    page
}) => {

    const productName = 'Samsung galaxy s6';

    await homePage.goto();

    await homePage.openProduct(productName);

    await productPage.addToCart();

    await page.waitForTimeout(3000);

    await productPage.openCart();

    await page.waitForTimeout(3000);

    await expect(
        cartPage.rowFor(productName)
    ).toBeVisible();

})