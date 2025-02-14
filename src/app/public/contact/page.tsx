import React from "react";
import HeroSection from "./sections/heroSection";
import FormSection from "./sections/formSection";
import CtaSection from "../components/ctaSection";
import FaqSection from "../components/faqSection";

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