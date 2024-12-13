describe("testing navigation between pages", () => {
  it("Should navigate to the homepage when clicking on Home", () => {
    cy.visit("http://localhost:5173/homepage");

    cy.get('[data-testid="cypress-hrefHome"]').click();
    cy.viewport(1222, 720);
    cy.url().should("eq", "http://localhost:5173/homepage#");
    cy.get(".container-fluid").should("be.visible");
  });

  // it("Should navigate to the Profile page", () => {
  //   // Clica no link de perfil (assumindo que existe um botão ou link com esse data-testid)

  //   cy.visit("http://localhost:5173/homepage/guest799#");

  //   cy.get('[data-testid="cypress-Profile"]').click();

  //   // Verifica se a URL foi atualizada corretamente para a página de perfil
  //   cy.url().should("eq", "http://localhost:5173/homepage/undefined#");

  //   // Verifica se algum elemento do perfil está visível, por exemplo
  // });
});
