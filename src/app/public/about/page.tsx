import React from "react"
import HeroSection from "./heroSection"
import CtaSection from "../ctaSection"
import AboutSection from "./aboutSection"

const About: React.FC = () => {
    return (
        <div className="flex flex-col items-center">
            <HeroSection />
            <AboutSection />
            <CtaSection />
        </ div>       
    )
}


export default About