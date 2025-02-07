import React from "react";
import Link from "next/link";
import Image from "next/image";
import { data } from "../../../../data"

const dt = data.hero

const Hero: React.FC = () => {
    return (
        <div className="relative flex flex-col items-center max-w-screen-xl px-4 mx-auto md:flex-row sm:px-6">
            <div className="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pr-10 ">
                <div className="text-left">
                    <h2
                        className="font-bold text-black text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
                        {dt.txt1}
                        <span className="font-bold text-darkBlue">{dt.title}</span>
                        {dt.txt2}
                    </h2>
                    <p className="max-w-md mx-auto mt-3 text-base text-balck sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                        {dt.description}
                    </p>
                    <div className="mt-5 sm:flex md:mt-8">
                        <div className="rounded-md shadow">
                            <Link href={dt.btn.slug}
                                className="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-darkBlue border border-transparent rounded-md hover:bg-skyBlue focus:outline-none focus:shadow-outline-blue md:py-4 md:text-lg md:px-10">
                                {dt.btn.name}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center md:w-1/2 ">
                <div className="relative w-full p-3 rounded  md:p">
                    <div className="rounded-lg text-black w-full">   
                        <Image src={dt.img} alt="Hero Icon" width={600} height={600} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;