import Link from "next/link";
import React from "react"
import { data } from "../../../../data"

const dt = data.pricing

const Pricing: React.FC = () => {
    return (
        <div>
            <section className="bg-darkBlue">
                <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6">
                    <div className="max-w-screen-md mx-auto mb-8 text-center lg:mb-12">
                        <h2 className="font-bold text-white text-3xl leading-[1.1] sm:text-3xl md:text-6xl mb-6">{dt.title}</h2>
                        <p className="mb-5 font-light text-lightGray sm:text-xl">{dt.description}</p>
                    </div>
                    <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">

                    {
                        dt.data.map(n=> (
                            <div key={n.id}
                                className="flex flex-col max-w-lg p-6 mx-auto text-center text-black bg-lightGray border border-lightGray rounded-lg shadow xl:p-8">
                                <h3 className="mb-4 text-2xl font-semibold text-darkBlue">{n.type}</h3>
                                <p className="font-light text-black sm:text-lg">{n.txt}</p>
                                <div className="flex items-baseline justify-center my-8">
                                    <span className="mr-2 text-5xl font-extrabold">{n.price}{dt.currency}</span>
                                    <span className="text-black">{dt.date}</span>
                                </div>

                                <ul role="list" className="mb-8 space-y-4 text-left">
                                    {
                                        n.ben.map(i=> (
                                            <li className="flex items-center space-x-3" key={i}>
                                                <svg className="flex-shrink-0 w-5 h-5 text-darkBlue" fill="currentColor"
                                                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd"
                                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                        clipRule="evenodd"></path>
                                                </svg>
                                                <span className="text-black">{i}</span>
                                            </li>
                                        ))
                                    }
                                </ul>
                                <Link href={dt.btn.slug}
                                    className="text-white bg-darkBlue hover:bg-skyBlue focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 outline-none text-center">{dt.btn.name}</Link>
                            </div>
                    
                        ))
                    }
                        </div>
                </div>
            </section>
        </div>
    )
}

export default Pricing;