import React from "react";
import HeroSection from "./sections/HeroSection";
import PricingSection from "./sections/pricingSection";
import PlanSection from "./sections/planSection";
import FaqSection from "../components/faqSection";
import CtaSection from "../components/ctaSection";


const Pricing:React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full">
            <HeroSection />
            <PricingSection />
            <PlanSection />
            <FaqSection />
            <CtaSection />            
        </div>
    )
}

export default Pricing;