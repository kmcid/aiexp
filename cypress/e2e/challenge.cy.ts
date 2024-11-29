/// <reference types="cypress" />

describe('Sauce Demo Challenge', () => {

  const visitSauceDemo = () => {
    cy.visit('');
  };

  const login = (username, password) => {
    cy.get('#user-name').type(username);
    cy.get('#password').type(password);
    cy.get('#login-button').click();
  };

  const validateLoginSuccess = () => {
    // Validate successful login by checking if we are redirected to the inventory page
    cy.url().should('include', '/inventory.htm');
    cy.get('.inventory_list').should('exist'); // Ensure the inventory list is visible
  };

  const validateHomePage = () => {
    // Verify that the URL is correct
    cy.url().should('eq', 'https://www.saucedemo.com/');

    // Validate the header text
    cy.get('.login_logo').should('have.text', 'Swag Labs');
  };

  it('should log in as standard_user', () => {
    visitSauceDemo();
    login('standard_user', 'secret_saucе');
    validateLoginSuccess();
  });

  it('should access and open the Sauce Demo website', () => {
    visitSauceDemo();
    validateHomePage();
  });

});