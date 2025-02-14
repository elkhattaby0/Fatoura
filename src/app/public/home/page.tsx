import React from "react";
import Hero from "./sections/hero";
import Features from "./sections/features";
import HowItWorks from "./sections/howItWorks";
import Benefits from "./sections/benefits";
import Pricing from "./sections/pricing";
import Testimonials from "./sections/testimonials";

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