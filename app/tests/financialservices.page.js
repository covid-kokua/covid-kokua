import { Selector } from 'testcafe';

class FinancialServicesPage {
  constructor() {
    this.pageId = '#financial-page';
    this.pageSelector = Selector(this.pageId);
  }

  /** Asserts that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }

  async testAdd(testController, name, website, phoneNumber, image, description) {
    await this.isDisplayed(testController);
    await testController.click('#addfinance-link');
    await testController.typeText('#name', name);
    await testController.typeText('#website', website);
    await testController.typeText('#phone', phoneNumber);
    await testController.typeText('#image', image);
    await testController.typeText('#description', description);
    await testController.click('#submit');
  }
}

export const Financial = new FinancialServicesPage();
