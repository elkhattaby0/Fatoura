"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";


interface DataProp {
    id:number; type:string; txt:string; price:number; ben:string[]; 

}   

interface CardPriceProps {
    data:DataProp[];
    currency:string;
    btn: {name:string; slug:string;}
}

const CardPrice:React.FC<CardPriceProps> = ({data, currency, btn}) => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    useEffect(() => {
        const checkScroll = () => {
            if (!scrollRef.current) return;
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
        };

        checkScroll(); 
        scrollRef.current?.addEventListener("scroll", checkScroll);

        return () => scrollRef.current?.removeEventListener("scroll", checkScroll);
    }, []);

    const handleScroll = (direction: "left" | "right") => {
        if (!scrollRef.current) return;
        const scrollAmount = 350; 
        scrollRef.current.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
    };
    return (
        <div className="relative w-[90%] max-md:w-[90%] h-full flex items-center">
            {canScrollLeft && (
                <button 
                    onClick={() => handleScroll("left")} 
                    className="absolute left-[-33] max-md:left-[-15] p-2 z-10 bg-darkBlue hover:bg-skyBlue text-lightGray h-fit rounded-xl hover:shadow-xl"
                >
                    &#129128;
                </button>
            )}

            <div ref={scrollRef} className="flex gap-4 overflow-hidden w-full">
                {data.map(n => (
                    <div 
                    key={n.id}
                    className={`cursor-pointer border border-lightGray rounded-xl py-4 px-6 h-[420px] w-80 min-w-[330px] max-mf:w-full flex flex-col justify-around hover:shadow ${n.type === "Basic" ? "bg-lightGray shadow" : "bg-dakBlue"}`}
                >
                    <div>
                        <h2
                            className={`text-3xl font-bold ${n.type === "Basic" ? "text-darkBlue":"text-white"}`}
                        >{n.type}</h2>
                        <p
                            className={`${n.type === "Basic" ? "text-black":"text-lightGray"} font-light text-md leading-[20px] mt-2`}
                        >{n.txt}</p>
                    </div>
                    <div
                        className={`flex ${n.type === "Basic" ? "text-darkBlue":"text-white"} font-bold`}
                    >
                        <h3 
                            className="text-5xl"
                        >
                            {n.price}
                        </h3>
                        <h3 
                            className="text-3xl ml-1"
                        >
                            {currency}
                        </h3>
                    </div>
                    <ul>
                        {
                            n.ben.map((i)=> (
                                <li key={i} 
                                    className={`flex items-start ${n.type === "Basic" ? "text-black":"text-lightGray"} `}
                                > 
                                    <div 
                                        className={`${n.type === "Basic" ? "bg-darkBlue":"bg-white"} p-[2px] text-center rounded-full text-white mr-2`}>
                                    <svg 
                                    className={`flex-shrink-0 size-4 ${n.type === "Basic" ? "text-white":"text-darkBlue"}`}
                                    fill="currentColor"
                                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"></path>
                                    </svg>
                                    </div>
                                    {i}
                                </li>
                            ))
                        }
                    </ul>
                    <Link href={btn.slug}
                        className={`outline-none ${n.type === "Basic" ? "text-white bg-darkBlue hover:bg-skyBlue" : "text-darkBlue bg-white hover:bg-lightGray "} font-semibold focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center outline-none`}
                        >{btn.name}</Link>
                </div>
                ))}
            </div>

            {canScrollRight && (
                <button 
                    onClick={() => handleScroll("right")} 
                    className="absolute right-[-33] max-md:right-[-15] p-2 z-10 bg-darkBlue hover:bg-skyBlue text-lightGray h-fit rounded-xl hover:shadow-xl"
                >
                    &#129130;
                </button>
            )}
        </div>
    )
}

export default CardPrice;