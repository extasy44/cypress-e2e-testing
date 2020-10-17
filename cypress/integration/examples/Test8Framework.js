/// <reference types="cypress" />

//node_modules/.bin/cypress run --spec cypress/integration/examples/Test8Framwork.js --env url=http://google.com --headed
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
    cy.visit(Cypress.env('url')); // get value from env variables 'cypress.json'

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

    cy.get('tr td:nth-child(4) strong')
      .each(($el, index, $list) => {
        const amount = $el.text();
        var res = amount.split(' ');
        res = res[1].trim();
        sum = Number(sum) + Number(res);
      })
      .then(function () {
        cy.log(sum);
      });
    cy.get('h3 strong').then(function (element) {
      const amount = element.text();
      var res = amount.split(' ');
      var total = res[1].trim();
      expect(Number(total)).to.equal(sum);
    });
    cy.contains('Checkout').click();
    cy.get('#country').type('India');
    cy.get('.suggestions > ul > li > a').click();
    cy.get('#checkbox2').click({ force: true });
    cy.get('input[type="submit"]').click();
    //cy.get('.alert').should('have.text','Success! Thank you! Your order will be delivered in next few weeks :-).')
    cy.get('.alert').then(function (element) {
      const actualText = element.text();
      expect(actualText.includes('Success')).to.be.true;
    });
  });
});
