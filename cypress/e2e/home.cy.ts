describe('Home', () => {
  it('navigate to designed page', () => {
    cy.visit('http://localhost:3000/');

    cy.get('.card-buy-a-house').click();

    cy.url().should('eq', 'http://localhost:3000/buy-a-house');
  });
});
