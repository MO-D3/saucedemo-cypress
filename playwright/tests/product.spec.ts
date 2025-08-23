import { test, expect } from '@playwrightFixtures/createPage.fixture';
import users from '../data/users.json';

test.describe('Product Page', () => {
  test.beforeEach(async ({ loginPage, productPage, page }) => {
    await loginPage.goto();
    await loginPage.login(users.validUser.username, users.validUser.password);
    await expect(page).toHaveURL('/inventory.html');
    await expect(productPage.title).toBeVisible();
    await expect(productPage.title).toHaveText('Products');
  });

  test('logs out using the drawer menu', async ({ productPage, drawerMenu, loginPage, page }) => {
    await productPage.openHamburgerMenu();
    await drawerMenu.clickLogout();
    await expect(page).toHaveURL('/');
    await expect(loginPage.usernameInput).toBeVisible();
  });

  test('adds and removes the Sauce Labs Backpack from the cart', async ({ productPage }) => {
    await expect(productPage.cartBadge).toHaveCount(0);
    await productPage.addSauceLabsBackpack();
    await expect(productPage.cartBadge).toBeVisible();
    await expect(productPage.cartBadge).toHaveText('1');
    await productPage.removeSauceLabsBackpack();
    await expect(productPage.cartBadge).toHaveCount(0);
  });

  test('should display 6 products in the inventory list after login', async ({ inventoryList }) => {
    await expect(inventoryList.allItems()).toHaveCount(6);
  });
});
