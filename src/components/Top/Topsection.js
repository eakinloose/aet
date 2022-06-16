import React from "react";
import { Link } from "react-router-dom";
import { Wrapper, Flex, FlexWrapper } from "./Topsection.styles";
import imgg from "../images/imgg.jpg";

const Topsection = () => {
   return (
      <Wrapper>
         <div className="whitespace"></div>
         <FlexWrapper>
            <Flex>
               <div className="firstchild">
                  <h2>
                     Hello i'm Emmanuel, a design and engineering enthusiast.
                  </h2>
                  <p>
                     I speciallize in frontend development for web and mobile
                     applications. find my reviews here on{" "}
                     <span className="aet">
                        <Link to="/review">AET</Link>
                     </span>
                     , find some of my codes on{" "}
                     <span className="github">
                        <a href="https://github.com/eakinloose">Github</a>
                     </span>{" "}
                     and find out more about me on{" "}
                     <span className="instagram">
                        <a href="https://instagram.com/eakinloose">Instagram</a>
                        .
                     </span>
                  </p>
               </div>
               <img src={imgg} alt="img" />
            </Flex>
         </FlexWrapper>
      </Wrapper>
   );
};

export default Topsection;
