import { Page } from '@playwright/test';

export class InventoryList {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async getItems(): Promise<any[]> {
    return [];
  }
}
