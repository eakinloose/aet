import AOS from "aos";
import "aos/dist/aos.css";
import { PortfolioWrapper } from "./PortfolioStyles";
import native1 from "../../images/projects/native1.png";
import native2 from "../../images/projects/native2.png";
import react1 from "../../images/projects/react1.png";
import react2 from "../../images/projects/react2.jpg";
import react3 from "../../images/projects/react3.png";
import node1 from "../../images/projects/node1.png";
import doc from "../../images/index.html.zip";
import { Link } from "react-router-dom";

AOS.init();

const Work = () => {
   return (
      <PortfolioWrapper>
         {/* Main Heading Starts */}
         <div className="head">
            <h1>
               my <span>portfolio</span>
            </h1>
            <span>
               A few design and coding projects. Want to see more? Reach me via
               mail on my <Link to="/about">about page</Link>
            </span>
         </div>

         <div id="projects">
            <div className="projectWrapper">
               <div
                  className="imgWrapper"
                  data-aos="fade-left"
                  data-aos-offset="200"
                  data-aos-delay="50"
                  data-aos-duration="1000"
               >
                  <img src={native1} alt="expense app" className="native" />
               </div>
               <div
                  className="textWrapper"
                  data-aos="fade-right"
                  data-aos-offset="200"
                  data-aos-delay="50"
                  data-aos-duration="1000"
               >
                  <h1>Expense app</h1>
                  <p>
                     React Native app built with Expo that integrates with
                     Firebase for backend services and uses the Context API to
                     manage global state.
                  </p>
                  <span>React Native (Expo)</span>
                  <span>Firebase</span>
                  <span>Context API</span>
                  <span>React Navigation</span>
                  <span>Cross-platform compatibility</span>
               </div>
            </div>
            <div className="projectWrapper">
               <div
                  className="imgWrapper"
                  data-aos="fade-left"
                  data-aos-offset="200"
                  data-aos-delay="50"
                  data-aos-duration="1000"
               >
                  <img src={native2} alt="expense app" className="native" />
               </div>
               <div
                  className="textWrapper"
                  data-aos="fade-right"
                  data-aos-offset="200"
                  data-aos-delay="50"
                  data-aos-duration="1000"
               >
                  <h1>Location Saver App</h1>
                  <p>
                     React Native app built with expo that integrates with Expo
                     SQLite to save data to the device storage and uses native
                     device features such as camera/gallery and location access.
                  </p>
                  <span>React Native (Expo)</span>
                  <span>Expo-location</span>
                  <span>Expo-sqliteI</span>
                  <span>react-native-maps</span>
                  <span>expo-image-picker</span>
                  <span>React Navigation</span>
                  <span>Cross-platform compatibility</span>
               </div>
            </div>
            <div className="projectWrapper">
               <div
                  className="imgWrapper"
                  data-aos="fade-left"
                  data-aos-offset="200"
                  data-aos-delay="50"
                  data-aos-duration="1000"
               >
                  <img src={react1} alt="expense app" className="native" />
               </div>
               <div
                  className="textWrapper"
                  data-aos="fade-right"
                  data-aos-offset="200"
                  data-aos-delay="50"
                  data-aos-duration="1000"
               >
                  <h1>Web Chat App</h1>
                  <p>
                     A simple web chat application that uses session and local
                     storage for users and messages respectively. Application
                     state is managed glbally using Reduxtoolkit.
                  </p>
                  <h2>Features</h2>
                  <span>Each new browser tab is a new chat user</span>
                  <span>
                     Live updating messages to all opened tabs for all users in
                     the chat room without using socket.io
                  </span>

                  <span>React </span>
                  <span>Styled components</span>
                  <span>Reduxtoolkit</span>
                  <span>
                     Url:&nbsp;
                     <a href="https://nuelz-chat.netlify.app/">
                        https://nuelz-chat.netlify.app/
                     </a>
                  </span>
               </div>
            </div>
            <div className="projectWrapper">
               <div
                  className="imgWrapper"
                  data-aos="fade-left"
                  data-aos-offset="200"
                  data-aos-delay="50"
                  data-aos-duration="1000"
               >
                  <img src={react2} alt="expense app" className="native" />
               </div>
               <div
                  className="textWrapper"
                  data-aos="fade-right"
                  data-aos-offset="200"
                  data-aos-delay="50"
                  data-aos-duration="1000"
               >
                  <h1>Edusko</h1>
                  <p>
                     Edusko is a one-stop, web-based application that allows
                     parents to compare good schools, make informed decisions,
                     access finance to pay for school fees and enrol their
                     children with ease.
                  </p>
                  <span>NextJS & Typescript </span>
                  <span>Styled components</span>
                  <span>Context API</span>
                  <span>
                     Url:&nbsp;
                     <a href="https://www.edusko.com">https://www.edusko.com</a>
                  </span>
               </div>
            </div>
            <div className="projectWrapper">
               <div
                  className="imgWrapper"
                  data-aos="fade-left"
                  data-aos-offset="200"
                  data-aos-delay="50"
                  data-aos-duration="1000"
               >
                  <img src={react3} alt="expense app" className="native" />
               </div>
               <div
                  className="textWrapper"
                  data-aos="fade-right"
                  data-aos-offset="200"
                  data-aos-delay="50"
                  data-aos-duration="1000"
               >
                  <h1>E-Commerce (Nuelz Store)</h1>
                  <p>
                     A simple e-commerce website that integrates with Firebase
                     for backend services and uses Reactoolkit to manage state.
                  </p>
                  <span>React </span>
                  <span>Styled components</span>
                  <span>Reduxtoolkit</span>
                  <span>
                     Url:&nbsp;
                     <a href="https://nuelz-store.netlify.app/">
                        https://nuelz-store.netlify.app
                     </a>
                  </span>
               </div>
            </div>{" "}
            <div className="projectWrapper">
               <div
                  className="imgWrapper"
                  data-aos="fade-left"
                  data-aos-offset="200"
                  data-aos-delay="50"
                  data-aos-duration="1000"
               >
                  <img src={node1} alt="expense app" className="native" />
               </div>
               <div
                  className="textWrapper"
                  data-aos="fade-right"
                  data-aos-offset="200"
                  data-aos-delay="50"
                  data-aos-duration="1000"
               >
                  <h1>Devcamper API</h1>
                  <p>
                     Backend API for the DevCamper application to manage
                     bootcamps, courses, reviews, users and authentication
                  </p>
                  <a href={doc}>Click here to download the documentation</a>
                  <span>
                     BaseUrl:&nbsp;
                     <a href="https://nuelz-devcamp.cyclic.app/">
                        https://nuelz-devcamp.cyclic.app/
                     </a>
                  </span>
                  <span>
                     NB: Download documentation instead of using the link to
                     visit url, host platform has a couple of errors.
                  </span>
               </div>
            </div>
         </div>
      </PortfolioWrapper>
   );
};
export default Work;
