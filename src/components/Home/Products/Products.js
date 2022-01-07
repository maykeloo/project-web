import React from "react";
import { FiMousePointer } from "react-icons/fi";

const Garagen_Sektionaltore_Rolltore = [
  {
    name: "Garagen Doppelflügeltor - Stahltor nach Maß",
    img: "https://www.baudiscount-garagen.de/images/formular/produkte/doppelflugeltore-rahmen-gms.jpg",
  },
  {
    name: "Sektionaltor 60mm Stark U=0,9 [W/m²K]* nach Maß",
    img: "https://www.baudiscount-garagen.de/images/formular/produkte/doppelflugeltore-rahmen-gms.jpg",
  },
  {
    name: "Garagenrolltor mit Kasten nach Maß",
    img: "https://www.baudiscount-garagen.de/images/formular/produkte/doppelflugeltore-rahmen-gms.jpg",
  },
];

const Products = () => {
  return (
    <div className="container-fluid container-lg product-container">
      <div className="titlebar-products w-100 py-2">
        <h4>GARAGENTORE</h4>
      </div>
      <div className="mt-3">
        <span id="text-1-products">» Garagen Sektionaltore & Rolltore:</span>
      </div>
      <div className="d-flex flex-column">
      <div className="d-flex box-row flex-wrap mt-3">
          {Garagen_Sektionaltore_Rolltore.map((box) => (
            <div className="product-box rounded-top d-flex flex-column">
              <div className="box-title text-light p-3">{box.name}</div>
              <div className="position-relative image-box overflow-hidden">
                <img
                  className="w-100 h-auto mt-2 d-block"
                  src={box.img}
                  alt="Car"
                />
                <div className="hover-div-box mt-2">
                  <span className="box-hover-title">bitte anklicken</span>
                  <div>
                    <FiMousePointer className="icon-mouse mt-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-3">
          <span id="text-2-products">
            * gilt bei einem Referenz Tor mit den Maßen 5000 x 2500 mm
          </span>
        </div>
      </div>


      <div className="mt-3">
        <span id="text-1-products">» Garagen Doppelflügeltore:</span>
      </div>
      <div className="d-flex flex-column">
      <div className="d-flex box-row flex-wrap mt-3">
          {Garagen_Sektionaltore_Rolltore.map((box) => (
            <div className="product-box rounded-top d-flex flex-column">
              <div className="box-title text-light p-3">{box.name}</div>
              <div className="position-relative image-box overflow-hidden">
                <img
                  className="w-100 h-auto mt-2 d-block"
                  src={box.img}
                  alt="Car"
                />
                <div className="hover-div-box mt-2">
                  <span className="box-hover-title">bitte anklicken</span>
                  <div>
                    <FiMousePointer className="icon-mouse mt-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-3">
          <span id="text-2-products">
            * gilt bei einem Referenz Tor mit den Maßen 5000 x 2500 mm
          </span>
        </div>
      </div>
    </div>
  );
};

export default Products;
