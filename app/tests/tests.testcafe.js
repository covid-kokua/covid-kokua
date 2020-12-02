import { landingPage } from './landing.page';
import { Social } from './socialservices.page';
import { Financial } from './financialservices.page';
import { Student } from './studentservices.page';
import { FAQ } from './faq.page';
import { Additional } from './additionalservices.page';
import { navBar } from './navbar.component';

/* global fixture:false, test:false */

fixture('#Kokua-Hawaii localhost test with default db')
    .page('http://localhost:3000');

const addValues = {
  name: 'Resilient Hawaii',
  website: 'https://resilienthawaii.org/',
  phoneNumber: '012-345-6789',
  image: 'N/A',
  description: 'Crowd-Sourced COVID Information',
};

test('Test that landing page shows up', async (testController) => {
  await landingPage.isDisplayed(testController);
});

test('Test that Social Services page shows up', async (testController) => {
  await navBar.gotoSocial(testController);
  await Social.isDisplayed(testController);
});

test('Test that Financial Services page shows up and the add resource functions properly', async (testController) => {
  await navBar.gotoFinancial(testController);
  await Financial.isDisplayed(testController);
  await Financial.testAdd(testController, addValues.name, addValues.website, addValues.phoneNumber, addValues.image, addValues.description);
});

test('Test that Student Services page shows up', async (testController) => {
  await navBar.gotoStudent(testController);
  await Student.isDisplayed(testController);
});

test('Test that FAQ page shows up', async (testController) => {
  await navBar.gotoFAQ(testController);
  await FAQ.isDisplayed(testController);
});

test('Test that Additional Services page shows up', async (testController) => {
  await navBar.gotoAdditional(testController);
  await Additional.isDisplayed(testController);
});
