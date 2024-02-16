import React, { useState, useEffect, useRef } from "react";
import Navbar from "./navbar";
import SwiperComp from "./swiper";
import Services from "./services";
import PrevMain from "./prevmain";
import About from "./about";
import Contact from "./contact";
import logo from "./media/logo.jpeg";
import Burger from "./burger";

function App() {
  const servicesRef = useRef(null);
  const fleetRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 1000);

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth > 1000);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToRef = (ref) =>
    window.scrollTo({ top: ref.current.offsetTop, behavior: "smooth" });

  return (
    <div className="App">
      {isWideScreen ? (
        <div className="nav_block">
          <div className="block_logo">
            <img src={logo} alt="Logo" className="nav_logo_pic" />
            <h1>Vegas Elite Drive</h1>
          </div>
          <div className="nav_container">
            <div className="nav" onClick={() => scrollToRef(servicesRef)}>
              SERVICES
            </div>
            <div className="nav" onClick={() => scrollToRef(fleetRef)}>
              OUR FLEET
            </div>
            <div className="nav" onClick={() => scrollToRef(aboutRef)}>
              ABOUT US
            </div>
            <div
              className="nav contact"
              onClick={() => scrollToRef(contactRef)}
            >
              CONTACT
            </div>
          </div>
        </div>
      ) : (
        <Burger
          servicesRef={servicesRef}
          fleetRef={fleetRef}
          aboutRef={aboutRef}
          contactRef={contactRef}
        />
      )}
      <PrevMain />
      <div ref={servicesRef}>
        <Services />
      </div>
      <div className="fleet_block" ref={fleetRef}>
        <h2 className="fleet_title">OUR FLEET & RATES</h2>
        <SwiperComp />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
    </div>
  );
}

export default App;
