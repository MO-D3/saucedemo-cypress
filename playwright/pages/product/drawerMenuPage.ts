import { Page, Locator } from '@playwright/test';

export class DrawerMenuPage {
  readonly page: Page;
  readonly allItemsLink: Locator;
  readonly aboutLink: Locator;
  readonly logoutLink: Locator;
  readonly resetLink: Locator;
  readonly closeButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.allItemsLink = page.locator('#inventory_sidebar_link');
    this.aboutLink = page.locator('#about_sidebar_link');
    this.logoutLink = page.locator('#logout_sidebar_link');
    this.resetLink = page.locator('#reset_sidebar_link');
    this.closeButton = page.locator('#react-burger-cross-btn');
  }

  async clickAllItems(): Promise<void> {
    await this.allItemsLink.click();
  }

  async clickAbout(): Promise<void> {
    await this.aboutLink.click();
  }

  async clickLogout(): Promise<void> {
    await this.logoutLink.click();
  }

  async clickReset(): Promise<void> {
    await this.resetLink.click();
  }

  async close(): Promise<void> {
    await this.closeButton.click();
  }
}
