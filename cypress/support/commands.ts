// ***********************************************************
// This example commands.ts shows you how to create various
// custom Cypress commands and overwrite existing commands.
//
// For more comprehensive examples of custom commands please
// see:
//   https://on.cypress.io/custom-commands
// ***********************************************************

// Custom commands for the test suite.
// Adds a reusable login command to avoid repeating login steps.
declare global {
	namespace Cypress {
		interface Chainable {
			login(username: string, password: string): Chainable<void>;
		}
	}
}

Cypress.Commands.add('login', (username: string, password: string) => {
	cy.visit('/');
	cy.get('[data-test="username"]').clear().type(username);
	cy.get('[data-test="password"]').clear().type(password);
	cy.get('[data-test="login-button"]').click();
});

export {};