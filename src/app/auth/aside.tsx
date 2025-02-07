import Link from "next/link"
import Image from "next/image"
import React from "react"
import route from "../../Routes.json"
const info = [
    {
        "name": "Dashboard",
        "img": "/auth/home.png",
        "slug" : route.auth.homepage
    },
    {
        "name": "Invoices",
        "img": "/auth/invoices.png",
        "slug" : route.auth.invoices
    },
    {
        "name": "Expenses",
        "img": "/auth/expenses.png",
        "slug" : route.auth.expenses
    },
    {
        "name": "Taxes",
        "img": "/auth/taxes.png",
        "slug" : route.auth.homepage
    },
    {
        "name": "Subscriptions",
        "img": "/auth/subscriptions.png",
        "slug" : route.auth.homepage
    },
    {
        "name": "Reports",
        "img": "/auth/reports.png",
        "slug" : route.auth.homepage
    },
    {
        "name": "Notifications",
        "img": "/auth/notifications.png",
        "slug" : route.auth.homepage
    },
    {
        "name": "Support",
        "img": "/auth/support.png",
        "slug" : route.auth.homepage
    },
    {
        "name": "Settings",
        "img": "/auth/settings.png",
        "slug" : route.auth.homepage
    },
    {
        "name": "Log Out",
        "img": "/auth/logout.png",
        "slug" : route.auth.homepage
    }
]

interface leftProps {
    txt: string;
    img: string;
    slug: string;
}
const LeftProps: React.FC<leftProps> = ( { txt, img, slug } ) => {
    return (
        <li
            key={txt} 
        >
            <Link href={slug} className="flex items-center my-4">
            <Image src={img} alt={""} height={img ? 10 : 0} width={img ? 22 : 0} 
                className={`${img ? "" : "animate-pulse rounded-full bg-gray-300 p-2"} mr-3 rounded`}
            />
            <p className={txt ? "" : "animate-pulse rounded-full bg-gray-300 p-2 w-full"}>{txt}</p>
            </Link>
        </li>
    )
}

const LeftSide = () => {
    return (
        <div className="px-2 py-4 w-1/6 h-screen relative flex justify-center">
            <div className="rounded-xl px-4 py-2 fixed ">
                
                <h1 className="text-left - mb-10 font-bold text-3xl text-thirdcolor">
                    <Link href={route.auth.homepage}>Fatoura</Link></h1>
                <ul className="font-medium text-[12px] text-foreground">
                    {info.map(n=> <LeftProps 
                        key={n.name} txt={n.name} img={n.img} slug={n.slug}
                    />) }
                </ul>
            </div>
        </div>
    )
}

export default LeftSide