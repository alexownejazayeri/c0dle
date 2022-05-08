/* eslint-disable no-undef */

describe('Code-le players', () => {
  it('can navigate to a fresh game', () => {
    // Arrange
    cy.visit('https://code-le.com');

    // Act
    cy.contains('A').click();
    cy.get('#S-key').click();
    cy.get('#Y-key').click();
    cy.get('#N-key').click();
    cy.get('#C-key').click();
    cy.get('#enter-key').click();

    cy.contains('A').click();
    cy.get('#S-key').click();
    cy.get('#Y-key').click();
    cy.get('#N-key').click();
    cy.get('#C-key').click();
    cy.get('#enter-key').click();

    cy.contains('A').click();
    cy.get('#S-key').click();
    cy.get('#Y-key').click();
    cy.get('#N-key').click();
    cy.get('#C-key').click();
    cy.get('#enter-key').click();

    cy.contains('A').click();
    cy.get('#S-key').click();
    cy.get('#Y-key').click();
    cy.get('#N-key').click();
    cy.get('#C-key').click();
    cy.get('#enter-key').click();

    cy.contains('A').click();
    cy.get('#S-key').click();
    cy.get('#Y-key').click();
    cy.get('#N-key').click();
    cy.get('#C-key').click();
    cy.get('#enter-key').click();

    cy.contains('A').click();
    cy.get('#S-key').click();
    cy.get('#Y-key').click();
    cy.get('#N-key').click();
    cy.get('#C-key').click();
    cy.get('#enter-key').click();

    cy.get('.stats-btn');
    cy.get('.close-icon > svg').click();

    cy.get('.new-game-btn').click();
  });
});
