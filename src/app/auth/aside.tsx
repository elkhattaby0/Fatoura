import Link from "next/link";
import Image from "next/image";
import React from "react";
import route from "../../Routes.json";

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
                slug: route.auth.invoices,
            },
            {
                name: "Tax Declaration",
                img: "/auth/invoices.png",
                slug: route.auth.invoices,
            },
            {
                name: "Integration Status",
                img: "/auth/invoices.png",
                slug: route.auth.invoices,
            },
        ],
    },
    {
        name: "Invoicing",
        layouts: [
            {
                name: "Create Invoice",
                img: "/auth/expenses.png",
                slug: route.auth.expenses,
            },
            {
                name: "Invoice List",
                img: "/auth/expenses.png",
                slug: route.auth.expenses,
            },
            {
                name: "Reminders",
                img: "/auth/expenses.png",
                slug: route.auth.expenses,
            },
        ],
    },
    {
        name: "Cash Flow Management",
        layouts: [
            {
                name: "Income",
                img: "/auth/expenses.png",
                slug: route.auth.homepage,
            },
            {
                name: "Payment Alerts",
                img: "/auth/expenses.png",
                slug: route.auth.homepage,
            },
        ],
    },
    {
        name: "Financial Reports",
        layouts: [
            {
                name: "Automatic Reports",
                img: "/auth/expenses.png",
                slug: route.auth.homepage,
            },
            {
                name: "Export Data",
                img: "/auth/expenses.png",
                slug: route.auth.homepage,
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
                slug: route.auth.homepage,
            },
            {
                name: "Integration Settings",
                img: "/auth/expenses.png",
                slug: route.auth.homepage,
            },
            {
                name: "Notification Preferences",
                img: "/auth/expenses.png",
                slug: route.auth.homepage,
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

const LeftSide = () => {
    return (
        <div className="w-2/12 max-md:hidden relative flex justify-center shadow py-4">
            <div className="fixed h-screen overflow-y-auto">
                <ul className="font-medium text-[12px] ">
                    {info.map((n) => (
                        <LeftProps key={n.name} txt={n.name} layouts={n.layouts} />
                    ))}
                </ul>
            </div>
        </div>
    );
};


export default LeftSide;
