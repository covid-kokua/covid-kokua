import { Selector } from 'testcafe';

class FaqPage {
  constructor() {
    this.pageId = '#faq-page';
    this.pageSelector = Selector(this.pageId);
  }

  /** Asserts that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }
}

export const FAQ = new FaqPage();
