describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/');

    cy.get('[title="For You"]').first().click();

    cy.get('.home').should('have.text');
  })
})