import loginPage from '@cypressPages/login/loginPage';
import productPage from '@cypressPages/product/productPage';
import drawerMenuPage from '@cypressPages/product/drawerMenuPage';
import inventoryList from '@cypressPages/product/inventoryList';
import VIEWPORTS from '@cypressSupport/viewports';

VIEWPORTS.forEach((vp) => {
  describe(`Product Page - ${vp.name}`, () => {
    let users: Users;
    before(() => {
      cy.fixture<Users>('users').then((data) => {
        users = data;
      });
    });

    beforeEach(() => {
      cy.viewport(vp.width, vp.height);
      cy.login(users.validUser.username, users.validUser.password);
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

    it('should display 6 products in the inventory list after login', () => {
      inventoryList.getAllItems().should('have.length', 6);
    });
  });
});