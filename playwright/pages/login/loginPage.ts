import { Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto(): Promise<void> {
    return;
  }

  async login(username: string, password: string): Promise<void> {
    return;
  }
}
