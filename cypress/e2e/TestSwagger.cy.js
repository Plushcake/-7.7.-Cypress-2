//const { describe } = require("mocha");

//const { expect } = require("chai");

//const { expect } = require("chai");

//const { expect } = require("chai");

describe("Swagger", () => {
  let user = {};
  const USER_ID = 1050508976;
  const USER_NAME = "Plushcake";

  it("Create", () => {
    cy.request({
      method: "POST",
      url: "https://petstore.swagger.io/v2/user",
      body: {
        id: USER_ID,
        username: USER_NAME,
        firstName: "string",
        lastName: "string",
        email: "string",
        password: "string",
        phone: "string",
        userStatus: 1,
      },
    }).then(({ body, status }) => {
      cy.log(JSON.stringify(body));
      cy.log(status);
      expect(status).to.eq(200);
    });
  });

  it("Put", () => {
    cy.request({
      method: "PUT",
      url: `https://petstore.swagger.io/v2/user/${USER_NAME}`,
      body: {
        id: USER_ID,
        username: USER_NAME,
        firstName: "Cake",
        lastName: "Eclair",
        email: "tortiki@namnam",
        password: "554433",
        phone: "No",
        userStatus: 0,
      },
    }).then(({ body, status }) => {
      cy.log(body);
      cy.log(status);
      expect(status).to.eq(200);
    });
  });

  it("Delete", () => {
    cy.request({
      method: "DELETE",
      url: `https://petstore.swagger.io/v2/user/${USER_NAME}`,
    }).then(({ status }) => {
      cy.log(status);
      expect(status).to.eq(200);
    });
  });

  it("Deletion check", () => {
    cy.request({
      method: "GET",
      url: `https://petstore.swagger.io/v2/user/${USER_NAME}`,
      failOnStatusCode: false,
    }).then(({ status }) => {
      cy.log(status);
      expect(status).to.eq(404);
    });
  });
});
