"use client"
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { useState } from "react";

const info = [
    {
        name: "Overview",
        layouts: [
            // {
            //     name: "Overview",
            //     img: "/auth/invoices.png",
            //     slug: route.auth.invoices,
            // },
        ],
    },
    {
        name: "Tax Management",
        layouts: [
            {
                name: "Automatic Tax Calculation",
                img: "/auth/invoices.png",
                slug: "/",
            },
            {
                name: "Tax Declaration",
                img: "/auth/invoices.png",
                slug: "/",
            },
            {
                name: "Integration Status",
                img: "/auth/invoices.png",
                slug: "/",
            },
        ],
    },
    {
        name: "Invoicing",
        layouts: [
            {
                name: "Create Invoice",
                img: "/auth/expenses.png",
                slug: "/",
            },
            {
                name: "Invoice List",
                img: "/auth/expenses.png",
                slug: "/",
            },
            {
                name: "Reminders",
                img: "/auth/expenses.png",
                slug: "/",
            },
        ],
    },
    {
        name: "Cash Flow Management",
        layouts: [
            {
                name: "Income",
                img: "/auth/expenses.png",
                slug: "/",
            },
            {
                name: "Payment Alerts",
                img: "/auth/expenses.png",
                slug: "/",
            },
        ],
    },
    {
        name: "Financial Reports",
        layouts: [
            {
                name: "Automatic Reports",
                img: "/auth/expenses.png",
                slug: "/",
            },
            {
                name: "Export Data",
                img: "/auth/expenses.png",
                slug: "/",
            },
        ],
    },
    // {
    //     name: "Learning & Support",
    //     layouts: [
    //         {
    //             name: "Educational Resources",
    //             img: "/auth/expenses.png",
    //             slug: route.auth.homepage,
    //         },
    //         {
    //             name: "Chat Support",
    //             img: "/auth/expenses.png",
    //             slug: route.auth.homepage,
    //         },
    //     ],
    // },
    {
        name: "Settings",
        layouts: [
            {
                name: "Profile Management",
                img: "/auth/expenses.png",
                slug: "/",
            },
            {
                name: "Integration Settings",
                img: "/auth/expenses.png",
                slug: "/",
            },
            {
                name: "Notification Preferences",
                img: "/auth/expenses.png",
                slug: "/",
            },
        ],
    },
];

interface LayoutItem {
    name: string;
    img: string;
    slug: string;
}

interface LeftProps {
    txt: string;
    layouts: LayoutItem[];
}

const LeftProps: React.FC<LeftProps> = ({ txt, layouts }) => {
    return (
        <li className="px-4 pt-2" key={txt}>
            <h3
                className={
                    txt
                        ? "font-bold text-darkBlue text-[14px] uppercase"
                        : "animate-pulse rounded-full bg-gray-300 p-2 w-[150px]"
                }
            >
                {txt}
            </h3>
            {layouts.map((n, index) => (
                <Link key={index} href={n.slug} className="flex items-center ml-2 mt-2 gap-2">
                    {false ? (
                        <Image
                            src={n.img}
                            alt={n.name || "Image"}
                            height={n.img ? 20 : 0}
                            width={n.img ? 20 : 0}
                            className="size-5 mr-0 rounded"
                        />
                        ) :
                        (
                        <div className="animate-pulse rounded-full bg-gray-300 p-2"></div>
                            )
                    }
                    
                    <p
                        className={
                            n.name
                                ? "font-semibold text-[12px] text-black hover:text-darkBlue"
                                : "animate-pulse rounded-full bg-gray-300 p-2 w-full"
                        }
                    >
                        {n.name}
                    </p>
                </Link>
            ))}
        </li>
    );
};

const Headre: React.FC = () => {
    const [isShowed, setIsShowed] = useState(false);
    interface UserProps {
        img: string;
        type: string;
        name: string;
    }
    const UserInfo: React.FC<UserProps> = ({ img, type, name }) => {
        return (
            <div className="flex items-center bg-white rounded-xl border py-1 px-2 rounde border-l">
                <div className="rounded-full flex items-center justify-center overflow-hidden">
                    {
                        img ? (
                            <Image 
                                src={img} 
                                alt="Avatar" 
                                width={9} 
                                height={9} 
                                className="w-9 h-9 object-cover rounded-full border"
                            />
                        ) :
                        (
                            <div className="animate-pulse bg-gray-300 size-8"></div>
                        )
                    }
                    
                </div>
                
                <div className="ml-3">
                    <h3 className={`${type ? "" : "animate-pulse bg-gray-300 p-2 w-1/2 rounded-full mb-1"} font-bold text-[12px] text-thirdcolor uppercase`}>{type}</h3>
                    <h2 className={`${name ? "" : "animate-pulse bg-gray-300 p-2 w-[100px] rounded-full"} font-medium text-[13px] text-foreground`}>{name}</h2>
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
                <input type="text" placeholder="Search" 
                    className="outline-none bg-none mx-2"/>
            </div>
        )
    }
    
    return (
        <div className="">
        <div className="px-4 w-full flex justify-between items-center border-b ">
            <Link href="" className="w-2/12 max-md:w-1/3 flex items-end outline-none">
                <span className="text-2xl font-bold whitespace-nowrap text-darkBlue">Fatoura.</span>
            </Link>
            <div className="flex justify-between max-md:justify-end items-center w-10/12 max-md:w-2/3 gap-2 py-2"> 
                <Search />
                <UserInfo 
                    img="/heroabout.jpg" type="Admin" name="Mo Salah"  
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
                <div
                    className="size-50 bg-lightGray absolute z-10 mt-50 w-full h-fit py-5"
                >
                    <ul className="font-medium text-[12px] ">
                        {info.map((n) => (
                            <LeftProps key={n.name} txt={n.name} layouts={n.layouts} />
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Headre;