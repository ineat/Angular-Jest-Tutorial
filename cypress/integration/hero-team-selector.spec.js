describe("Hero Team Selector", () => {
  beforeEach(() => {
    cy.server();
    cy.route("GET", "/hero", "fixture:hero.json");
    cy.route("GET", "/wicked", "fixture:wicked.json");
    cy.visit("http://localhost:4200");
  });

  it("Application footer contain copyright text", () => {
    cy.get(".app--footer")
      .find("p")
      .should($p => {
        expect($p).to.contain("© Ineat Group - iLab Team.");
      });
  });

  it("Available Hero List contains 6 members", () => {
    cy.get(".selector-wrapper")
      .find(".list")
      .eq(0)
      .find("app-hero-list-item")
      .its("length")
      .should("eq", 6);
  });

  it("Available Wicked List contains 3 members", () => {
    cy.get(".selector-wrapper")
      .find(".list")
      .eq(1)
      .find("app-hero-list-item")
      .its("length")
      .should("eq", 3);
  });

  it("Home page contains 2 empty team", () => {
    cy.get(".teams-wrapper")
      .find(".team")
      .its("length")
      .should("eq", 2);
    cy.get(".teams-wrapper")
      .find(".team")
      .eq(0)
      .find("app-empty-card")
      .its("length")
      .should("eq", 5);
    cy.get(".teams-wrapper")
      .find(".team")
      .eq(1)
      .find("app-empty-card")
      .its("length")
      .should("eq", 5);
  });

  it("Hero Team was full when 5 heroes were added", () => {
    for (let i = 0; i < 5; i++) {
      cy.get(".selector-wrapper")
        .find(".list")
        .eq(0)
        .find("app-hero-list-item")
        .eq(i)
        .find("button")
        .click();
    }

    cy.get(".teams-wrapper")
      .find(".team")
      .eq(0)
      .find("app-hero-card")
      .its("length")
      .should("eq", 5);
  });

  it("Remove Hero from Hero Team when remove button was cliked", () => {
    for (let i = 0; i < 3; i++) {
      cy.get(".selector-wrapper")
        .find(".list")
        .eq(0)
        .find("app-hero-list-item")
        .eq(i)
        .find("button")
        .click();
    }

    cy.get(".teams-wrapper")
      .find(".team")
      .eq(0)
      .find("app-hero-card")
      .its("length")
      .should("eq", 3);

    cy.get(".teams-wrapper")
      .find(".team")
      .eq(0)
      .find("app-hero-card")
      .eq(1)
      .find(".remove-btn")
      .click();

    cy.get(".teams-wrapper")
      .find(".team")
      .eq(0)
      .find("app-hero-card")
      .its("length")
      .should("eq", 2);
  });
});
