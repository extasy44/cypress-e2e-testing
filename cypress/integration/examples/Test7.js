/// <reference types="Cypress" />

describe('7th Test Suite', function () {
  it('7th case, Frames, Child windows', function () {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

    cy.get('#opentab').then(function (el) {
      const url = el.prop('href');
      cy.visit();
    });
  });
});
