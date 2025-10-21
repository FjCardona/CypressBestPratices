class ProductsPage {
    elements = {
        productName: () => cy.getByData('inventory-item-name'),
        productPrice: () => cy.getByData('inventory-item-price'),
        cartButton: () => cy.getByData('shopping-cart-link'),
        cartBadge: () => cy.getByData('shopping-cart-badge'),
        checkoutButton: () => cy.getByData('checkout'),
        removeButton: () => cy.getByData('remove')
    }

    goToCheckout() {
        this.elements.cartButton().click()
        this.elements.checkoutButton().click()
    }

    removeItem(productName) {
        productsPage.elements.productName().contains(productName).click()
        productsPage.elements.removeButton().click()
        productsPage.elements.cartButton().click()
    }
}

export const productsPage = new ProductsPage();