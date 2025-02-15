"use client"
import React from "react";
import { useLanguage } from "@/context/LanguageContext";

const HeroSection:React.FC = () => {
    const { t } = useLanguage();
        const dt = t.pricingLayout.hero
    return (
        <div className="bg-lightGray flex flex-col items-center justify-center max-md:mt-0 py-16 w-full"
            style={{
                backgroundImage:
                "url('/.jpg')", backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover", 
            }}
        >
            <h2 className="text-5xl font-bold text-darkBlue w-3/4 leading-tight">
                {dt.title}
            </h2>
            <h4
                    className="text-2xl font-semibold text-black w-3/4 mt-4"
            >
                {dt.txt}
            </h4>
        </div>
    )
}

export default HeroSection;