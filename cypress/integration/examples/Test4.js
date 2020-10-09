/// <reference types="Cypress" />

describe('4th Test Suite', function () {
  it('Handling Alerts, Popups, Child Windows', function () {
    //CheckBoxes
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    cy.get('#alertbtn').click();
    cy.get('[value="Confirm"]').click();

    //Window: alert
    cy.on('window:alert', (str) => {
      //Mocha
      expect(str).to.equal(
        'Hello , share this practice page and share your knowledge'
      );
    });
    cy.on('window:confirm', (str) => {
      //Mocha
      expect(str).to.equal('Hello , Are you sure you want to confirm?');
    });

    cy.get('#opentab').invoke('removeAttr', 'target').click();
    cy.url().should('include', 'rahulshettyacademy');
    cy.go('back');
  });
});
