export class PaymentPage {
  constructor(page) {
    this.page = page;

    this.cardInput = page.locator('#card');
    this.monthInput = page.locator('#month');
    this.yearInput = page.locator('#year');

    this.purchaseButton =
      page.getByRole('button', { name: 'Purchase' });
  }

  async fillPayment(data) {
    await this.cardInput.fill(data.card);
    await this.monthInput.fill(data.month);
    await this.yearInput.fill(data.year);
  }

  async purchase() {
    await this.purchaseButton.click();
  }
}