# SauceDemo E2E Tests

Automated end-to-end tests for the [SauceDemo web application](https://www.saucedemo.com) using Cypress and TypeScript.

## Project Overview
This repository contains robust UI tests for SauceDemo, covering login, product interactions, and user flows. Page Object Model is used for maintainability and clarity.

## Getting Started

### Prerequisites
- Node.js (v18 or newer recommended)
- npm

### Installation
```sh
npm install
```

### Running Tests (Headless)
```sh
npm test
```

### Running Tests (UI Mode)
```sh
npm run cy:open
```
This opens the Cypress Test Runner for interactive debugging and visual feedback.

## Test Coverage
- **Login Page:** Valid/invalid credentials, error messages, locked out user
- **Product Page:** Add/remove items from cart, logout via drawer menu

## Test utilities
- `cypress/fixtures/users.json` contains test users (e.g. `validUser`, `lockedUser`, `invalidUser`).
- `cy.login(username, password)` is a custom command (in `cypress/support/commands.ts`) that visits `/` and performs login steps.

## SauceDemo Web App
- URL: [https://www.saucedemo.com](https://www.saucedemo.com)

## Author & License
- Author: Michal Olesiak
- License: MIT 