/// <reference types="cypress" />

describe('My First Test suite', () => {
  it('First case', () => {
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
    cy.get('.search-keyword').type('ca');
    //selenuum get hit url in browser, cypress get acts like findElement of selenium
    cy.get('.product:visible').should('have.length', 4);
    //Parent child chaining
    cy.get('.products').find('.product').should('have.length', 4);
    cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click();
    cy.contains('ADD TO CART');
    cy.get('.products')
      .find('.product')
      .each(($e1, index, $list) => {
        const textVeg = $e1.find('h4.product-name').text();
        if (textVeg.includes('Cashews')) {
          $e1.find('button').click();
        }
      });
  });

  //fixture
});
