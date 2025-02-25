"use client";
import React from "react"
import { useLanguage } from "@/context/LanguageContext";
import CardPrice from "./cardPrice";


interface PricringProp {
    title:string; description:string;
}

const Pricing:React.FC<PricringProp> = () => {
    const { t } = useLanguage();
    const dt = t.pricing
    return (
        <div>
            <section className="bg-darkBlue">
                <div className="max-w-screen-xl flex flex-col items-center px-4 py-8 mx-auto lg:py-24 lg:px-6">
                    <div className="max-w-screen-md mx-auto mb-8 text-center lg:mb-12">
                        <h2 className="font-bold text-white text-3xl leading-[1.1] sm:text-3xl md:text-6xl mb-6">{dt.title}</h2>
                        <p className="mb-5 font-light text-lightGray sm:text-xl">{dt.description}</p>
                    </div>
                    <CardPrice
                        data={dt.data}
                        currency={dt.currency}
                        btn={dt.btn}
                    />
                </div>
            </section>
        </div>
    )
}

export default Pricing;