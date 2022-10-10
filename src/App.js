import { GlobalStyles } from "./globalstyles";
import { ThemeProvider } from "styled-components";
import { Routes, Route, Link } from "react-router-dom";
import "animate.css";
import Home from "./pages/Home/Home";
import Page404 from "./pages/404/Page404";
import About from "./pages/About/About";
import Portfolio from "./pages/Portfolio/Portfolio";
import { RiMenuUnfoldFill } from "react-icons/ri";
import { useState } from "react";

const theme = {
   colors: {
      white: "#ffffff",
      black: "#000000",
      primary: "#173361",
      button: "#2299fe",
      buttonhover: "#3f75cc",
      grey01: "#fbfbfb",
      grey02: "#e2e2e2",
      inputhover: "#f3f0f0c3",
      transparent: "transparent",
      green: "#02b35a",
   },
};

function App() {
   const [display, setDisplay] = useState(true);

   const toggledisplay = () => {
      setDisplay(!display);
   };

   return (
      <ThemeProvider theme={theme}>
         <GlobalStyles />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="*" element={<Page404 />} />
         </Routes>
         <div className="navv">
            {" "}
            <div className="menu" onClick={toggledisplay}>
               <h1>
                  <RiMenuUnfoldFill />
               </h1>
            </div>
            {!display ? (
               <div className="navcontents animate__animated animate__rubberBand">
                  <h4>
                     <Link to="/">Home</Link>
                  </h4>
                  <h4>
                     <Link to="/about">About</Link>
                  </h4>
                  <h4>
                     <Link to="/portfolio">Portfolio</Link>
                  </h4>
               </div>
            ) : null}
         </div>
      </ThemeProvider>
   );
}

export default App;
