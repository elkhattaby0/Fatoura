"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";


const Benefits: React.FC = () => {
    const { t } = useLanguage();
    const dt = t.benefits
    return (
        <div>
            <section className="text-black body-font">
                <h2 className="flex justify-center font-bold text-darkBlue text-3xl leading-[1.1] sm:text-3xl md:text-6xl">{dt.title}</h2>
                <div className="container px-5 py-12 mx-auto">
                    <div className="flex flex-wrap col-3 text-center justify-center">

                    {
                        dt.data.map(n=> (
                            <div key={n.id} className="m-2 px-6 py-5 md:w-1/4 sm:w-1/2 bg-lightGray rounded-xl hover:shadow">
                                <div className="py-6 transform transition duration-500 hover:scale-110">
                                <div className="flex justify-center">
                                    <Image src={n.img} alt={n.txt} className="w-22 mb-3" height={50} width={50} />
                                </div>
                                <h2 className="mb-2 text-lg font-bold text-darkBlue">{n.title}</h2>
                                <p className="text-lg text-black">{n.txt}</p>
                                </div>
                            </div>
                        ))
                    }
                    

                    </div>
                </div>
                </section>
        </div>
    )
}

export default Benefits;