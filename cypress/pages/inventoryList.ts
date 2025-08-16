class InventoryList {
  private inventoryItem(name: string) {
    return cy
      .get('.inventory_item')
      .contains('.inventory_item_name', name)
      .parents('.inventory_item');
  }

  inventoryTitle(name: string) {
    return this.inventoryItem(name).find('.inventory_item_name');
  }

  inventoryDescription(name: string) {
    return this.inventoryItem(name).find('.inventory_item_desc');
  }

  inventoryPrice(name: string) {
    return this.inventoryItem(name).find('.inventory_item_price');
  }

  addToCartSauceLabsBackpack() {
    return cy.get('[data-test="add-to-cart-sauce-labs-backpack"]');
  }

  removeSauceLabsBackpack() {
    return cy.get('[data-test="remove-sauce-labs-backpack"]');
  }
}

export default new InventoryList();