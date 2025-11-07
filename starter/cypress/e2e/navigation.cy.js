describe("Navigation Tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:1234");
  });

  it("should navigate to Card Set page (url)", () => {
    cy.contains("Card Set").click();
    cy.url().should("include", "/cardset");
  });

  it("should navigate to Card Set page", () => {
    cy.contains("Card Set").click();
    cy.get('[data-cy="study-set-header"]').should("exist");
  });

  it("should navigate to About page (url)", () => {
    cy.contains("About").click();
    cy.url().should("include", "/about");
  });

  it("should navigate to About page", () => {
    cy.contains("About").click();
    cy.get('[data-cy="about_page"]').should("exist");
  });

  it("should navigate to Home page", () => {
    cy.contains("Home").click();
    cy.url().should("include", "/");
  });
});
