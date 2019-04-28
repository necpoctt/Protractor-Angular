import { browser } from "protractor";

export class LoginPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  setAccount(userName: string, password: string) {

  }

  login() {

  }

}
