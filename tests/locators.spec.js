import { test, expect } from '@playwright/test';

// 1. Mapeo de elementos principales en DemoBlaze
test('mapeo de elementos', async ({ page }) => {
    await page.goto('https://demoblaze.com/index.html');
    
    // Categoría por rol
    const laptopsCategory = page.getByRole('link', { name: 'Laptops' });
    await expect(laptopsCategory).toBeVisible();
    await laptopsCategory.click();

    // Producto por texto
    const productText = page.getByText('Sony vaio i5');
    await expect(productText).toBeVisible();

    // Banner principal por XPath
    const bannerXpath = page.locator('//*[@id="carouselExampleIndicators"]');
    await expect(bannerXpath).toBeVisible();

    // Navegación por rol
    const cartLink = page.getByRole('link', { name: 'Cart' });
    await expect(cartLink).toBeVisible();
});

// 2. Error de modo estricto en DemoBlaze
test('error de modo estricto', async ({ page }) => {
    await page.goto('https://demoblaze.com/index.html');
    
    // Hay varios enlaces de navegación; tomamos el primero para evitar violar strict mode
    const navLink = page.getByRole('link');
    await navLink.first().click();
});

// 3. Elementos dinámicos / Carga de productos
test('ID dinamico o carga de elementos', async ({ page }) => {
    await page.goto('https://demoblaze.com/index.html');
    
    // Localizador estable por texto/rol sin depender de IDs dinámicos
    const phonesCategory = page.getByRole('link', { name: 'Phones' });
    await phonesCategory.click();
});

// 4. Tipos de espera (Espera explícita para la tienda)
test('Tipos de espera', async ({ page }) => {
    await page.goto('https://demoblaze.com/index.html');
    
    // Espera explícita de hasta 10 segundos a que la categoría esté visible
    await expect(page.getByRole('link', { name: 'Monitors' })).toBeVisible({ timeout: 10000 });
    await page.getByRole('link', { name: 'Monitors' }).click();
});




   