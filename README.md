# CypressBestPratices

## File structure

Below is the project file/folder structure (root is the project base):

```
cypress.config.js
package.json
README.md
cypress/
	downloads/
	e2e/
		CartFunctions.cy.js       # E2E test using page objects
		DataDrivenCart.cy.js      # Data-driven E2E test
	fixtures/
		example.json
		products.json
		users.json
	support/
		commands.js               # Custom Cypress commands
		e2e.js                    # Support file loaded before tests
		pageObjects/
			checkoutPage.js
			loginPage.js
			productsPage.js

```

Short descriptions:

- `cypress.config.js` - Cypress configuration for the project.
- `package.json` - Node project manifest with scripts and dependencies.
- `cypress/` - Cypress test files, fixtures and support utilities.
- `cypress/e2e/` - End-to-end test specs.
- `cypress/fixtures/` - Static test data used by specs.
- `cypress/support/pageObjects/` - Page Object Model files used by tests.
