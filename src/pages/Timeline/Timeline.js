import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaBriefcase, FaSchool } from "react-icons/fa";
import { AboutWrapper } from "../About/AboutStyles";

const Timeline = () => {
  return (
    <AboutWrapper>
      <div className="head">
        <h1>
          Work <span>Experience</span>
        </h1>
      </div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="February 2024 - Present"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FaBriefcase />}
        >
          <h3 className="vertical-timeline-element-title">
            Software Development Engineer in Test (SDET)
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Sterling Bank Plc, Lagos, Nigeria
          </h4>
          <ul>
            <li>
              Leveraged Java with Appium to develop robust mobile automation
              frameworks for Android and iOS platforms, ensuring comprehensive
              test coverage and enhanced mobile application quality.
            </li>
            <li>
              Utilized Cypress for web automation, creating efficient and
              reliable test scripts tailored to the organization's specific
              needs.
            </li>
            <li>
              Conducted performance testing using JMeter and K6, writing
              advanced Groovy scripts to handle complex and dynamic scenarios to
              ensure the system's stability under load.
            </li>
            <li>
              Automated and created reusable scripts for encrypting payloads and
              decrypting responses across various platforms, utilizing Groovy
              scripting in JMeter and JavaScript in Postman.
            </li>
            <li>
              Developed custom commands and assertions for Cypress automation,
              ensuring that the automation scripts were uniquely tailored to the
              organization's requirements.
            </li>
            <li>
              Designed and implemented comprehensive test strategies, focusing
              on critical areas such as transaction flows, security, and
              performance, to ensure the highest quality of software releases.
            </li>
            <li>
              Collaborated closely with cross-functional teams, including
              developers and product managers, to ensure seamless integration
              and functionality of software components.
            </li>
            <li>
              Tracked and reported key metrics on test progress, component
              stability, and defect trends, providing valuable insights to
              stakeholders and guiding quality assurance efforts.
            </li>
            <li>
              Conducted post-release retrospectives, working with developers to
              capture lessons learned and apply continuous improvement
              principles to the testing and release processes.
            </li>
            <li>
              Contributed to improving other QA engineers and provided guides
              and training on best practices in test automation and performance
              testing, fostering a culture of quality and continuous learning
              within the team.
            </li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="April 2024 - May 2024"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FaBriefcase />}
        >
          <h3 className="vertical-timeline-element-title">
            Software QA Engineer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            RSNL : Retail Supermarket Nigeria LTD (Shoprite & JARA), Lagos,
            Nigeria
          </h4>
          <ul>
            <li>
              Developed and executed comprehensive test plans, test cases, and
              collaborated with cross-functional teams, including developers and
              product managers, to ensure seamless integration and
              functionality.
            </li>
            <li>
              Conducted manual testing to identify and resolve defects early in
              the development cycle.
            </li>
            <li>
              Analyzed test results, identified trends, and provided detailed
              reports to stakeholders.
            </li>
            <li>
              Ensured compliance with industry standards and best practices in
              software quality assurance.
            </li>
            <li>
              Participated in agile development processes, including sprint
              planning, daily stand-ups, and retrospectives.
            </li>
            <li>
              Assisted in the continuous improvement of QA processes and tools
              to enhance testing efficiency and coverage.
            </li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="June 2023 - February 2024"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FaBriefcase />}
        >
          <h3 className="vertical-timeline-element-title">
            Software QA Engineer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Fidelity Bank Plc, Lagos, Nigeria
          </h4>
          <ul>
            <li>
              Engaging in user reviews and contributing feedback on
              requirements, product design, and possible issues.
            </li>
            <li>
              Coordinating and conducting User Acceptance Testing (UAT) to
              ensure satisfaction among stakeholders.
            </li>
            <li>
              Developed and executed new test strategies focused on a Core
              Banking platform with Online Banking, Document Upload, POS, and
              Reversal modules.
            </li>
            <li>
              Created test scenarios mapping to 100+ user stories for bank
              transaction flows and document uploads. Using mind maps and
              session-based testing to examine key paths.
            </li>
            <li>
              Designed over 300 test cases for validating fixes, regressions,
              and new functionality across backend APIs and UI flows. Ensuring
              90%+ test coverage of all modules.
            </li>
            <li>
              Automated 65% of regression test cases using Cypress + Cucumber
              Framework, CD/CI pipeline in Jenkins, accelerating release
              certification.
            </li>
            <li>
              Boosted team’s agile maturity with shifting left testing
              methodologies, raising confidence for earlier build approvals.
            </li>
            <li>
              Helped instill greater accountability for quality with bug
              release/defect leakage metrics providing transparency into escape
              rates.
            </li>
            <li>
              Tracked and reported metrics on test progress, component
              stability, and top defects, helping showcase QA areas for focus.
            </li>
            <li>
              Autonomously created and executed performance test scenarios in
              JMeter for scale, volume, load testing, pinpointing bottlenecks.
            </li>
            <li>
              Conducted post-release retrospective working with developers to
              capture lessons learned for the test/release processes to apply
              continuous improvement principles.
            </li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="May 2022 - June 2023"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FaBriefcase />}
        >
          <h3 className="vertical-timeline-element-title">
            Software QA Engineer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Denukan Network Limited, Lagos, Nigeria
          </h4>
          <ul>
            <li>
              Created and executed software test plans, test cases, and scripts
              to identify software issues within a Core Banking App.
            </li>
            <li>
              Significantly improved the organization's finance application
              efficiency by 30% and successfully reduced customer complaints to
              a significant degree.
            </li>
            <li>
              Implemented and maintained automated testing frameworks using
              tools such as Cypress, Appium, and TestNG.
            </li>
            <li>
              Implemented measures that resulted in a 15% decrease in the IT
              workload.
            </li>
            <li>
              Identified and reported bugs in the development of different web,
              android, and iOS mobile applications.
            </li>
            <li>
              Ensured comprehensive testing of APIs by automating them with
              Postman and Newman.
            </li>
            <li>
              Implemented Test-driven Development (TDD) process within the
              software team, This approach led to improved code quality,
              enhanced software functionality, and increased programmer
              productivity.
            </li>
            <li>Established early testing in the development cycle.</li>
            <li>
              Effectively communicated with the software design team by
              leveraging my programming knowledge, earning their respect and
              establishing myself as a valuable team member.
            </li>
            <li>
              Established a standardized process to define clear testing
              expectations for developers, ensuring accountability for their
              work on the non-functional level.
            </li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="January 2021 - May 2022"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FaBriefcase />}
        >
          <h3 className="vertical-timeline-element-title">
            Software QA Engineer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Edusko, Lagos, Nigeria
          </h4>
          <ul>
            <li>
              Played a crucial role in the successful development and launch of
              Edusko versions 2.0 and 3.0, contributing to increased user
              satisfaction and a significant percentage growth in active user
              base.
            </li>
            <li>
              Developed and executed comprehensive test plans, resulting in
              around 30% reduction in critical defects in both versions,
              enhancing overall software stability and performance.
            </li>
            <li>
              Collaborated closely with the development team to implement an
              efficient automated testing framework, resulting in a 40% decrease
              in testing time and improved release cycles.
            </li>
            <li>
              Identified and reported 100% of high-severity bugs during the
              testing phase, ensuring a smooth and almost error-free user
              experience in both versions of Edusko.
            </li>
            <li>
              Implemented rigorous performance testing methodologies, leading to
              a 15% improvement in application response time and a 25% reduction
              in server resource utilization.
            </li>
            <li>
              Actively participated in cross-functional team meetings and
              provided valuable insights on user requirements, resulting in a
              10% increase in feature adoption and customer satisfaction.
            </li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="May 2020 - June 2021"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FaBriefcase />}
        >
          <h3 className="vertical-timeline-element-title">
            Associate QA Engineer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Dornier MedTech, Atlanta, United States
          </h4>
          <ul>
            <li>
              Executed software usability tests to ensure a user-friendly
              experience.
            </li>
            <li>
              Analyzed test results for database impacts, errors, bugs, and
              usability.
            </li>
            <li>
              Prepared reports covering all aspects of software testing and
              communicated them to the design team.
            </li>
            <li>
              Engaged with clients to understand their product requirements and
              used Miro to break them down for efficient test case creation.
            </li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2014 - 2019"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<FaSchool />}
        >
          <h3 className="vertical-timeline-element-title">
            Lagos State Polytechnic
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Mechanical Engineering
          </h4>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </AboutWrapper>
  );
};

export default Timeline;
