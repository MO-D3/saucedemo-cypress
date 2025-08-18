import { Page, Locator } from '@playwright/test';

export class InventoryList {
  readonly page: Page;
  readonly items: Locator;

  constructor(page: Page) {
    this.page = page;
    this.items = page.locator('.inventory_item');
  }

  allItems(): Locator {
    return this.items;
  }

  private inventoryItemByName(name: string): Locator {
    return this.items.filter({ has: this.page.locator('.inventory_item_name', { hasText: name }) }).first();
  }

  async inventoryTitle(name: string): Promise<string> {
    return (await this.inventoryItemByName(name).locator('.inventory_item_name').textContent()) ?? '';
  }

  async inventoryDescription(name: string): Promise<string> {
    return (await this.inventoryItemByName(name).locator('.inventory_item_desc').textContent()) ?? '';
  }

  async inventoryPrice(name: string): Promise<string> {
    return (await this.inventoryItemByName(name).locator('.inventory_item_price').textContent()) ?? '';
  }

  addToCartSauceLabsBackpack(): Locator {
    return this.page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
  }

  removeSauceLabsBackpack(): Locator {
    return this.page.locator('[data-test="remove-sauce-labs-backpack"]');
  }
}
