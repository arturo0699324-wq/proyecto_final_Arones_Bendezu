import { test, expect } from '@playwright/test';

test('uso de assertions', async ({ page }) => {

  await page.goto('https://demoblaze.com/index.html');

  // Valida que el título contenga STORE
  await expect(page).toHaveTitle(/STORE/);

  // Abre el modal Login
  await page.locator('#login2').click();

  // Valida que el modal esté visible
  const locatorModal = page.locator('#logInModal');
  await expect(locatorModal).toBeVisible();
  await page.waitForTimeout(2000);

  // Cuenta los textbox
  const locatorTextbox = page.getByRole('textbox');
  await expect(locatorTextbox).toHaveCount(2);

  // Username
  const locatorUsername = page.locator('#loginusername');
  await locatorUsername.fill('arturo123456');
  await expect(locatorUsername).toHaveValue('arturo123456');

  // Password
  const locatorPassword = page.locator('#loginpassword');
await expect(locatorPassword).toBeVisible();
await locatorPassword.fill('topas123');
await page.waitForTimeout(1000);

await expect(locatorPassword).toHaveValue('topas123');
// Botón Login
const locatorLogin = page.locator('button[onclick="logIn()"]');
await expect(locatorLogin).toBeEnabled();

// Click Login
await locatorLogin.click();

// Espera a que desaparezca el modal
await expect(locatorModal).toBeHidden();

// Valida que el usuario inició sesión
const locatorUser = page.locator('#nameofuser');
await expect(locatorUser).toContainText('Welcome');

});