/// <reference types="Cypress" />

describe('6th Test Suite', function () {
  it('6th case, handling mouse pop up', function () {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

    //cy.get('div.mouse-hover-content').invoke('show');

    //force to bring up invisible element
    cy.contains('Top').click({ force: true });

    cy.url().should('include', 'top');
  });
});
