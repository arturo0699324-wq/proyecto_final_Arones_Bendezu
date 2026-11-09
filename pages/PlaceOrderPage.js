export class PlaceOrderPage {
    constructor(page) {
        this.page = page;
        this.placeOrderButton =
            page.locator('button[data-target="#orderModal"]');
        this.nameInput =
            page.locator('#name');
        this.countryInput =
            page.locator('#country');
        this.cityInput =
            page.locator('#city');
        this.cardInput =
            page.locator('#card');
        this.monthInput =
            page.locator('#month');
        this.yearInput =
            page.locator('#year');
        this.purchaseButton =
            page.getByRole('button', { name: 'Purchase' });
    }
    async openPlaceOrder() {
        await this.placeOrderButton.click();
    }
    async fillForm(data) {
        await this.nameInput.fill(data.nombre);
        await this.countryInput.fill(data.pais);
        await this.cityInput.fill(data.ciudad);
        await this.cardInput.fill(data.tarjeta);
        await this.monthInput.fill(data.mes);
        await this.yearInput.fill(data.anio);
    }
    async purchase() {
        await this.purchaseButton.click();
    }
}