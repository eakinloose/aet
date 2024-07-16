export const cypressInterceptsOne = `
/// <reference types="Cypress"/>

describe("Login suite", () => {
  it("should login by using token from API request and then enter OTP", () => {
    cy.visit("http://127.0.0.1:5501/sample.html");
    cy.intercept({
      method: "GET",
      url: "https://run.mocky.io/v3/1dfef7e4-2e6f-403a-a217-92453f3b53d4",
    }).as("getToken");
    cy.get("input[placeholder='Username']").type("myUsername");
    cy.get("input[placeholder='Password']").type("myPaswword");
    cy.get("button").contains("Login").click();
    cy.on("log:added", (attrs, log) => {
      console.log(attrs.name, log);
    });
    cy.wait("@getToken", { timeout: 10000 }).then((interception) => {
      console.log("Interception:", interception);
      const token = interception.response.body.token;
      cy.get("input[placeholder='OTP']").type(token);
      cy.get('button[type="submit"]').click();
      cy.wait(30000);
    });
  });
});
  `;

export const cypressInterceptsTwo = `
/// <reference types="Cypress"/>

const crypto = require("crypto");

function decrypt(encryptedData) {
  return new Promise((resolve, reject) => {
    try {
      const algorithm = "aes-128-cbc";
      const key = Buffer.from("qwertyuiop123456", "utf8");
      const ivBuffer = Buffer.from("109qpoalkzmn@G!@", "utf8");
      const decipher = crypto.createDecipheriv(algorithm, key, ivBuffer);

      let decrypted = decipher.update(encryptedData, "base64", "utf8");
      decrypted += decipher.final("utf8");

      resolve(decrypted);
    } catch (error) {
      reject(error);
      console.log("decryption failed...");
    }
  });
}

describe("Login suite", () => {
  it.only("should login by using token from API request and then enter OTP", () => {
    cy.visit("http://127.0.0.1:5501/sample.html");
    cy.intercept({
      method: "GET",
      url: "https://run.mocky.io/v3/02eeaf24-e8a6-4898-b065-916eaed75a2f",
    }).as("encryptedResponse");
    cy.get("input[placeholder='Username']").type("myUsername");
    cy.get("input[placeholder='Password']").type("myPaswword");
    cy.get("button").contains("Login").click();
    cy.on("log:added", (attrs, log) => {
      console.log(attrs.name, log);
    });
    cy.wait("@encryptedResponse")
      .then((resp) => {
        console.log(resp.response.body);
        return resp.response.body, decrypt(resp.response.body);
      })
      .then((decryptedData) => {
        console.log("decryptedData:", decryptedData);
        let decryptedResponse = JSON.parse(decryptedData);
        let token = decryptedResponse.token;
        console.log(token);
        cy.get("input[placeholder='OTP']").type(token);
        cy.get("button").contains("Submit").click();
        cy.wait(30000);
      });
  });
});
  `;
