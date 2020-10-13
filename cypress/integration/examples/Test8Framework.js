/// <reference types="cypress" />
import HomePage from '../objects/HomePage';

describe('Framework-1', () => {
  before(function () {
    // runs once before all tests in the block
    cy.fixture('example').then(function (data) {
      this.data = data;
    });
  });

  it('Test8, Fixtures and Custom Commands', function () {
    const homePage = new HomePage();
    cy.visit('https://rahulshettyacademy.com/angularpractice/');

    homePage.getEditBox().type(this.data.name);
    //Two way databinding
    homePage.getGender().select(this.data.gender);
    cy.get('input[name="name"]:nth-child(2)').type(this.data.name);
    cy.get('select').select(this.data.gender);
    cy.get(':nth-child(4) > .ng-untouched').should(
      'have.value',
      this.data.name
    );
    cy.get('input[name="name"]:nth-child(2)').should(
      'have.attr',
      'minlength',
      '2'
    );
    cy.get('#inlineRadio3').should('be.disabled');
    cy.get(':nth-child(2) > .nav-link').click();

    //custom commands
    //cy.selectProduct('Blackberry');
    //cy.selectProduct('Nokia Edge');
    this.data.productName.forEach((element) => {
      cy.selectProduct(element);
    });
  });
});
