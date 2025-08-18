import { Page } from '@playwright/test';

export class DrawerMenuPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async open(): Promise<void> {
    return;
  }

  async close(): Promise<void> {
    return;
  }
}
