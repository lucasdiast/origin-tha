describe('BuyHouse', () => {
  it('insert the amount and skip 2 months foward then go back one month', () => {
    cy.visit('http://localhost:3000/');

    cy.get('.amount').type('3500.45');

    cy.get('.monthly-amount__value').should('have.text', '3,500.45');

    cy.get('.arrow-right').click();

    cy.get('.monthly-amount__value').should('have.text', '1,750.22');

    cy.get('.arrow-right').click();

    cy.get('.monthly-amount__value').should('have.text', '1,166.82');

    cy.get('.arrow-left').click().click();

    cy.get('.monthly-amount__value').should('have.text', '3,500.45');

    cy.get('.arrow-left').click();

    cy.get('.monthly-amount__value').should('have.text', '3,500.45');
  });
});
