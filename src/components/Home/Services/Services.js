import React from "react";

const Services = () => {
  const boxes = [
    {
      title: "Seit 18 Jahren",
      text: "auf dem Markt",
    },
    {
      title: "Täglich 27 LKW's",
      text: "in ganz Europa zu unseren Kunden unterwegs",
    },
    {
      title: "9078 Stück",
      text: "verkaufte Garagen",
    },
    {
      title: "9543 Stück",
      text: "verkaufte Garagentore",
    },
    {
      title: "6173 Stück",
      text: "verkaufte Gartenhäuser",
    },
    {
      title: "13370 Stück",
      text: "verkaufte Trennwandsysteme",
    },
  ];

  return (
    <div className="servicebox d-flex flex-column mt-5 m-auto">
      <div className="container-fluid mt-5 d-flex justify-content-center">
        <h2 className="title">REFERENZEN</h2>
      </div>
      <div className="boxes w-100 d-flex flex-wrap justify-content-between mt-5">
        {boxes.map((box, index) => (
          <div key={index} className="box d-flex flex-column text-center mt-5 ">
            <h3 className="service-title">{box.title}</h3>
            <p className="py-3">{box.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
