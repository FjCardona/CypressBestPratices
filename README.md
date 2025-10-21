# 🧪 Cypress Automated Testing Project — SauceDemo Practice

## 🧭 Overview

This project contains **end-to-end automated tests** for the [SauceDemo website](https://www.saucedemo.com/) built using **Cypress**.  
It follows **industry-standard QA practices** and **ISTQB principles**, focusing on maintainability, reusability, and readability.

The suite uses **fixture-based data-driven testing**, **Page Object Model (POM)** design pattern, and **custom Cypress commands** to simulate real user behavior and validate key functionalities like product addition, cart validation, and checkout flow.

---

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
