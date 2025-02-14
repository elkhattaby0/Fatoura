import React from "react";
import { data } from "../../../../data"
const dt = data.aboutLayout.hero

const HeroSection: React.FC = () => {
    
    return (
        <div className="bg-lightGray flex flex-col items-center justify-center max-md:mt-0 py-16 w-full"
            style={{
                backgroundImage:
                "url('/.jpg')", backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover", 
            }}
        >
            <h2 className="text-5xl font-bold text-darkBlue text-left w-3/4 leading-tight">
                {dt.title}
            </h2>
            <h4
                    className="text-2xl font-semibold text-black w-3/4 mt-4 text-left"
            >
                {dt.txt}
            </h4>
        </div>
    )
}

export default HeroSection;