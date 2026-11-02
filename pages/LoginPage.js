export class LoginPage {

    constructor(page) {
        this.page = page;

        this.loginButton = page.locator('#login2');
        this.username = page.locator('#loginusername');
        this.password = page.locator('#loginpassword');
        this.submitButton = page.locator('button[onclick="logIn()"]');
    }

    async login(usuario, clave) {

        await this.loginButton.click();

        await this.username.fill(usuario);

        await this.password.fill(clave);

        await this.submitButton.click();

    }

}