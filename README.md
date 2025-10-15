# 🧪 Cypress Automated Testing Project — SauceDemo Practice

## 🧭 Overview

This project contains **end-to-end automated tests** for the [SauceDemo website](https://www.saucedemo.com/) built using **Cypress**.  
It follows **industry-standard QA practices** and **ISTQB principles**, focusing on maintainability, reusability, and readability.

The suite uses **fixture-based data-driven testing**, **Page Object Model (POM)** design pattern, and **custom Cypress commands** to simulate real user behavior and validate key functionalities like product addition, cart validation, and checkout flow.

---

## 🏗️ Project Structure

<code>
cypress/
├── e2e/
│ ├── add_to_cart.cy.js # Test for adding multiple products
│ ├── login.cy.js # Authentication test suite
│ ├── checkout.cy.js # Checkout validation test suite
│
├── fixtures/
│ └── products.json # Product data used for data-driven tests
│
├── support/
│ ├── commands.js # Custom reusable commands
│ ├── e2e.js # Global hooks and imports
│ └── pages/
│ ├── loginPage.js # Page Object for Login
│ ├── inventoryPage.js # Page Object for Inventory
│ └── cartPage.js # Page Object for Cart
│
└── cypress.config.js # Cypress configuration
</code>
