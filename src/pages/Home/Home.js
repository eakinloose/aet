/* eslint-disable jsx-a11y/img-redundant-alt */
import { Link } from "react-router-dom";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { ImProfile } from "react-icons/im";
import AnimationText from "../../components/AnimationText";
import { HomeWrapper } from "./HomeStyles";
import img from "../../images/img.jpg";

const Home = () => {
  return (
    <HomeWrapper>
      <div className="details">
        <div className="imgWrapper">
          <img src={img} alt="profile picture for akinloose " />
        </div>

        <div className="contents">
          <div className="name">
            <h3>Hi there ! </h3>
            <AnimationText />
          </div>
          <p>
            Experienced QA Engineer with five years of comprehensive experience
            in the QA industry, specializing in designing, developing, and
            executing software test plans and automation frameworks. Proficient
            in Java, JavaScript and Groovy scripting, with a strong background
            in using Cypress, Playwright, Appium, Postman, REST Assured, JMeter,
            and K6 for functional and non-functional testing. Adept at setting
            up custom automation frameworks, developing test strategies, and
            ensuring compliance with industry standards. Proven ability to
            collaborate effectively with cross-functional teams to enhance
            software quality and improve development processes.
          </p>
          <div className="btns">
            <Link to="/about">
              <button>
                <div className="btn">
                  <span>
                    <ImProfile />
                    &nbsp;&nbsp;<span className="trans">ABOUT</span>
                  </span>
                </div>
              </button>
            </Link>
            &nbsp;&nbsp;
            <Link to="/blog">
              <button>
                <div className="btn">
                  <span>
                    <BsFillBriefcaseFill />
                    &nbsp;&nbsp;
                    <span className="trans">BLOG</span>
                  </span>
                </div>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </HomeWrapper>
  );
};
export default Home;
