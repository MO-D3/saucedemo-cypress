class DrawerMenuPage {
  allItems() {
    return cy.get('#inventory_sidebar_link');
  }

  about() {
    return cy.get('#about_sidebar_link');
  }

  logout() {
    return cy.get('#logout_sidebar_link');
  }

  reset() {
    return cy.get('#reset_sidebar_link');
  }

  closeButton() {
    return cy.get('#react-burger-cross-btn');
  }
}

export default new DrawerMenuPage();