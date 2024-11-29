/// <reference types="cypress" />

describe('', () => {
  it('', () => {
    cy.visit('https://saucedemo.com/');

    cy.get('.login_logo', { log: false }).should('have.text', 'Swag Labs');

    cy.get('[data-test="username"]', { log: false }).type('standard_user');
    cy.get('[data-test="password"]', { log: false }).type('secret_sauce');

    cy.get('[data-test="login-button"]', { log: false }).click();
  });
});
