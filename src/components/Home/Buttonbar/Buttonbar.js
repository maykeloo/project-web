/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";

const Buttonbar = ({setVisibility}) => {
  return (
    <div className="container-fluid buttonbar position-relative mt-2 d-flex justify-content-center">
      <div className="buttonwrap">
        {/*desktop*/}
        <div className="bar w-auto d-flex flex-nowrap desktop">
          <a href="#" alt="" className="m-auto ">
            <span>GARAGENTORE</span>
          </a>
          <a href="#" alt="" className="text-nowrap">
            <span>TÜREN</span>
          </a>
          <a href="#" alt="" className="text-nowrap">
            <span>FERTIGGARAGEN</span>
          </a>
          <a href="#" alt="" className="text-nowrap">
            <span>GARTENHÄUSER & NEBENGEBÄUDE</span>
          </a>
          <a href="#" alt="">
            <span className="border-0">TRENNWANDSYSTEME</span>
          </a>
        </div>

        {/*mobile*/}

        <div className="d-flex align-items-center mobile">
            <div className="hamburger-menu d-flex align-items-center" onClick={() => setVisibility(true)}>
              <span className="span" />
              <span className="span" />
              <span className="span" />
            </div>
          <div className="bar w-auto d-flex flex-nowrap mobile align-items-center">
            <a href="#" alt="" className="">
              <span>Startseite</span>
            </a>
            <a href="#" alt="" className="text-nowrap">
              <span>Produkte</span>
            </a>
            <a href="#" alt="" className="text-nowrap">
              <span className="border-0">Kontakt</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buttonbar;
