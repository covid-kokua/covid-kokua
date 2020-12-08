import { Selector } from 'testcafe';

class SocialServicesPage {
  constructor() {
    this.pageId = '#social-page';
    this.pageSelector = Selector(this.pageId);
  }

  /** Asserts that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }
}

export const Social = new SocialServicesPage();
