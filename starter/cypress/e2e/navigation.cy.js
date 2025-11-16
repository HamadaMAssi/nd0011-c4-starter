describe('Navigation Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:1234');
  });

  it('should navigate to Card Set page (happy path)', () => {
    cy.contains('Card Set').click();
    cy.get('[data-cy="study-set-header"]').should('exist');
  });

  it('should NOT show About page content when navigating to Card Set (unhappy path)', () => {
    cy.contains('Card Set').click();
    cy.get('[data-cy="about_page"]').should('not.exist');
  });

  it('should navigate to About page (happy path)', () => {
    cy.contains('About').click();
    cy.get('[data-cy="about_page"]').should('exist');
  });

  it('should NOT show Card Set content when navigating to About (unhappy path)', () => {
    cy.contains('About').click();
    cy.get('[data-cy="study-set-header"]').should('not.exist');
  });

  it('should navigate to Home page (happy path)', () => {
    cy.contains('Home').click();
    cy.get('[data-cy="home_header"]').should('exist');
  });

  it('should NOT show About content when navigating Home (unhappy path)', () => {
    cy.contains('Home').click();
    cy.get('[data-cy="about_page"]').should('not.exist');
  });
});
