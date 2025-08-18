import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/login/loginPage';
import { ProductPage } from '../pages/product/productPage';
import { InventoryList } from '../pages/product/inventoryList';
import { DrawerMenuPage } from '../pages/product/drawerMenuPage';

type PagesFixtures = {
  loginPage: LoginPage;
  productPage: ProductPage;
  inventoryList: InventoryList;
  drawerMenu: DrawerMenuPage;
};

export const test = base.extend<PagesFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  productPage: async ({ page }, use) => {
    await use(new ProductPage(page));
  },

  inventoryList: async ({ page }, use) => {
    await use(new InventoryList(page));
  },

  drawerMenu: async ({ page }, use) => {
    await use(new DrawerMenuPage(page));
  },
});

export const expect = test.expect;
