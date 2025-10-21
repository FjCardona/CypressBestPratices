// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

// getByData Command
Cypress.Commands.add('getByData', (dataTestAttribute) => {
  // Escape characters that could break CSS selectors
  const safeSelector = CSS.escape(dataTestAttribute);
  return cy.get(`[data-test="${safeSelector}"]`);
});

Cypress.Commands.add('addAndRemoveItems', (productsFixture) => {
  productsFixture.products.forEach((product) => {
    cy.getByData(product.addToCart).click();
  });
});

