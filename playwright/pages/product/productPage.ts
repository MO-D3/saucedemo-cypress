import { Page, Locator, expect } from '@playwright/test';

export class ProductPage {
  readonly page: Page;
  readonly title: Locator;
  readonly cartLink: Locator;
  readonly cartBadge: Locator;
  readonly hamburgerButton: Locator;
  readonly filtersSelect: Locator;
  readonly addBackpackButton: Locator;
  readonly removeBackpackButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.title = page.locator('.title');
    this.cartLink = page.locator('.shopping_cart_link');
    this.cartBadge = page.locator('.shopping_cart_badge');
    this.hamburgerButton = page.locator('#react-burger-menu-btn');
    this.filtersSelect = page.locator('[data-test="product_sort_container"]');
    this.addBackpackButton = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
    this.removeBackpackButton = page.locator('[data-test="remove-sauce-labs-backpack"]');
  }

  async titleText(): Promise<string> {
    return (await this.title.textContent()) ?? '';
  }

  async goToCart(): Promise<void> {
    await this.cartLink.click();
  }

  async getCartBadge(): Promise<string> {
    return (await this.cartBadge.textContent()) ?? '';
  }

  async openHamburgerMenu(): Promise<void> {
    await this.hamburgerButton.click();
  }

  async setFilter(value: string): Promise<void> {
    await this.filtersSelect.selectOption({ label: value });
  }

  async addSauceLabsBackpack(): Promise<void> {
    await this.addBackpackButton.click();
  }

  async removeSauceLabsBackpack(): Promise<void> {
    await this.removeBackpackButton.click();
  }

}
