import loginPage from '@pages/loginPage';
import productPage from '@pages/productPage';
import drawerMenuPage from '@pages/drawerMenuPage';

describe('Product Page', () => {
  let users: any;
  before(() => {
    cy.fixture('users').then((data) => {
      users = data;
    });
  });

  beforeEach(() => {
    loginPage.visit();
    loginPage.login(users.validUser.username, users.validUser.password);
    cy.url().should('eq', Cypress.config().baseUrl + '/inventory.html');
    productPage.title().should('be.visible').and('have.text', 'Products');
  });

  it('logs out using the drawer menu', () => {
    productPage.hamburgerMenu().click();
    drawerMenuPage.logout().click();
    cy.url().should('eq', Cypress.config().baseUrl + '/');
    loginPage.username().should('be.visible');
  });

  it('adds and removes the Sauce Labs Backpack from the cart', () => {
    productPage.shoppingCartBadge().should('not.exist');
    productPage.addSauceLabsBackpack().click();
    productPage.shoppingCartBadge().should('be.visible').and('have.text', '1');
    productPage.removeSauceLabsBackpack().click();
    productPage.shoppingCartBadge().should('not.exist');
  });
});