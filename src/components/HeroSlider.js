import React from 'react';
import Carousel from './Carousel';
import FeatureSection from '../pages/FeatureSection';
import DestinationCategory from '../pages/DestinationCategorySection';
import AboutSection from '../pages/AboutHomeSection';
import CtaSection from '../pages/CtaSection';
import TestimonialSection from '../pages/TestimonialSection';
import TravelFeatureSection from '../pages/TravelFeatureSection';
import NewsSection from '../pages/NewsSection';
import HomeServices from '../pages/Serviceshome';



const HeroSection = () => {

  return (


    <div className="th-hero-wrapper " id="hero">



        <Carousel/>
       <FeatureSection/>
       <DestinationCategory/>
    <AboutSection/>
    <CtaSection/>
    <HomeServices/>
    <TestimonialSection/>
    <TravelFeatureSection/>
    <NewsSection/>
    </div>
  );
};

export default HeroSection;
