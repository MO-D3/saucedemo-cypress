import { test as base } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import type {AxeResults} from 'axe-core'

type AxeFixture = {
  axe: {
    analyze: () => Promise<AxeResults>;
  };
};

export const test = base.extend<AxeFixture>({
  axe: async ({ page }, use) => {
    const axe = {
      analyze: async () => {
  const builder = new AxeBuilder({ page: page as any });
        return builder.analyze();
      },
    };

    await use(axe);
  },
});

export const expect = test.expect;
