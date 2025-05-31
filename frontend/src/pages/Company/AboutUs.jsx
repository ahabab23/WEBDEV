import React from "react";
import PageTitle from "../../components/PageTitle";
import Carousel from "../../components/Company/carousel";
import TechnologyIndex from "../../components/Company/AboutIndex";
import Overview from "../../components/Company/Overview";


function AboutUs() {
  return (
    <>
      <PageTitle />
      <Overview />
      <Carousel />
      <TechnologyIndex/>
 
    </>
  );
}

export default AboutUs
