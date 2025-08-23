import { mergeExpects, mergeTests } from "@playwright/test";
import {
  test as pageTest,
  expect as pageExpect,
} from "@playwrightFixtures/pages.fixture";
import {
  test as axeTest,
  expect as axeExpect,
} from "@playwrightFixtures/axe.fixture";

export const test = mergeTests(pageTest, axeTest);
export const expect = mergeExpects(pageExpect, axeExpect);
