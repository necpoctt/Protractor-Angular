import { AppPage } from './app.po';
import { browser, element , logging, by, $ } from 'protractor';

describe('App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display title', () => {
    browser.get(browser.baseUrl);
    const result = $('div.navbar-header > a').getText();
    expect(result).toEqual('Protractor 訓練營');
  });

  it('should display h1 title', () => {
    browser.get(browser.baseUrl);
    const result = $('h1').getText();
    expect(result).toEqual('活動列表');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
