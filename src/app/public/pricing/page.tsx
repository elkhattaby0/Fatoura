import React from "react";
import HeroSection from "./HeroSection";
import PricingSection from "./pricingSection";
import PlanSection from "./planSection";
import FaqSection from "../faqSection";
import CtaSection from "../ctaSection";


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