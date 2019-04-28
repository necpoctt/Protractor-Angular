import { browser, element, by } from "protractor";

describe('the user submit a questionnaire', () => {

    it('should login success', async () => {
        await browser.get('/labs/questionnaire');
        await element(by.name('username')).sendKeys('John');
        await element(by.name('codeLanguage')).sendKeys('C#');
        await element(by.buttonText('送出')).click();
        const actial = await element(by.css('body > events-app > app-questionnaire > div > div > form'))
            .getText();
        expect(actial).toContain('送出成功');
    });

});
