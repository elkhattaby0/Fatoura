import React from "react"
import CtaSection from "../components/ctaSection"
import AboutSection from "./sections/aboutSection"
import HeroSection from "./sections/heroSection"


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