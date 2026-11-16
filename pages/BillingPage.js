export class BillingPage {
  constructor(page) {
    this.page = page;

    this.nameInput = page.locator('#name');
    this.countryInput = page.locator('#country');
    this.cityInput = page.locator('#city');
  }

  async fillBilling(data) {
    await this.nameInput.fill(data.name);
    await this.countryInput.fill(data.country);
    await this.cityInput.fill(data.city);
  }
}