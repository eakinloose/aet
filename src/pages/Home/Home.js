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
                  I&apos;m An innovative web design and development professional
                  with three years of extensive experience in analyzing,
                  designing, and developing web-based applications and solutions
                  using a variety of technologies and programming languages
                  seeks to leverage development experience and hands-on
                  technical expertise in a challenging role as a Frontend Heavy
                  Full Stack Developer.
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
                  <Link to="/portfolio">
                     <button>
                        <div className="btn">
                           <span>
                              <BsFillBriefcaseFill />
                              &nbsp;&nbsp;
                              <span className="trans">PORTFOLIO</span>
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
