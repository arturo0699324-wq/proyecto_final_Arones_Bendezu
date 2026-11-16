import { test } from '../fixtures';
import checkoutData from '../../Test-Data/checkout-data.json';

for (const data of checkoutData) {

    test(data.name, async ({
    homePage,
    productPage,
    placeOrderPage,
    billingPage,
    paymentPage
    }) => {

        await homePage.goto();

        await homePage.openProduct(
            'Samsung galaxy s6'
        );
        await productPage.addToCart();
        await productPage.openCart();
        await placeOrderPage.openPlaceOrder();
        await billingPage.fillBilling(data);
        await paymentPage.fillPayment(data);
        await paymentPage.purchase();
        });
    }