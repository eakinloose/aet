/* eslint-disable jsx-a11y/img-redundant-alt */
import { Link } from "react-router-dom";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { ImProfile } from "react-icons/im";
import AnimationText from "../../components/AnimationText";
import { HomeWrapper } from "./HomeStyles";
import img from "../../images/img.jpg";

//Home
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
            Experienced QA Engineer with over five years of hands-on experience
            in designing and implementing automation frameworks across web,
            mobile, and backend systems. Skilled in Java, JavaScript, and
            Groovy, with strong expertise in Cypress, Playwright, Selenium,
            Appium, Postman, REST Assured, JMeter, K6, and custom API automation
            using Axios, Mocha, and Chai. Adept at testing encrypted services,
            API security flows, and database validations while building
            scalable, reliable automation solutions. Known for improving QA
            processes, collaborating effectively with cross-functional teams,
            and consistently contributing to the delivery of high-quality
            software.
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
            <Link to="/experience">
              <button>
                <div className="btn">
                  <span>
                    <BsFillBriefcaseFill />
                    &nbsp;&nbsp;
                    <span className="trans">Experience</span>
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
