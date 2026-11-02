export class CartPage {

    constructor(page) {

        this.page = page;

    }

    rowFor(name) {

        return this.page
            .getByRole('row')
            .filter({ hasText: name });

    }

}