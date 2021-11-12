// Nom d'uilisateur pour se connecter standard_user
it.only(" SC1 - Valid username and password", () => {
  cy.visit("https://www.saucedemo.com/");
  cy.task("getClipboard").then((clipboard) => {
    cy.get('[data-test="username"]').type(clipboard);
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click();
  });
});
