describe("Form Tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:1234");
    cy.contains("Card Set").click();
  });

  //TEST 1: Create Set Form
  it("should submit Create Set Form successfully (happy path)", () => {
    cy.get('[data-cy="toggle_form"]').contains("Add New Set").click();
    cy.get('[data-cy="set_form"]').should("be.visible");

    cy.get("#titleInput").type("My Flashcard Set");
    cy.get('[data-cy="set_form"]').submit();

    cy.get("#titleInput").should("have.value", "");
  });

  it("should show error when submitting empty Create Set Form (unhappy path)", () => {
    cy.get('[data-cy="toggle_form"]').contains("Add New Set").click();
    cy.get('[data-cy="set_form"]').should("be.visible");
    cy.get('[data-cy="set_form"]').submit();

    cy.contains("CANNOT BE EMPTY").should("exist");
  });

  //TEST 2: Add Card Form
  it("should submit Add Card Form successfully (happy path)", () => {
    cy.get('[data-cy="1"]').click();
    cy.get('[data-cy="toggle_form"]').contains("Add New Card").click();
    cy.get('[data-cy="card_form"]').should("be.visible");

    cy.get("#termInput").type("JavaScript");
    cy.get("#descriptionInput").type("A programming language");
    cy.get('[data-cy="card_form"]').submit();

    cy.get("#termInput").should("have.value", "");
  });

  it("should show error when submitting empty Add Card Form (unhappy path)", () => {
    cy.get('[data-cy="1"]').click();
    cy.get('[data-cy="toggle_form"]').contains("Add New Card").click();
    cy.get('[data-cy="card_form"]').should("be.visible");
    cy.get('[data-cy="card_form"]').submit();

    cy.contains("CANNOT BE EMPTY").should("exist");
  });
});
