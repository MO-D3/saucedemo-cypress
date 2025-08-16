import loginPage from '@pages/loginPage';
import productPage from '@pages/productPage';

describe('Login Page', () => {
  let users: any;
  before(() => {
    cy.fixture('users').then((data) => {
      users = data;
    });
  });

  beforeEach(() => {
    loginPage.visit();
  });

  it('logs in successfully with valid credentials', () => {
    loginPage.login(users.validUser.username, users.validUser.password);
    cy.url().should('eq', Cypress.config().baseUrl + '/inventory.html');
    productPage.title().should('be.visible').and('have.text', 'Products');
  });

  it('displays an error when logging in with a locked out user', () => {
    loginPage.login(users.lockedUser.username, users.lockedUser.password);
    loginPage
      .errorMessage()
      .should('be.visible')
      .and('contain.text', 'Epic sadface: Sorry, this user has been locked out.');
    cy.url().should('eq', Cypress.config().baseUrl + '/');
  });

  it('displays an error when the username is incorrect', () => {
    loginPage.login(users.invalidUser.username, users.invalidUser.password);
    loginPage
      .errorMessage()
      .should('be.visible')
      .and(
        'contain.text',
        'Epic sadface: Username and password do not match any user in this service'
      );
    cy.url().should('eq', Cypress.config().baseUrl + '/');
  });

  it('displays an error when the password is incorrect', () => {
    loginPage.login(users.wrongPassword.username, users.wrongPassword.password);
    loginPage
      .errorMessage()
      .should('be.visible')
      .and(
        'contain.text',
        'Epic sadface: Username and password do not match any user in this service'
      );
    cy.url().should('eq', Cypress.config().baseUrl + '/');
  });

  it('displays errors for missing credentials', () => {
    loginPage.password().clear().type(users.validUser.password);
    loginPage.loginButton().click();
    loginPage.errorMessage().should('be.visible').and('contain.text', 'Epic sadface: Username is required');
    loginPage.username().clear().type(users.validUser.username);
    loginPage.password().clear();
    loginPage.loginButton().click();
    loginPage.errorMessage().should('be.visible').and('contain.text', 'Epic sadface: Password is required');
    cy.url().should('eq', Cypress.config().baseUrl + '/');
  });
});