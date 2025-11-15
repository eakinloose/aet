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
export const cypressBasicCustomCommands = `
// Basic Custom Command: Login Example
    Cypress.Commands.add("login", (username, password) => {
      cy.visit('/login');
      cy.get('input[name=username]').type(username);
      cy.get('input[name=password]').type(password);
      cy.get('button[type=submit]').click();
    });

    // Usage Example
    describe('Login Test Suite', () => {
      it('should log in successfully', () => {
        cy.login('testuser', 'password123');
        cy.url().should('include', '/dashboard');
      });
    });
  `;

export const cypressAdvancedCustomCommands = `
// Advanced Custom Commands and Overriding Commands
    Cypress.Commands.add(
      "buttonWithText",
      { prevSubject: "optional" },
      (subject, text) => {
        const trimmedText = text.trim();
        if (subject) {
          return cy.wrap(subject).contains("button", new RegExp({trimmedText}));
        } else {
          return cy.contains("button", new RegExp({trimmedText}));
        }
      }
    );

    Cypress.Commands.add(
      "shouldContainText",
      { prevSubject: "element" },
      (subject, text) => {
        cy.wrap(subject).should("exist").should("contain", text);
      }
    );

    Cypress.Commands.add(
      "shouldBeDisabled",
      { prevSubject: "element" },
      (subject) => {
        cy.wrap(subject).should("have.attr", "disabled");
      }
    );

    // Overriding the 'visit' command to log the URL being visited
    Cypress.Commands.overwrite('visit', (originalFn, url, options) => {
      console.log(\`Visiting URL: url\`);
      return originalFn(url, options);
    });

    // Overriding the 'type' command to add a delay
    Cypress.Commands.overwrite('type', (originalFn, subject, string, options) => {
      const delayOptions = { ...options, delay: 100 };
      return originalFn(subject, string, delayOptions);
    });

    // Replacing the 'visit' command with a custom 'goto' command
    Cypress.Commands.add("goto", (url, options = {}) => {
      cy.log(\`Navigating to URL: url\`);
      return cy.visit(url, options);
    });

    // Usage Examples
    describe('Advanced Custom Commands Test Suite', () => {
      it('should find a button with specific text', () => {
        cy.goto('/somepage');
        cy.buttonWithText('Click Me').click();
      });

      it('should verify that an element contains specific text', () => {
        cy.goto('/somepage');
        cy.get('.some-element').shouldContainText('Expected Text');
      });

      it('should check if an element is disabled', () => {
        cy.goto('/somepage');
        cy.get('.some-button').shouldBeDisabled();
      });
    });

    describe('Overridden Commands Test Suite', () => {
      it('should log the URL when visiting a page', () => {
        cy.visit('/somepage');
      });

      it('should type with a delay', () => {
        cy.visit('/somepage');
        cy.get('input[name=username]').type('testuser');
      });
    });

    describe('Replacing Default Commands Test Suite', () => {
      it('should use the custom goto command instead of visit', () => {
        cy.goto('/custompage');
        cy.url().should('include', '/custompage');
      });
    });
  `;
