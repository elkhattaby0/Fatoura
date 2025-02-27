"use client"
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import en from "@/translation/en";
const logo = en.dashboard.logo
const dt = en.dashboard.aside
const user = en.dashboard.userinfo
const search = en.dashboard.search



const Headre: React.FC = () => {
    const [isShowed, setIsShowed] = useState(false);
    interface UserProps {
        img?: string | React.ReactNode;
        type: string;
        name: string;
    }

    const LeftProps: React.FC<{slug: string; img?: string | React.ReactNode; txt: string;}> = ({ slug, img, txt }) => {
        const handleLogout = () => {
            setIsShowed(!isShowed)
            if (slug === "/auth/logout") {
                document.cookie = "auth=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
                
                alert("You have logged out.");
            }
        };
        return (
            <li className="my-4" key={txt}>
                <Link href={slug} className="flex items-center space-x-2" onClick={handleLogout}>
                    {
                        img ? 
                        (
                            <div className="size-6">
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
                                ? "font-bold text-white text-[14px] uppercase"
                                : "animate-pulse rounded-full bg-gray-300 p-2 w-[150px]"
                        }
                    >
                        {txt}
                    </h3>
                </Link>
            </li>
        );
    };
    

    const UserInfo: React.FC<UserProps> = ({ img, type, name }) => {
        return (
            <div className="flex items-center bg-transparant rounded-xl border py-0 cursor-pointer group relative w-fit">
                <button className="rounded-xl flex items-center justify-center overflow-hidden max-md:hover:shadow-xl">
                    {
                        typeof img === "string" ? (
                            <Image 
                                src={img} 
                                alt="user" 
                                width={100} 
                                height={100} 
                                className="size-9 object-cover rounded-xl"
                            />
                        ) :
                        (
                            <div className="animate-pulse bg-gray-300 size-8"></div>
                        )
                    }                    
                </button>
                
                <div className="hidden group-hover:flex flex-col opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out px-2 leading-[15px]">
                    <h3 className={`${type ? "" : "animate-pulse bg-gray-300 p-2 w-1/2 rounded-full mb-1"} font-bold text-[12px] text-darkBlue uppercase`}>{type}</h3>
                    <h2 className={`${name ? "" : "animate-pulse bg-gray-300 p-2 w-[100px] rounded-full"} font-medium text-[13px] text-black`}>{name}</h2>
                </div>
            </div>
        );
    };

    const Search = () => {
        return (
            <div 
                className="bg-white flex h-10 rounded-xl border border-lightGray max-md:hidden"
            >
                <button className="hover:bg-lightGray border-r hover:rounded-xl px-2">
                    {
                        true ? 
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="96" height="96" viewBox="0,0,256,256" className="size-6"
                        >
                            <g fill="#1e3a8a" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: "normal"}}><g transform="scale(10.66667,10.66667)"><path d="M10,2c-4.40347,0 -8,3.59653 -8,8c0,4.40347 3.59653,8 8,8c1.75213,0 3.37052,-0.57793 4.69141,-1.54102l5.1543,5.1543c0.31352,0.32654 0.77908,0.45808 1.21713,0.34388c0.43805,-0.1142 0.78014,-0.45628 0.89433,-0.89433c0.1142,-0.43805 -0.01734,-0.90361 -0.34388,-1.21713l-5.1543,-5.1543c0.96309,-1.32088 1.54102,-2.93928 1.54102,-4.69141c0,-4.40347 -3.59653,-8 -8,-8zM10,4.5c3.05237,0 5.5,2.44763 5.5,5.5c0,3.05237 -2.44763,5.5 -5.5,5.5c-3.05237,0 -5.5,-2.44763 -5.5,-5.5c0,-3.05237 2.44763,-5.5 5.5,-5.5z"></path></g></g>
                        </svg>
                        :
                        <div className="animate-pulse size-6 bg-gray-300 rounded-full"></div>
                    }
                    
                </button>
                <input type="text" placeholder={search} 
                    className="outline-none bg-none mx-2"/>
            </div>
        )
    }
    
    return (
        <div className="w-full">
        <div className="px-4 w-full flex justify-between items-center border-b">
            <Link href="" className="hidden max-md:flex w-2/12 max-md:w-1/3 flex items-end outline-none">
                <span className="text-2xl font-bold whitespace-nowrap text-darkBlue">
                    {logo}
                </span>
            </Link>
            <div className="flex justify-between max-md:justify-end items-center w-full max-md:w-2/3 gap-2 py-2 "> 
                <Search />
                <UserInfo 
                    img={user.img} type={user.type} name={user.name}  
                />
                <button
                    onClick={()=> isShowed ? setIsShowed(false) : setIsShowed(true)}
                    className="hidden max-md:flex items-center justify-center size-10 bg-lightGray rounded-xl font-bold text-xl text-darkBlue"
                >☰</button>
            </div>
        </div>
            <div 
                className={`relative hidden  ${isShowed ? "max-md:flex" : "hidden" }`}
            >
                <div className="absolute top-18 z-10 flex flex-col justify-start items-start w-full h-screen px-4  bg-darkBlue">
                    <ul className="font-medium text-[12px] h-fit">
                        {dt.topRoutes.map((n) => (
                            <LeftProps key={n.name} txt={n.name} slug={n.slug} img={n.img} />
                        ))}
                        
                    </ul>
                    <ul className="font-medium text-[12px] h-fit">
                        {dt.bottomRoutes.map((n) => (
                            <LeftProps key={n.name} txt={n.name} slug={n.slug} img={n.img} />
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Headre;