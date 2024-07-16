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
          date="April 2023 - Present"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FaBriefcase />}
        >
          <h3 className="vertical-timeline-element-title">
            Software QA Engineer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Quality Certain [RSNL : Retail Supermarket Nigeria LTD]
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
          date="June 2023 - April 2024"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FaBriefcase />}
        >
          <h3 className="vertical-timeline-element-title">
            Software QA Engineer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Quality Certain - Fidelity Bank
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
              transaction flows and document uploads using mind maps and
              session-based testing to examine key paths.
            </li>
            <li>
              Designed over 300 test cases for validating fixes, regressions,
              and new functionality across backend APIs and UI flows, ensuring
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
          date="May 2022 - August 2023"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FaBriefcase />}
        >
          <h3 className="vertical-timeline-element-title">
            Software QA Engineer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Denukan Network Limited
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
          <h4 className="vertical-timeline-element-subtitle">Edusko</h4>
          <ul>
            <li>
              Played a crucial role in the successful development and launch of
              Edusko versions 2.0 and 3.0, contributing to increased user
              satisfaction and a significant percentage growth in the active
              user base.
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
            Dornier MedTech - Atlanta [Georgia]
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
            Mechanical Engineering
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Lagos State Polytechnic, Ikorodu
          </h4>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </AboutWrapper>
  );
};

export default Timeline;
