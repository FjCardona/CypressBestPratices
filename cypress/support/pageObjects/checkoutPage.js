class CheckoutPage {
    elements = {
        firstNameInput: () => cy.getByData('firstName'),
        lastNameInput: () => cy.getByData('lastName'),
        postalCodeInput: () => cy.getByData('postalCode'),
        continueButton: () => cy.getByData('continue'),
        subTotalLabel: () => cy.getByData('subtotal-label'),
        taxLabel: () => cy.getByData('tax-label'),
        totalLabel: () => cy.getByData('total-label')
    }

    fillCheckoutInfo(firstName, lastName, postalCode) {
        this.elements.firstNameInput().type(firstName)
        this.elements.lastNameInput().type(lastName)
        this.elements.postalCodeInput().type(postalCode)
        this.elements.continueButton().click()
    }
}

export const checkoutPage = new CheckoutPage();