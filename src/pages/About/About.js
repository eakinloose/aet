import React, { useEffect, useRef, useState } from "react";
import { AboutWrapper } from "./AboutStyles";
import { BsDownload } from "react-icons/bs";
import { GiSpiralArrow } from "react-icons/gi";
import img from "../../images/img.jpg";
import cv from "../../images/cv.pdf";

const About = () => {
  const skillRefs = useRef([]);
  const [percentages, setPercentages] = useState(
    Array(10).fill(0) // Adjust this array size based on the number of skills
  );

  useEffect(() => {
    const options = {
      threshold: 0.1,
    };

    const handleIntersect = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const skillBar = entry.target.querySelector(".item-progress");
          const percent = skillBar.getAttribute("data-percent");
          skillBar.style.width = `${percent}%`;

          const percentText = entry.target.querySelector(".percent");
          percentText.style.left = `${percent}%`;

          const index = skillRefs.current.indexOf(entry.target);

          let currentPercent = 0;
          const increment = percent / 100; // Adjust this value to control the speed of the number increment

          const interval = setInterval(() => {
            currentPercent += increment;
            if (currentPercent >= percent) {
              clearInterval(interval);
              currentPercent = percent;
            }
            setPercentages((prev) => {
              const newPercentages = [...prev];
              newPercentages[index] = Math.floor(currentPercent);
              return newPercentages;
            });
          }, 20); // Adjust the interval time as needed

          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, options);

    skillRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <AboutWrapper>
      <div className="head">
        <h1>
          about <span>me</span>
        </h1>
        <span>
          I design and implement comprehensive QA strategies to ensure software
          quality and reliability.
        </span>
      </div>

      <div className="infos">
        <div className="personal-info">
          <div className="image-container">
            <img src={img} alt="" />
          </div>
          <div className="ul-cont">
            <div className="ul">
              <ul>
                <li>
                  <h4>Akinloose Emmanuel Temidayo</h4>
                </li>

                <li>
                  <h4>Nigerian</h4>
                </li>
                <li>
                  <h4>4+ years experience</h4>
                </li>
                <li>
                  <h4>
                    <a href="mailto:emmanuelakinloose20@gmail.com">
                      Emmanuelakinloose20@gmail.com
                    </a>
                  </h4>
                </li>
              </ul>
              <ul>
                <li>
                  <h4>Available for freelancing</h4>
                </li>
                <li>
                  <h4>English</h4>
                </li>
                <li>
                  <h4>
                    <a href="tel:+2348142939448">+234 8142 939 448</a>
                  </h4>
                </li>

                <li>
                  <h4>Lagos, Nigeria</h4>
                </li>
              </ul>
            </div>
            <a
              href={cv}
              download="Akinloose Emmanuel Resume"
              className="btn-resume"
            >
              <button>
                <div className="btn">
                  <span>
                    <BsDownload />
                    &nbsp;&nbsp;
                    <span className="trans">download cv</span>
                  </span>
                </div>
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Skills Starts */}
      <div>
        <div className="col-12">
          <h2 className="font-weight-600 uppercase title-section skills-title">
            Skills
          </h2>
        </div>
        <div className="skills">
          {[
            { name: "Java", percent: 85 },
            { name: "JavaScript", percent: 90 },
            { name: "Cypress", percent: 90 },
            { name: "Playwright", percent: 75 },
            { name: "Appium", percent: 80 },
            { name: "Postman", percent: 90 },
            { name: "REST Assured", percent: 75 },
            { name: "JMeter", percent: 70 },
            { name: "K6", percent: 75 },
            { name: "Groovy scripting", percent: 80 },
          ].map((skill, index) => (
            <div
              className="col-md-4"
              key={index}
              ref={(el) => (skillRefs.current[index] = el)}
            >
              <span className="skill-text">{skill.name}</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={skill.percent}
                  style={{ width: 0 }}
                />
                <span className="percent" style={{ left: 0 }}>
                  <GiSpiralArrow />
                </span>
                <p>{percentages[index]}%</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Skills Ends */}
    </AboutWrapper>
  );
};

export default About;
