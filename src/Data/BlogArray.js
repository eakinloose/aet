import {
  cypressAdvancedCustomCommands,
  cypressBasicCustomCommands,
  cypressInterceptsOne,
  cypressInterceptsTwo,
} from "./snippets";

const blogContent = [
  {
    kind: "books#volume",
    id: "Q-hTDwAAQBAJ",
    etag: "iY6n7mN8Twg",
    volumeInfo: {
      title: "Cypress Intercepts",
      subtitle: "Cypress Intercepts and data extraction from response",
      subtitleTwo: "Encrypted response as a case study",
      authors: ["Akinloose Emmanuel Temidayo"],
      publishedDate: "2024-07-16",
      description: `
      <h4>Understanding cypress Intercepts</h4>
Cypress intercepts provide a powerful way to manage and validate network requests within your tests. They allow you to capture and manipulate requests and responses, making your tests more robust and reliable. This capability is particularly useful in scenarios where you need to verify that your application correctly handles data from external APIs.
<br><br>
<strong>Use Case 1: Basic Cypress Intercept</strong>
<br>
Imagine you are testing a login feature for a web application where the login process requires an OTP (One-Time Password) sent via an API call. This process is common in applications requiring enhanced security, such as banking apps or enterprise systems. To automate this test, you need to capture the OTP from the API response and use it to complete the login.

The provided code snippet demonstrates how to achieve this with Cypress. The test starts by visiting the login page and entering the username and password. After clicking the login button, Cypress intercepts the GET request to a specified URL, which returns a token as part of the response. By waiting for this request to complete, the test extracts the token and enters it into the OTP field. This ensures that your test mimics the actual user experience and verifies that the login process works as expected. Such automation is invaluable for ensuring the reliability of security features in your application.`,
      imageUrl: {
        smallThumbnail:
          "https://miro.medium.com/v2/resize:fit:1358/1*pU_h27oaQTXPjLxAhMMG0A.png",
      },
    },
    exampleCode1: cypressInterceptsOne,
    exampleCode2: cypressInterceptsTwo,
    description2: `In more complex scenarios, the data returned by the API might be encrypted, adding an extra layer of security. For instance, consider a situation where sensitive information, such as an OTP, needs to be securely transmitted and stored. Your application might decrypt this data before using it, and your tests need to replicate this behavior to ensure accuracy.

The second code example illustrates how to handle encrypted API responses. After visiting the login page and entering the credentials, the test intercepts a GET request that returns an encrypted response. A decryption function is defined to decrypt the data, using the AES-128-CBC algorithm, a key, and an initialization vector (IV). The decrypted data, containing the OTP, is then used to complete the login process. This approach ensures that your tests accurately reflect the application's security measures and can handle encrypted data seamlessly. Automating such tests is crucial for applications dealing with sensitive information, ensuring that encryption and decryption processes function correctly under various conditions.`,
    conclusion: `Cypress intercepts are a vital tool for modern test automation, allowing you to capture, manipulate, and validate network requests within your tests. They enable you to ensure that your application handles data from external APIs correctly, both in plain and encrypted forms. By incorporating intercepts into your tests, you can simulate real-world user interactions more accurately and verify that your application's security features work as intended. This level of testing is essential for maintaining the integrity and reliability of applications in sectors like finance, healthcare, and enterprise systems.

These examples demonstrate practical applications of Cypress intercepts, making your automated tests more robust and comprehensive. By ensuring that your tests can handle both straightforward and encrypted API responses, you can maintain high standards of quality and security in your application.`,
  },
  {
    kind: "books#volume",
    id: "B-QZ1234KJ",
    etag: "a8f7j6H9r5g",
    volumeInfo: {
      title: "Cypress Commands",
      subtitle: "Enhancing Your Test Automation with Custom Commands",
      authors: ["Akinloose Emmanuel Temidayo"],
      publishedDate: "2024-07-19",
      description: `
      <h4>Creating Custom Cypress Commands</h4>
      Custom commands in Cypress are an excellent way to extend the functionality of your tests and make them more readable and maintainable. By defining custom commands, you can encapsulate repetitive actions and complex logic, making your tests more concise and expressive. This approach not only enhances code reusability but also improves the overall efficiency of your test suite.
      <br><br>
      <strong>Use Case 1: Basic Cypress Custom Command</strong>
      <br>
      Imagine you need to log in frequently during your tests. Instead of repeating the login steps multiple times, you can create a custom command to streamline this process. The following example demonstrates how to create a simple custom command in Cypress:
    `,
      imageUrl: {
        smallThumbnail:
          "https://miro.medium.com/v2/resize:fit:1358/1*pU_h27oaQTXPjLxAhMMG0A.png",
      },
    },
    exampleCode1: cypressBasicCustomCommands,
    exampleCode2: cypressAdvancedCustomCommands,

    description2: `
    In more advanced scenarios, you might need custom commands that interact with elements in specific ways, such as clicking a button with a particular text or verifying that an element contains specific text. Cypress provides a powerful way to create such commands using the <code>prevSubject</code> option, which allows you to chain commands and operate on the subject of the previous command.
    <br><br>
    Additionally, you might want to override existing Cypress commands to extend or modify their behavior. This can be useful for adding custom logic or handling edge cases specific to your application.
    <br><br>
    The following code snippets illustrate how to create advanced custom commands, how to override existing Cypress commands, and how to completely replace default commands with your own implementations:
  `,
    conclusion: `
    Custom commands are a powerful feature in Cypress that can significantly enhance your test automation capabilities. By creating both basic and advanced custom commands, you can make your tests more readable, maintainable, and reusable. Whether you're selecting elements, interacting with buttons, or verifying attributes, custom commands help streamline your testing process and ensure that your tests accurately reflect real-world user interactions.
    <br><br>
    These examples demonstrate practical applications of creating custom Cypress commands, making your automated tests more efficient and expressive. By incorporating both basic and advanced custom commands, you can maintain high standards of quality and reliability in your application.
  `,
  },
];
export default blogContent;
