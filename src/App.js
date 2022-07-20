import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import GlobalStyles from "./GlobalStyles";
import Home from "./pages/Home";
import Review from "./pages/Review";



function App() {

   const [position, setPosition] = useState({
      x: "",
      y: "",
   });
   
   const handleMouseMove = (e) => {
      setPosition({
         x: e.clientX,
         y: e.clientY,
      });
   };
   
   useEffect(() => {
      window.addEventListener("mousemove", handleMouseMove);
      return () => {
         window.removeEventListener("mousemove", handleMouseMove);
      };
   }, []);


   return (
      <>
         <GlobalStyles />
         <Navbar />
         <div className="whitespace"></div>
         <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/review" element={<Review/>} />
         </Routes>

         <div
            style={{ left: `${position.x}px`, top: `${position.y}px` }}
            className="cursor"
         ></div>
      </>
   );
}

export default App;
