import React from "react";
import HeroSection from "./heroSection";
import FormSection from "./formSection";
import CtaSection from "../ctaSection";
import FaqSection from "../faqSection";

const Contact:React.FC = () => {
    return (
        <div className="flex flex-col items-center">
            <HeroSection />
            <FormSection />
            <FaqSection />
            <CtaSection />
        </div>
    )
}

export default Contact;