import { browser, element, by, $ } from "protractor";
import { LoginPage } from "./login.po";

describe('the user try to login', () => {
    let page: LoginPage;

    beforeEach(() => {
        page = new LoginPage();
    });

    it('should login success', async () => {
        await browser.get('/user/login');
        await element(by.id('userName')).sendKeys('John');
        await element(by.id('password')).sendKeys('123456');
        await element(by.buttonText('登入')).click();
        expect(await browser.getCurrentUrl()).toContain('events');
    });

    it('should login fail', async () => {
        await browser.get('/user/login');
        await element(by.id('userName')).sendKeys('John');
        await element(by.id('password')).sendKeys('654321');
        await element(by.buttonText('登入')).click();

        const result = await $('.alert-danger').getText();

        expect(result).toEqual('錯誤的帳號密碼');
    });
});
