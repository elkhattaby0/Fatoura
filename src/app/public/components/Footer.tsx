"use client";

import Link from "next/link"
import React from "react"
import { useLanguage } from "@/context/LanguageContext"

const Footer: React.FC = () => {
    const { t } = useLanguage();
    const dt = t.footer
    return (
        <div>
            <footer className="bg-darkBlue">
                <div className="container mx-auto p-0 md:p-8 xl:px-0">
                    <div className="mx-auto max-w-7xl px-6 pb-10 pt-16">
                        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                            <div className="space-y-4">
                                <div>
                                    <Link href={dt.logo.slug} className="outline-none">
                                        <div className="flex items-center space-x-2 text-2xl font-bold">
                                            <span className="text-white">{dt.logo.name}</span>
                                        </div>

                                    </Link>
                                </div>
                                <div className="max-w-md pr- 16 text-md text-lightGray">
                                    {dt.description}
                                </div>
                            </div>
                            <div className="mt-16 grid grid-cols-4 gap-8 xl:col-span-2 xl:mt-0 max-md:grid-cols-1">
                                
                                    {
                                        dt.links.map((n: {id:number; title:string; list:any})=> (
                                            <div key={n.id}>
                                                <h3 className="text-xl font-bold leading-6 text-white">{n.title}</h3>
                                                <ul role="list" className="mt-6 space-y-4">
                                                    {
                                                        n.list.map((i: {id:number; slug:string; name:string; })=> (
                                                            <li key={i.id}>
                                                                <Link href={i.slug}
                                                                    className="text-md leading-6 text-lightGray hover:text-white outline-none">{i.name}
                                                                </Link>
                                                            </li>
                                                        ))
                                                    }
                                                </ul>
                                            </div>
                                        ))
                                    }
                                    
                                
                            </div>
                        </div>
                        <div className="mt-16 border-t border-gray-400/30 pt-8 sm:mt-20 lg:mt-24">
                            <div className="text-md text-center text-white">
                                {dt.bottom.copyright}
                                <Link rel="noopener" href={dt.bottom.logo.slug} className="outline-none"> {dt.bottom.logo.name}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer