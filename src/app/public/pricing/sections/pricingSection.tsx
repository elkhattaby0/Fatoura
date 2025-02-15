"use client";
import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";


const PricingSection:React.FC = () => {
    const { t } = useLanguage();
    const txt = t.pricingLayout.pricing
    const dt = t.pricing
    return (
        <div className="w-full flex flex-col items-center">
            <h2 className="text-3xl font-bold text-darkBlue text-center w-3/4 mt-6">
                {txt.title}
            </h2>
            <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0 mt-6 w-[85%]">
                
                {
                    dt.data.map((n: {id:number; type:string; txt:string; price:number; currency:string; date:string; ben:any})=> (
                        <div key={n.id}
                            className="flex flex-col max-w-lg p-6 mx-auto text-center text-black bg-lightGray border border-lightGray shadow rounded-lg shadow xl:p-8">
                            <h3 className="mb-4 text-2xl font-semibold text-darkBlue">{n.type}</h3>
                            <p className="font-light text-black sm:text-lg">{n.txt}</p>
                            <div className="flex items-baseline justify-center my-8">
                                <span className="mr-2 text-5xl font-extrabold">{n.price}{dt.currency}</span>
                                <span className="text-black">{dt.date}</span>
                            </div>

                            <ul role="list" className="mb-8 space-y-4 text-left">
                                {
                                    n.ben.map((i:string)=> (
                                        <li className="flex items-center space-x-3" key={i}>
                                            <svg className="flex-shrink-0 w-5 h-5 text-darkBlue" fill="currentColor"
                                                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clipRule="evenodd"></path>
                                            </svg>
                                            <span className="text-black text-sm">{i}</span>
                                        </li>
                                    ))
                                }
                            </ul>
                            <Link href={dt.btn.slug}
                                className="text-white bg-darkBlue hover:bg-skyBlue focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 outline-none text-center">{dt.btn.name}</Link>
                        </div>
                
                    ))
                }
            </div>
        </div>
    )
}

export default PricingSection;