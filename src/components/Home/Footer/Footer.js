/* eslint-disable react/jsx-no-target-blank */
import React from "react";

const Footer = () => {
  const section1_boxes = [
    {
      title: "PRODUKTE",
      img: "https://www.baudiscount-garagen.de/images/icon1.svgz",
      text: "Garagen, Fertiggaragen, Gartenhäuser, Garagentore, Türen & Trennwandsysteme. Alles im Produktionswerk beladen und direkt zu Ihnen nach Hause geliefert.",
    },

    {
      title: "ÜBER UNS",
      img: "https://www.baudiscount-garagen.de/images/icon2.svgz",
      text: "Seit dem Jahr 2004 liefern wir nach ganz Europa Garagentore: Sektionaltore, Rolltore, Schwingtore Garagen Doppelflügeltore alle nach Maß hergestellt. Schnell und günstig direkt zu Ihnen nach Hause.",
    },

    {
      title: "KONTAKT",
      img: "https://www.baudiscount-garagen.de/images/icon3.svgz",
      text: "Bei Fragen zu Fertiggaragen, Gartenhäusern, Nebengebäuden, Trennwandsystemen, Garagentoren und Türen sind wir für Sie sowohl per Telefon als auch per Email erreichbar. Unsere Fachberater, kümmern uns gerne um Ihr anliegen.",
    },

    {
      title: "BEWERTUNGEN",
      img: "https://www.baudiscount-garagen.de/images/icon-referenzen-new.svg",
      text: "Wir bedanken uns herzlich bei den Tausenden zufriedenen Kunden die sich für unsere Garagen, Garagentore, Türen, Gartenhäuser, Kellerverschläge, Kellertore, Tiefgaragentore Nebengebäude, Sektionaltore entschieden haben.",
    },

    {
      title: "ZAHLUNGSARTEN",
      img: "https://www.baudiscount-garagen.de/images/icon-zahlungsart.png",
      text: "Bei uns Zahlen Sie sicher und bequem für Ihre Garagentore, Sektionaltore, Türen, Nebengebäude, Fertiggaragen, Garagen, Gartenhäuser, Gerätehäuser und Geräteschuppen. Nutzen Sie unseren Service und Erfahrung seit dem Jahr 2004",
    },

    {
      title: "ZERTIFIKATE & ZULASSUNGEN",
      img: "https://www.baudiscount-garagen.de/images/icon5.svgz",
      text: "Deutscher Qualitätsstandard & Sicherheit stehen bei der PF Gruppe an erster stelle. Garagen mit Typenstatik für alle Schneelastzonen auf anfrage verfügbar. Trennwandsystem, Kellerverschläge mit ETA Zulassung gehören zu unserem  Standard für Ihre Sicherheit.",
    },
  ];

  const section_2_box1 = [
    {
      text: "Montagevideos",
      img: "https://www.baudiscount-garagen.de/images/icons/29.svg",
    },
    {
      text: "Montageanleitungen",
      img: "https://www.baudiscount-garagen.de/images/icons/2.svg",
    },
    {
        text: 'Produktvideos',
        img: 'https://www.baudiscount-garagen.de/images/icons/29.svg'
    },
    {
        text: 'Produktdatenblätter',
        img: 'https://www.baudiscount-garagen.de/images/icons/2.svg'
    },
    {
        text: 'Produktbilder',
        img: 'https://www.baudiscount-garagen.de/images/icons/30.svg'
    },
    {
        text: 'Kataloge',
        img: 'https://www.baudiscount-garagen.de/images/icons/24.svg'
    },
  ];

  const section_2_box2 = [
    {
      text: " Zertifikate & Zulassungen",
      img: "https://www.baudiscount-garagen.de/images/icons/6.svg",
    },
    {
      text: "Statische Berechnungen",
      img: "https://www.baudiscount-garagen.de/images/icons/14.svg",
    },
    {
        text: 'Schneelastzonen',
        img: 'https://www.baudiscount-garagen.de/images/icons/18.svg'
    },
    {
        text: 'Lieferbedingungen',
        img: 'https://www.baudiscount-garagen.de/images/icons/7.svg'
    },
    {
        text: 'Lieferzeiten',
        img: 'https://www.baudiscount-garagen.de/images/icons/8.svg'
    },
    {
        text: 'Garantie',
        img: 'https://www.baudiscount-garagen.de/images/icons/4.svg'
    },
  ];

  const section_2_box3 = [
    {
      text: "Über uns",
      img: "https://www.baudiscount-garagen.de/images/icons/11.svg",
    },
    {
      text: "Produktausstellung",
      img: "https://www.baudiscount-garagen.de/images/icons/17.svg",
    },
    {
        text: 'News',
        img: 'https://www.baudiscount-garagen.de/images/icons/27.svg'
    },
    {
        text: 'Zahlungsmöglichkeiten',
        img: 'https://www.baudiscount-garagen.de/images/icons/9.svg'
    },
    {
        text: 'AGB',
        img: 'https://www.baudiscount-garagen.de/images/icons/5.svg'
    },
    {
        text: 'Impressum',
        img: 'https://www.baudiscount-garagen.de/images/icons/4.svg'
    },
  ];

  return (
    <div className="container-fluid px-0">
      <div className="section-1 bg-primary py-5">
        <div className="container-fluid container-md flex-wrap d-flex justify-content-between">
          {section1_boxes.map((box) => (
            <div className="d-flex footer-section1-box flex-column text-light gap-3 justify-content-between pb-5">
              <div className="d-flex justify-content-center">
                <p className="footer-section1-box-title">{box.title}</p>
              </div>
              <div className="d-flex justify-content-center">
                <img
                  src={box.img}
                  alt="icon"
                  className="footer-section1-box-img"
                />
              </div>
              <div className="d-flex justify-content-center footer-section1-box-text">
                <span className="text-center footer-section1-box-description">
                  {box.text}
                </span>
              </div>
              <span className="d-flex justify-content-center footer-section1-button rounded">
                BITTE ANKLICKEN
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="section-2 bg-secondary pb-5">
        <div className="container-fluid container-md d-flex justify-content-between">
          <div className="column-section2-footer d-flex flex-column gap-3 pt-5">
              {section_2_box1.map(box => (
                  <div className="d-flex align-items-center gap-2 box-row">
                      <span className="white-box-section2 rounded"><img src={box.img} alt="" /></span>
                      <p className="text-box-section2 m-0">{box.text}</p>
                  </div>
              ))}
          </div>
          <div className="column-section2-footer d-flex flex-column gap-3 pt-5">
          {section_2_box2.map(box => (
                  <div className="d-flex align-items-center gap-2 box-row">
                      <span className="white-box-section2 rounded"><img src={box.img} alt="" /></span>
                      <p className="text-box-section2 m-0">{box.text}</p>
                  </div>
              ))}
          </div>
          <div className="column-section2-footer d-flex flex-column gap-3 pt-5">
          {section_2_box3.map(box => (
                  <div className="d-flex align-items-center gap-2 box-row">
                      <span className="white-box-section2 rounded"><img src={box.img} alt="" /></span>
                      <p className="text-box-section2 m-0">{box.text}</p>
                  </div>
              ))}
          </div>
        </div>
      </div>


      <div className="section-3 py-5 px-2">
          <div className="container-fluid container-md top d-flex justify-content-between pb-3 px-0 top-footer">
              <div className="d-flex linksbar-footer border-0 justify-content-between justify-content-sm-center">
                  <span>Startseite</span>
                  <span>Online Konfigurator</span>
                  <span>Onlineshop</span>
                  <span className="mobile-disabled">Über uns</span>
                  <span className="mobile-disabled">Kontakt</span>
                  <span className="mobile-disabled">Impressum</span>
                  <span>Datenschutz</span>
                  <span>Dateneinstellungen</span>
              </div>
              <div className="d-flex socialbar-footer border-0 justify-content-between">
                <img src='https://www.baudiscount-garagen.de/images/facebook.svg' alt="" />
                <img src='https://www.baudiscount-garagen.de/images/twitter.svg' alt="" />
                <img src='https://www.baudiscount-garagen.de/images/youtube.svg' alt="" />
                <img src='https://www.baudiscount-garagen.de/images/my-business.svg' alt="" />
                <img src='https://www.baudiscount-garagen.de/images/instagram.svg' alt="" />
              </div>
          </div>

          <div className='container-fluid container-md pt-3 d-flex justify-content-between p-0'>
            <div className="reserved-container">
              <span className="reserved-text text-nowrap">All Rights Reserved ® <a href="https://www.baudiscount-garagen.de/" target='_blank'>www.Baudiscount-Garagen.de</a> Copyright 2004 - 2022 </span>
            </div>
            <div className="d-flex justify-content-end">
              <img className="logo-footer" src="https://www.baudiscount-garagen.de/images/logo-baudiscount.svgz" alt="logo" />
            </div>
          </div>
      </div>
    </div>
  );
};

export default Footer;
