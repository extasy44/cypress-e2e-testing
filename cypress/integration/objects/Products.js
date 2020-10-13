class Products {
  checkOutButton() {
    return cy.get('input[name="name"]:nth-child(2)');
  }
}
export default Products;
