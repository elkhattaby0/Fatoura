"use client";
import React from "react";
import { useLanguage } from "@/context/LanguageContext";

const Features: React.FC = () => {
    const { t } = useLanguage();
    const dt = t.features
    return (
        <div className="bg-darkBlue">
            <section id="features" className="container mx-auto px-4 space-y-6  py-8 md:py-12 lg:py-20">

                <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">

                    <h2 className="font-bold text-white text-3xl leading-[1.1] sm:text-3xl md:text-6xl">{dt.title}</h2>

                    <p className="max-w-[85%] leading-normal text-lightGray text-muted-foreground sm:text-lg sm:leading-7">
                        {dt.description}
                    </p>

                </div>

                <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
                    {
                        dt.data.map((n: {id:number; nbr: number; name:string; txt:string;})=> (
                            <div key={n.id}
                                className="relative overflow-hidden rounded-lg border bg-lightGray select-none hover:shadow p-2">
                                <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                                    <h2 className="font-bold text-5xl text-darkBlue">
                                        {n.nbr}
                                    </h2>
                                    <div className="space-y-2">
                                        <h3 className="font-bold text-black">{n.name}</h3>
                                        <p className="text-sm text-black">{n.txt}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                    

                </div>

                </section>
        </div>
    )
}

export default Features;