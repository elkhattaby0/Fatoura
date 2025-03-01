"use client"
import Link from "next/link";
import React from "react";
import en from "@/translation/en";
const logo = en.dashboard.logo
const td = en.dashboard.aside

interface LeftProps {
    slug: string;
    img: React.ReactNode;
    txt: string;
    
}

const LeftProps: React.FC<LeftProps> = ({ slug, img, txt }) => {
    const handleLogout = () => {
        if (slug === "/auth/logout") {
            document.cookie = "auth=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
            alert("You have logged out.");
        }
    };
    return (
        <li className="my-4" key={txt}>
            <Link href={slug} className="flex items-center space-x-2 group hover:bg-white rounded-xl hover:shadow-md            
            " onClick={handleLogout} >
                {
                    img ? 
                    (
                        <div className="size-7 rounded-xl bg-white p-[6px] group-hover:border-r border-darkBlue">
                            {img}
                        </div>
                    ) :
                    (
                    <div className="animate-pulse rounded-full bg-gray-300 p-3"></div>
                    )
                }
                <h3
                    className={
                        txt
                            ? "font-bold text-white text-[14px] uppercase group-hover:text-darkBlue"
                            : "animate-pulse rounded-full bg-gray-300 p-2 w-[150px]"
                    }
                >
                    {txt}
                </h3>
            </Link>
        </li>
    );
};

const LeftSide = () => {
    return (
        <div className="w-3/12 bg-darkBlue max-md:hidden flex justify-center items-center shadow py-4">
            <div className="flex flex-col justify-stared items-started h-screen">
                <Link href="" className="flex items-center outline-none h-16">
                    <span className="text-2xl font-bold whitespace-nowrap text-white">
                        {logo}
                    </span>
                </Link>
                <div className="flex flex-col justify-between items-start w-full h-full">
                    <ul className="font-medium text-[12px] h-fit w-full">
                        {td.topRoutes.map((n) => (
                            <LeftProps key={n.name} txt={n.name} slug={n.slug} img={n.img} />
                        ))}
                        
                    </ul>
                    <ul className="font-medium text-[12px] h-fit w-full">
                        {td.bottomRoutes.map((n) => (
                            <LeftProps key={n.name} txt={n.name} slug={n.slug} img={n.img} />
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};


export default LeftSide;
