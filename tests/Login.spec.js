import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('usar traza', async ({ page }) => {

  await page.goto('/');

  const loginPage = new LoginPage(page);

  await loginPage.login(
  process.env.LOGIN_USER,
  process.env.LOGIN_PASSWORD
);

await page.waitForTimeout(5000);

  await expect(
    page.locator('#nameofuser')
  ).toBeVisible();

});