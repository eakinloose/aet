import React from "react";
import { Wrapper, 
   // Card
 } from "./Main.styles";
// import Slider from "react-slick";
// import fused from "../images/fused.png";

const Main = () => {
   // const settings = {
   //    dots: true,
   //    infinite: true,
   //    speed: 500,
   //    slidesToShow: 1,
   //    slidesToScroll: 1,
   // };

   // const settings = {
   //    className: "center",
   //    infinite: true,
   //    arrows: false,
   //    dots: true,
   //    // centerPadding: "60px",
   //    // width: 4,
   //    slidesToShow: 5,
   //    swipeToSlide: true,
   // afterChange: function (index) {
   //    console.log(
   //       `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
   //    );
   // },
   // };

   return (
      <Wrapper>
         {/* <div> */}
         {/* <h2> Single Item</h2> */}
         {/* <div className="wrapper">
               <Slider {...settings}>
                  <Card>
                     <div className="img">
                        <img src={fused} alt="wer" />
                     </div>
                  </Card>
                  <Card>
                     <div className="img">
                        <img src={fused} alt="wer" />
                     </div>
                  </Card>
                  <Card>
                     <div className="img">
                        <img src={fused} alt="wer" />
                     </div>
                  </Card>
                  <Card>
                     <div className="img">
                        <img src={fused} alt="wer" />
                     </div>
                  </Card>
                  <Card>
                     <div className="img">
                        <img src={fused} alt="wer" />
                     </div>
                  </Card>
                  <Card>
                     <div className="img">
                        <img src={fused} alt="wer" />
                     </div>
                  </Card>
               </Slider>
            </div> */}
         {/* </div> */}
         <h4>What Languages do i write?</h4>
         <p>
            Before listing the languages and framework i can use, let me start
            by letting you know{" "}
            <em>
               learning to programme in <span className="c">c#</span> is one of
               my set objective for next year <strong>2022</strong>
            </em>
            &#x1F60A;.
         </p>
         <h4>Okay let's start</h4>
         <ul>
            <li>
               <p>HTML5</p>{" "}
               <span>&#x2B50;&#x2B50;&#x2B50;&#x2B50;&#x2B50;</span>
            </li>
            <li>
               <p>CSS</p> <span>&#x2B50;&#x2B50;&#x2B50;&#x2B50;&#x2B50;</span>
            </li>
            <li>
               <p>javaScript</p>{" "}
               <span>&#x2B50;&#x2B50;&#x2B50;&#x2B50;&#x2B50;</span>
            </li>
            <li>
               <p>react.js</p>
               <span>&#x2B50;&#x2B50;&#x2B50;&#x2B50; &#10025;</span>
            </li>
            <li>
               <p>Next.js</p>{" "}
               <span>&#x2B50;&#x2B50;&#x2B50;&#x2B50; &#10025;</span>
            </li>
            <li>
               <p>typeScript</p>
               <span>&#x2B50;&#x2B50;&#x2B50; &#10025; &nbsp;&#10025;</span>
            </li>
         </ul>
      </Wrapper>
   );
};

export default Main;
