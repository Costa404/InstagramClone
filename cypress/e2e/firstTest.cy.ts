describe("testing navigation between pages", () => {
  it("Should navigate to the homepage when clicking on Home", () => {
    cy.visit("http://localhost:5173/homepage");

    cy.get('[data-testid="cypress-hrefHome"]').click();
    cy.viewport(1222, 720);
    cy.url().should("eq", "http://localhost:5173/homepage#");
    cy.get(".container-fluid").should("be.visible");
  });
});
