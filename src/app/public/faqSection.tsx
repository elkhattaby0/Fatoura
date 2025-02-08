"use client";
import React, { useState } from "react";
import {data} from "../../data"
const dt = data.pricingLayout.faq

const FaqSection: React.FC = () => {
    const [isShowed, setIsShowed] = useState<{ [key: number]: boolean }>({});

    const toggleFAQ = (id: number) => {
        setIsShowed((prev) => ({ ...prev, [id]: !prev[id] }));
    };


    return (
        <div className="bg-lightGray py-10 flex flex-col items-center w-full">
            <h2 className="text-3xl font-bold text-darkBlue text-center w-3/4 mb-10">{dt.title}</h2>
            <div className="rounded-xl bg-white shadow p-x4 py-6 w-3/4 flex flex-col items-center">
                {dt.data.map((n) => (
                    <div className="p-6 border-b border-gray-300 w-3/4" key={n.id}>
                        <dt className="text-lg">
                            <button 
                                type="button" 
                                className="flex items-start justify-between w-full text-left text-gray-700 outline-none"
                                onClick={() => toggleFAQ(n.id)}
                                aria-controls={`faq-${n.id}`} 
                                aria-expanded={isShowed[n.id] || false}
                            >
                                <span className="font-medium text-xl text-darkBlue">
                                    {n.qt}
                                </span>
                                <span className="flex items-center ml-6 h-7">
                                    <svg 
                                        className={`w-6 h-6 transform transition-transform duration-200 ${isShowed[n.id] ? "rotate-180" : "rotate-0"}`} 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        fill="none" 
                                        viewBox="0 0 24 24" 
                                        stroke="currentColor" 
                                        aria-hidden="true"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                                            d="M19 9l-7 7-7-7" />
                                    </svg>
                                </span>
                            </button>
                        </dt>
                        {isShowed[n.id] && (
                            <dd className="pr-12 mt-2" id={`faq-${n.id}`}>
                                <p className="text-base text-black">
                                    {n.rs}
                                </p>
                            </dd>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FaqSection;
