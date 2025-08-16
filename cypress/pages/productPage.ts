class ProductPage {
  title() {
    return cy.get('.title');
  }

  cart() {
    return cy.get('.shopping_cart_link');
  }

  shoppingCartBadge() {
    return cy.get('.shopping_cart_badge');
  }

  hamburgerMenu() {
    return cy.get('#react-burger-menu-btn');
  }

  filters() {
    return cy.get('[data-test="product_sort_container"]');
  }

  addSauceLabsBackpack() {
    return cy.get('[data-test="add-to-cart-sauce-labs-backpack"]');
  }

  removeSauceLabsBackpack() {
    return cy.get('[data-test="remove-sauce-labs-backpack"]');
  }
}

export default new ProductPage();