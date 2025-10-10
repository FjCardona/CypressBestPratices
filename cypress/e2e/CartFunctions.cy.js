describe('Sauce Login Spec', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
    cy.getByData('username').type('standard_user')
    cy.getByData('password').type('secret_sauce')
    cy.getByData('login-button').click()
  })

  it('Visit the Sauce Labs login page', () => {
    cy.getByData('title').should('have.text', 'Products')
  })

  it('Visit the Backpack page', () => {
    cy.getByData('inventory-item-name').contains('Sauce Labs Backpack').click()
    cy.getByData('inventory-item-name').should("exist").contains('Sauce Labs Backpack')
    })

  it('Add 3 items to the cart and confirm quantity', () => {
    
    cy.getByData('add-to-cart-sauce-labs-bike-light').click()
    //parse the add-to-cart-test.allthethings()-t-shirt-(red) item to avoid issues with special characters

    cy.getByData('add-to-cart-test.allthethings()-t-shirt-(red)').click()
    cy.getByData('add-to-cart-sauce-labs-fleece-jacket').click()

    cy.getByData('shopping-cart-badge').should('have.text', '3')

   })

    it.only('Add 3 items to the cart and check the cart', () => {
    var arrayItems = ['Sauce Labs Bike Light', 'Test.allTheThings() T-Shirt (Red)', 'Sauce Labs Fleece Jacket']
    
    cy.getByData('add-to-cart-sauce-labs-bike-light').click()
    cy.getByData('add-to-cart-test.allthethings()-t-shirt-(red)').click()
    cy.getByData('add-to-cart-sauce-labs-fleece-jacket').click()
    
    cy.getByData('shopping-cart-link').click()
    
    arrayItems.forEach((item, i) => {
      cy.getByData('inventory-item-name').eq(i).contains(item)
    })

   })
})