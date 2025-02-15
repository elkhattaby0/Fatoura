"use client"
import React from "react";
import { useLanguage } from "@/context/LanguageContext";

const CtaSection:React.FC = () => {
    const { t } = useLanguage();
    const dt = t.cta
    return (
        <div className="flex flex-col gap-8 items-center justify-center bg-lightGray my-10 rounded-xl py-16 w-3/4 max-md:w-full">
            <div className="w-3/4" >
                <h2
                    className="font-bold text-3xl text-darkBlue"
                >
                    {dt.title}    
                </h2>
                <p
                    className="text-xl text-black my-4"
                >
                    {dt.txt}
                </p>
                <button
                    className="bg-darkBlue hover:bg-skyBlue py-3 px-6 text-md font-medium rounded-xl text-lightGray"
                >
                    {dt.btn.txt}
                </button>
            </div>
        </div>
    )
}

export default CtaSection