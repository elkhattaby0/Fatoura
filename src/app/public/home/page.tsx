import React from "react";
import Hero from "./hero/page";
import Features from "./features/page";
import HowItWorks from "./howItWorks/page";
import Benefits from "./benefits/page";
import Pricing from "./pricing/page";
import Testimonials from "./testimonials/page";

const Home: React.FC = () => {
  return(
    <div className="bg-white">
      <Hero />    
      <Features />
      <HowItWorks />
      <Benefits />
      <Pricing />
      <Testimonials />
    </div>
  )
  
}

export default Home;