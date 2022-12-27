describe('BuyHouse', () => {
  it('insert the amount and skip 2 months foward then go back one month', () => {
    cy.visit('http://localhost:3000/buy-a-house');

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

  it('insert all the values and confirm to persist them', () => {
    cy.visit('http://localhost:3000/buy-a-house');

    cy.get('.amount').type('3500.45');

    cy.get('.arrow-right')
      .click()
      .click()
      .click()
      .click()
      .click()
      .click()
      .click()
      .click()
      .click()
      .click()
      .click()
      .click()
      .click();

    cy.get('.big-button').click();

    cy.visit('http://localhost:3000/buy-a-house');

    cy.get('.month').should('have.text', 'February');
    cy.get('.year').should('have.text', '2024');
    cy.get('.amount').should('have.value', '3,500.45');
    cy.get('.monthly-amount__value').should('have.text', '250.03');
  });
});
