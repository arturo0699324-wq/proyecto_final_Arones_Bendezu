import { test, expect } from '@playwright/test';

test('usar traza', async ({ page }) => {

  await page.goto('https://demoblaze.com/index.html');

  const login = page.locator('#login2');
  await login.click();

  const locatorTextbox = page.getByRole('textbox');
  await expect(locatorTextbox).toHaveCount(2);

  const locatorUsername = page.locator('#loginusername');
  await locatorUsername.fill('arturo123456');

  const locatorPassword = page.locator('#loginpassword');
  await locatorPassword.fill('topas123');

  const button = page.locator('button[onclick="logIn()"]');
  await button.click();

});