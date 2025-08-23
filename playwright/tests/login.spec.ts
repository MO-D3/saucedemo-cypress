import { test, expect } from '@playwrightFixtures/createPage.fixture';
import users from '../data/users.json';

test.describe('Login Page', () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.goto();
  });

  test('logs in successfully with valid credentials', async ({ loginPage, productPage, page }) => {
    await loginPage.login(users.validUser.username, users.validUser.password);
    await expect(page).toHaveURL('/inventory.html');
    await expect(productPage.title).toBeVisible();
    await expect(productPage.title).toHaveText('Products');
  });

  test('displays an error when logging in with a locked out user', async ({ loginPage, page }) => {
    await loginPage.login(users.lockedUser.username, users.lockedUser.password);
    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toContainText('Epic sadface: Sorry, this user has been locked out.');
    await expect(page).toHaveURL('/');
  });

  test('displays an error when the username is incorrect', async ({ loginPage, page }) => {
    await loginPage.login(users.invalidUser.username, users.invalidUser.password);
    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toContainText(
      'Epic sadface: Username and password do not match any user in this service'
    );
    await expect(page).toHaveURL('/');
  });

  test('displays an error when the password is incorrect', async ({ loginPage, page }) => {
    await loginPage.login(users.wrongPassword.username, users.wrongPassword.password);
    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toContainText(
      'Epic sadface: Username and password do not match any user in this service'
    );
    await expect(page).toHaveURL('/');
  });

  test('displays errors for missing credentials', async ({ loginPage, page }) => {
    await loginPage.passwordInput.fill(users.validUser.password);
    await loginPage.loginButton.click();
    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toContainText('Epic sadface: Username is required');

    await loginPage.usernameInput.fill(users.validUser.username);
    await loginPage.passwordInput.fill('');
    await loginPage.loginButton.click();
    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toContainText('Epic sadface: Password is required');
    await expect(page).toHaveURL('/');
  });
});
