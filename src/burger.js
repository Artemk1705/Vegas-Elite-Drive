import React, { useState } from "react";
import logo from "./media/logo.jpeg";

const Burger = ({ servicesRef, fleetRef, aboutRef, contactRef }) => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  const handleBurgerClick = () => {
    setIsBurgerOpen(!isBurgerOpen);
  };

  const handleBurgerClose = () => {
    setIsBurgerOpen(false);
  };

  const scrollToRefSec = (ref) => {
    window.scrollTo({ top: ref.current.offsetTop, behavior: "smooth" });
    setIsBurgerOpen(false);
  };

  return (
    <div className={`burger ${isBurgerOpen ? "open" : "closed"}`}>
      <div className="burger-lines" onClick={handleBurgerClick}>
        <div className="burger-line" />
        <div className="burger-line" />
        <div className="burger-line" />
      </div>
      <img src={logo} alt="logo" className="bur_logo" />
      <div className="burger-menu">
        <div className="burger-close" onClick={handleBurgerClose}>
          Close
        </div>
        <div onClick={() => scrollToRefSec(servicesRef)} className="bur_main">
          SERVICES
        </div>
        <div onClick={() => scrollToRefSec(fleetRef)} className="bur_about">
          OUR FLEET
        </div>
        <div onClick={() => scrollToRefSec(aboutRef)} className="bur_contact">
          ABOUT US
        </div>
        <div onClick={() => scrollToRefSec(contactRef)} className="bur_careers">
          CONTACT
        </div>
      </div>
    </div>
  );
};

export default Burger;
