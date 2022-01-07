/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import desktopimg from "../../../images/img-intro-desktop.webp";
import mobileimg from "../../../images/img-intro-mobile.webp";

const Intro = () => {
  return (
    <div>
      <div className="top-intro container-fluid px-0">
        <img
          className="w-100 h-auto desktop-img-intro"
          src={desktopimg}
          alt=""
        />
        <img className="w-100 h-auto mobile-img-intro" src={mobileimg} alt="" />
      </div>
      <div className="bottom-intro mx-auto rounded box-intro mt-5">
        <a href="#">
          <div className="textwrapper container d-flex text-center flex-column align-items-center py-4">
            <h3>GARAGENTOR & GARAGEN PREIS KONFIGURATOR</h3>
            <h4>KOSTENLOSE & UNVERBINDLICHE</h4>
            <br />
            <h4>ANGEBOTSERSTELLUNG</h4>
            <h4 id="underlinetext">
              <u>Garantiert innerhalb von 1 Stunde ab Anfragestellung!</u>
            </h4>
            <span className="intro-btn rounded mt-4 text-nowrap">
              BITTE ANKLICKEN
            </span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Intro;
