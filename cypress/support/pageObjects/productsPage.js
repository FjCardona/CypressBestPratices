class ProductsPage {
    elements = {
        productName: ()=> cy.getByData('inventory-item-name'),
        productPrice: () => cy.getByData('inventory-item-price'),
        cartButton:() => cy.getByData('shopping-cart-link'),
        cartBadge: () => cy.getByData('shopping-cart-badge'),
        checkoutButton: () => cy.getByData('checkout')
    }
}

export const productsPage = new ProductsPage();