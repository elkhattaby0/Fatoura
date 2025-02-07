import React from "react";
const Hero: React.FC = () => {
    return (
        <div>
            <div className="bg-lightGray flex flex-col items-center justify-center py-16"
                style={{
                    backgroundImage:
                    "url('/.jpg')", backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover", 
                }}
            >
                <h2 className="text-5xl font-bold text-darkBlue leading-tight">About Us</h2>
                <h4
                     className="text-2xl font-semibold text-black w-3/4 mt-4 text-left"
                >Empowering Businesses with Smart Invoicing & Financial Management.
                </h4>
                <p className="text-xl text-black w-3/4 mt-4 text-left">
                At 
                <span className="font-bold text-darkBlue"> Fatoura</span>, we believe in simplifying financial management for businesses of all sizes. Our cutting-edge SaaS platform is designed to streamline invoicing, payments, and financial tracking, allowing entrepreneurs and enterprises to focus on growth while we handle the complexities.
                </p>
            </div>
        </div>
    )
}

export default Hero;