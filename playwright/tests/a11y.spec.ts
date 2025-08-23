import { test, expect } from '@playwrightFixtures/createPage.fixture';
import users from '../data/users.json';


test.describe('Accessibility demo — getByRole vs axe', () => {
  // Demo: selecting form fields by accessible role
  test('login form using getByRole and axe check', async ({ page, loginPage }) => {

    await loginPage.goto();

    await page.getByRole('textbox', { name: 'Username' }).fill(users.validUser.username);
    await page.getByRole('textbox', { name: 'Password' }).fill(users.validUser.password);
    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page).toHaveURL('/inventory.html');
  });
// Demo: using playwirght axe as a fixture
    test('has no detectable accessibility violations on load', async ({ loginPage, axe }) => {
    await loginPage.goto();

    const results = await axe.analyze();
    if (results.violations && results.violations.length) {
      console.log('Axe violations:', JSON.stringify(results.violations, null, 2));
    }

    expect(results.violations?.length ?? 0).toBe(0);
  });


});
