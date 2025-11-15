import React from "react";
import pmt from "../../images/pmt.png";
import { AboutWrapper } from "../About/AboutStyles";

const Tools = () => {
  return (
    <AboutWrapper>
      <div className="head">
        <h1>
          My <span>Tools</span>
        </h1>
      </div>
      <h2>API Test Report Generator</h2>
      <img src={pmt} alt="postman runner" className="native" />
      <a href="https://nuels-postman-runner.onrender.com/">
        https://nuels-postman-runner.onrender.com
      </a>
      <section id="features">
        <div class="container">
          <section id="how-it-works">
            <div class="container">
              <h2>How It Works</h2>
              <p>
                This website allows you to upload your Postman collection and
                environment files to run API tests and generate comprehensive
                reports.
              </p>
              <ol>
                <li>
                  <strong>Upload Files:</strong> Start by uploading your Postman
                  collection and environment files.
                </li>
                <li>
                  <strong>Test Execution:</strong> The website will execute the
                  tests and gather results.
                </li>
                <li>
                  <strong>Generate Reports:</strong> Reports are generated in
                  various formats including JSON, HTML, CSV, XML, and Excel.
                  These reports provide detailed insights into your API tests.
                </li>
                <li>
                  <strong>Download Results:</strong> Once the tests are
                  complete, you can download a ZIP file containing all the
                  reports.
                </li>
                <li>
                  <strong>Cleanup:</strong> Temporary files and directories are
                  automatically cleaned up to ensure efficient use of storage.
                </li>
              </ol>
            </div>
          </section>
          <h2>Features</h2>
          <ul>
            <li>Upload Postman collections and environment files</li>
            <li>Execute API tests and gather results</li>
            <li>Generate reports in JSON, HTML, CSV, XML, and Excel formats</li>
            <li>Download a ZIP file containing all the reports</li>
            <li>Automatic cleanup of temporary files</li>
          </ul>
        </div>
      </section>
      <section id="security">
        <div class="container">
          <h2>Security</h2>
          <p>Our tool ensures your data is secure:</p>
          <ul>
            <li>
              No database storage: Your uploaded collections and environment
              files are not stored on our servers.
            </li>
            <li>
              Local storage: The tests run using the storage of the system
              executing the tests.
            </li>
            <li>
              Post-test cleanup: All temporary files and directories are deleted
              after the test execution.
            </li>
            <li>Privacy: No record of the run is kept on the website.</li>
            <li>
              Secure download: You receive a ZIP file with all the results,
              ensuring your data remains private and secure.
            </li>
          </ul>
        </div>
      </section>
    </AboutWrapper>
  );
};

export default Tools;
