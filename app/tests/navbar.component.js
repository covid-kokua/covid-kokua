class NavBar {

  /** Go to Social Services page */
  async gotoSocial(testController) {
    await testController.click('#social');
  }

  /** Go to Financial Services page */
  async gotoFinancial(testController) {
    await testController.click('#financial');
  }

  /** Go to Student Services page */
  async gotoStudent(testController) {
    await testController.click('#student');
  }

  /** Go to FAQ page */
  async gotoFAQ(testController) {
    await testController.click('#faq');
  }

  /** Go to Additional Services page */
  async gotoAdditional(testController) {
    await testController.click('#additional');
  }
}

export const navBar = new NavBar();
