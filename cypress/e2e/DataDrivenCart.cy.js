/* Objective: Validate that adding multiple items (with different prices and names) reflects the correct cart total and item count dynamically.
Requirements to cover:
Use data-driven testing to add items from an external data source (e.g., fixture or JSON file).
Validate that each item appears correctly in the cart with the right name, description, and price.
Cross-check the total sum (including potential tax if applicable).
Implement custom Cypress commands to handle repeated actions like adding or removing products.
Follow the Page Object Model (POM) design pattern to separate UI logic from test logic.
ISTQB focus:
Boundary Value Analysis (BVA) for prices.
State Transition Testing for cart states (empty → one item → multiple items → checkout). */

/* 
Gherkin Syntax:
Feature: Data Driven Cart Functionality

Scenario Outline: Adding multiple items to the cart
    Given the user is on the product page 
    When the user adds "<ItemName>" to the cart
    Then the cart should reflect "<ItemCount>" items
    Examples:
    | ItemName                     | ItemCount | 
    | Sauce Labs Bike Light        | 1         | 
    | Test.allTheThings() T-Shirt  | 2         | 
    | Sauce Labs Fleece Jacket     | 3         | 

Scenario: Validate cart total
    Given the user has added multiple items to the cart
    When the user views the cart
    Then the total price should be the sum of individual item prices
    And the item count should match the number of added items

Scenario: Remove item from cart
    Given the user has items in the cart
    When the user removes "<ItemName>" from the cart
    Then the cart should update the item count and total price accordingly
    Examples:
    | ItemName                     |
    | Sauce Labs Bike Light        |
    | Sauce Labs Fleece Jacket     |
*/

import { checkoutPage } from '../support/pageObjects/checkoutPage'
import { loginPage } from '../support/pageObjects/loginPage'
import { productsPage } from '../support/pageObjects/productsPage'


describe("Data Driven Cart Tests", () => {
    beforeEach(() => {
        cy.fixture('users').then((user) => {
            cy.visit('https://www.saucedemo.com/')
            loginPage.login(user.standardUser.username, user.standardUser.password)
            cy.getByData('title').should('have.text', 'Products')
        })
    })

    context("Adding multiple items to the cart", () => {
        it("should add multiple items and validate cart", () => {
            cy.fixture('products').then((productsFixture) => {
                cy.addAndRemoveItems(productsFixture)
                
            })
            productsPage.elements.cartBadge().should('have.text', '4')
        })
    })

    context("Validate cart total", () => {
        it("should validate the total price in the cart", () => {
            cy.fixture('products').then((productsFixture) => {
                let expectedTotal = 0
                productsFixture.products.forEach((product) => {
                    cy.getByData(product.addToCart).click()
                    expectedTotal += product.price
                })
                productsPage.goToCheckout()
                //Fill the checkout info with dummy data
                checkoutPage.fillCheckoutInfo('John', 'Doe', '12345')
                // Validate subtotal
                checkoutPage.elements.subTotalLabel().should('have.text', 'Item total: ' + `$${expectedTotal.toFixed(2)}`)
                // Validate total with tax (assuming a tax rate of 8%)
                const tax = expectedTotal * 0.08
                const total = expectedTotal + tax
                checkoutPage.elements.totalLabel().should('have.text', 'Total: ' + `$${total.toFixed(2)}`)
            })

        })
    })

    context("Remove item from cart", () => {
        it("should go to the cart and remove an item", () => {
            cy.fixture('products').then((productsFixture) => {
                cy.addAndRemoveItems(productsFixture)
                // Go to the cart
                productsPage.elements.cartButton().click()
                // Remove the product "Sauce Labs Bike Light"
                productsPage.removeItem('Sauce Labs Bike Light')
                productsPage.removeItem('Test.allTheThings() T-Shirt (Red)')

            })
        })
    })

})
