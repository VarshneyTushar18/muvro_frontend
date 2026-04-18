/*
  Project: Muvro
  Page: Home

  Author: Tech2Globe Web Solutions
  Creation Date: 2025-AUG-29
  Last Modified Date: 2025-AUG-29
  Version: 1.0
*/

import AboutUs from "./ui/home/AboutUs/AboutUs";
import BlogsSection from "./ui/home/BlogsSlider/BlogsSection";
import CaseStudyTestimonial from "./ui/home/CaseStudyTestimonial/CaseStudyTestimonial";
import Certifications from "./ui/home/Certifications/Certifications";
import ClientsSection from "./ui/home/Clients/ClientsSection";
import EventsSection from "./ui/home/events/EventsSection";
import HeroBanner from "./ui/home/HeroBanner/HeroBanner";
import IndustriesSection from "./ui/home/Industries/IndustriesSection";
import OurTeamSection from "./ui/home/OurTeam/OurTeamSection";
import ProductsSection from "./ui/home/products/ProductsSection";
import ServicesSection from "./ui/home/Services/ServicesSection";
import ServicesSection2 from "./ui/home/Services2/ServicesSection";
import Statistics from "./ui/home/Statistics/Statistics";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <AboutUs />
      <Statistics />
      {/* <ServicesSection /> */}
      <ServicesSection2 />
      <ProductsSection />
      <IndustriesSection />
      <ClientsSection />
      <CaseStudyTestimonial />
      {/* <BlogsSection /> */}
      <EventsSection />
      <Certifications />
      <OurTeamSection />
    </>
  );
}
