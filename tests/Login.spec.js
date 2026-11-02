import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

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
test('usuario invalido', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await page.goto('/');
    page.once('dialog', async dialog => {
        expect(dialog.message())
            .toContain('User does not exist');
        await dialog.accept();
    });
    await loginPage.login(
        'usuarioIncorrecto',
        process.env.LOGIN_PASSWORD
    );
});
test('contrasena invalida', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await page.goto('/');
    page.once('dialog', async dialog => {
        expect(dialog.message())
            .toContain('Wrong password');
        await dialog.accept();
    });
    await loginPage.login(
        process.env.LOGIN_USER,
        'claveIncorrecta'
    );
});