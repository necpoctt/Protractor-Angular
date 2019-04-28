import { browser, element, by } from "protractor";
var path = require('path')

fdescribe('add a new event', () => {
    it('should create a new event', async () => {
        await browser.get('/events/new');
        let title = 'Protractor 實戰';
        await element(by.name('name')).sendKeys(title);

        await element(by.css('.mat-datepicker-toggle-default-icon')).click();
        await element(by.css('.mat-calendar-period-button.mat-button')).click();
        await element(by.css('.mat-calendar-previous-button.mat-icon-button')).click();
        await element(by.cssContainingText('.mat-calendar-body-cell-content', '1997')).click();
        await element(by.cssContainingText('.mat-calendar-body-cell-content', 'DEC')).click();
        await element(by.cssContainingText('.mat-calendar-body-cell-content', '31')).click();

        await element(by.id('eventTime')).sendKeys('早上');
        await element(by.id('eventPrice')).sendKeys('500');
        await element(by.id('address')).sendKeys('中正路100號');
        await element(by.id('city')).sendKeys('台北市');
        await element(by.id('country')).sendKeys('台灣');
        await element(by.id('onlineUrl')).sendKeys('http://example.com');

        const imgPath = path.resolve('./e2e/src/assets/Protractor.png');
        await element(by.id('imageFile')).sendKeys(imgPath);

        await element(by.buttonText('儲存')).click();
        const result = await element(by.cssContainingText('h2', 'Protractor 實戰'.toUpperCase())).getText();
        await expect(result).toBe(title.toUpperCase());
    });

});
