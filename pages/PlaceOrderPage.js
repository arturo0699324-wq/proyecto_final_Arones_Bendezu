export class PlaceOrderPage {
  constructor(page) {
    this.page = page;

    this.placeOrderButton =
      page.locator('button[data-target="#orderModal"]');
  }

  async openPlaceOrder() {
    await this.placeOrderButton.click();
  }
}