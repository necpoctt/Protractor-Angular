import { browser, element, by } from "protractor";

describe('search a event', () => {

    it('should search success', async () => {
        await browser.get('/events');
        await element(by.name('searchTerm')).sendKeys('Angular');
        await element(by.partialButtonText('搜尋')).click();

        const actialSearchResult = await element.all(by.css('.list-group-item'));
        expect(actialSearchResult.length).not.toBe(0);

        const actialLength = await actialSearchResult.length;
        expect(actialLength).toBe(3);

        await actialSearchResult[1].click();
        const actialTitle = await element(by.tagName('h2')).getText();
        expect(actialTitle).toEqual('ANGULAR 7 開發實戰：新手入門篇');

    });

});

