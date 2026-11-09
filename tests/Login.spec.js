import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import dataLogin from '../Test-Data/data-login.json';

test('inicio de sesion', async ({ page }) => {

    await page.goto('/');

    const loginPage = new LoginPage(page);

    await loginPage.login(
        process.env.LOGIN_USER,
        process.env.LOGIN_PASSWORD
    );

    await expect(
        page.locator('#nameofuser')
    ).toBeVisible();

});

for (const login of dataLogin) {

    test(login.name, async ({ page }) => {

        const loginPage = new LoginPage(page);

        await page.goto('/');

        page.once('dialog', async dialog => {

            expect(dialog.message())
                .toContain(login.error);

            await dialog.accept();

        });

        await loginPage.login(
            login.username,
            login.password
        );

    });

}