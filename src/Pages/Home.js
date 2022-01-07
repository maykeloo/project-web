import React, { useState } from "react";
import { Wrapper } from "../AppElements";

import "../components/Home/Intro/introElements.scss";
import "../components/Home/Buttonbar/buttonbarElements.scss";
import "../components/Home/Navbar/navbarElements.scss";
import "../components/Home/Sidebar/sidebarStyle.scss";
import "../components/Home/Services/servicesElements.scss";
import "../components/Home/TextSection/textsectionElements.scss";
import "../components/Home/Feedback/feedbackElements.scss";
import "../components/Home/Products/productElements.scss";
import "../components/Home/Footer/footerElements.scss";

import Sidebar from "../components/Home/Sidebar/Sidebar";
import Intro from "../components/Home/Intro/Intro";
import Services from "../components/Home/Services/Services";
import TextSection from "../components/Home/TextSection/TextSection";
import Feedback from "../components/Home/Feedback/Feedback";
import Products from "../components/Home/Products/Products";
import Footer from "../components/Home/Footer/Footer";
import Buttonbar from "../components/Home/Buttonbar/Buttonbar";
import Navbar from "../components/Home/Navbar/Navbar";

const Home = () => {
  const [sidebarVisibility, setSidebarVisibility] = useState(false);

  return (
    <>
      <Sidebar
        visibility={sidebarVisibility}
        setVisibility={setSidebarVisibility}
      />
      <Wrapper sidebar={sidebarVisibility}>
        <Navbar />
        <Buttonbar setVisibility={setSidebarVisibility} />
        <Intro />
        <Services />
        <TextSection />
        <Feedback />
        <Products />
        <Footer />
      </Wrapper>
    </>
  );
};

export default Home;
