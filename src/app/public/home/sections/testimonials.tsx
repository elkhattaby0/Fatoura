"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const Testimonials: React.FC = () => {
    const { t } = useLanguage();
    const dt = t.testimonials
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

    interface clientFeedbackProps {
        id: number;
        name: string;
        msg: string;
        img: string;
    }

    const ClientFeedback: React.FC<clientFeedbackProps> = ({id, msg, name, img}) => {
        return (
            <div key={id}  className="w-full min-w-[400px] max-md:w-full bg-lightGray h-[300px] rounded-xl">
                <ul className="flex flex-col gap-y-6 sm:gap-y-8 h-full " key={id}>
                <li className="h-full ">
                    <figure className="relative flex flex-col justify-between h-full p-6">
                    <svg aria-hidden="true"
                        width="105" height="78" className="absolute left-6 top-6 fill-slate-100">
                        <path
                        d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z">
                        </path>
                    </svg>
                    <blockquote className="relative">
                    <p
                        className={
                            msg
                            ? "text-lg tracking-tight text-black"
                            : "animate-pulse p-2 w-full space-y-2"
                        }
                        >
                        {msg || (
                            <>
                            <div className="h-4 bg-gray-300 rounded-full" />
                            <div className="h-4 bg-gray-300 rounded-full" />
                            <div className="h-4 bg-gray-300 rounded-full" />
                            </>
                        )}
</p>
                    </blockquote>
                    <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                        <div>
                        <div 
                            className={ name ? "font-display text-base text-black": "animate-pulse p-2 w-[150px] bg-gray-300 rounded-full"}
                            >
                            {name}
                        </div>
                        </div>
                        <div className="overflow-hidden rounded-full bg-slate-50">
                        <Image src={img} alt="Avatar" 
                        className={ img ? "size-20 object-cover bg-gray-300 h-12 w-12" : "animate-pulse  bg-gray-300 rounded-full"}
                        width={100} height={100} />
                        </div>
                    </figcaption>
                    </figure>
                </li>
                </ul>
            </div>
        )
    }

    return (
        <section 
            id="testimonials" aria-label="What our customers are saying" className="bg-slate-50 py-20 sm:py-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl md:text-center">
                    <h2 className="font-bold text-darkBlue text-3xl leading-[1.1] sm:text-3xl md:text-6xl">{dt.title}</h2>
                </div>
                <div className="relative w-[90%] max-md:w-[100%] h-full flex items-center mt-8">
                        {canScrollLeft && (
                            <button 
                                onClick={() => handleScroll("left")} 
                                className="p-2 bg-darkBlue hover:bg-skyBlue text-lightGray h-fit rounded-xl hover:shadow-xl group outline-none"
                            >
                                <svg className="size-5 rotate-45 group-hover:rotate-0" fill="#ffffff" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"  width="100%" height="100%" viewBox="0 0 550.354 550.354"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M541.169,208.807H261.295c-5.07,0-5.906-2.484-1.87-5.551l68.373-51.919c4.039-3.066,7.311-9.66,7.311-14.73V25.578 c0-5.07-3.269-6.689-7.301-3.614L3.025,269.61c-4.033,3.075-4.033,8.057,0,11.132L327.811,528.39 c4.033,3.076,7.301,1.457,7.301-3.613V413.748c0-5.07-3.274-11.665-7.311-14.73l-68.372-51.919 c-4.04-3.066-3.201-5.551,1.87-5.551h279.876c5.07,0,9.18-4.11,9.18-9.181V217.988 C550.349,212.917,546.239,208.807,541.169,208.807z"></path> </g> </g> </g></svg>
                            </button>
                        )}
                        <div ref={scrollRef} className="flex gap-4 overflow-hidden w-full" >     
                            {
                                dt.data.map((n: {id:number; name:string; msg:string; img:string;})=> (
                                    <ClientFeedback
                                        key={n.id}  name={n.name} msg={n.msg} img={n.img} id={n.id}
                                    />
                                ))
                            }
                        </div>
                    {canScrollRight && (
                        <button 
                            onClick={() => handleScroll("right")} 
                            className="p-2 bg-darkBlue hover:bg-skyBlue text-lightGray h-fit rounded-xl hover:shadow-xl group outline-none"
                        >
                            <svg className="size-5 rotate-[40rad] group-hover:-rotate-180" fill="#ffffff" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"  width="100%" height="100%" viewBox="0 0 550.354 550.354"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M541.169,208.807H261.295c-5.07,0-5.906-2.484-1.87-5.551l68.373-51.919c4.039-3.066,7.311-9.66,7.311-14.73V25.578 c0-5.07-3.269-6.689-7.301-3.614L3.025,269.61c-4.033,3.075-4.033,8.057,0,11.132L327.811,528.39 c4.033,3.076,7.301,1.457,7.301-3.613V413.748c0-5.07-3.274-11.665-7.311-14.73l-68.372-51.919 c-4.04-3.066-3.201-5.551,1.87-5.551h279.876c5.07,0,9.18-4.11,9.18-9.181V217.988 C550.349,212.917,546.239,208.807,541.169,208.807z"></path> </g> </g> </g></svg>
                        </button>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Testimonials;