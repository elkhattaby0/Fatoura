import React from "react";
import { data } from "../../../data"
const dt = data.aboutLayout.hero

const HeroSection: React.FC = () => {
    
    return (
        <div >
            <div className="bg-lightGray flex flex-col items-center justify-center mt-6 max-md:mt-0 py-16 w-full max-md:w-full"
                style={{
                    backgroundImage:
                    "url('/.jpg')", backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover", 
                }}
            >
                <h2 className="text-5xl font-bold text-darkBlue text-center w-3/4 leading-tight">
                    {dt.title}
                </h2>
                <h4
                     className="text-2xl font-semibold text-black w-3/4 mt-4 text-center"
                >
                    {dt.txt1}
                </h4>
                <p className="text-xl text-black w-3/4 mt-4 text-center">
                    {dt.txt2}
                </p>
            </div>

        </div>
    )
}

export default HeroSection;