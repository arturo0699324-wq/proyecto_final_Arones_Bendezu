import { test as base } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { ProductPage } from '../pages/ProductPage';
import { CartPage } from '../pages/CartPage';
import { PlaceOrderPage } from '../pages/PlaceOrderPage';

export const test = base.extend({

    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },

    homePage: async ({ page }, use) => {
        await use(new HomePage(page));
    },

    productPage: async ({ page }, use) => {
        await use(new ProductPage(page));
    },

    cartPage: async ({ page }, use) => {
        await use(new CartPage(page));
    },
    placeOrderPage: async ({ page }, use) => {
    await use(new PlaceOrderPage(page));
    },

    credentials: async ({}, use) => {
        await use({
            username: process.env.LOGIN_USER,
            password: process.env.LOGIN_PASSWORD
        });
    }

});

export { expect } from '@playwright/test';