"use client";
import React from "react";
import { useLanguage } from "@/context/LanguageContext";

interface TeamProps {
    id:number; fname:string; lname:string; role:string;
}
interface CardProps {
    id:number; name:string; text:string; team: TeamProps[]
}

const AboutSection:React.FC = () => {
    const { t } = useLanguage();
    const dt:CardProps[] = t.aboutLayout.about
    return (
        <div className="w-full flex justify-center items-center">
            <div className="flex flex-col gap-8 items-center justify-center bg-lightGray my-10 rounded-xl py-16 w-3/4 max-md:w-full">
                
                {
                    dt.map((n)=> (
                        <div className="w-3/4" key={n.id}>
                            <h2
                                className="font-bold text-3xl text-darkBlue"
                            >{n.id}. {n.name}</h2>
                            <p
                                className="text-xl text-black mt-4"
                            >{n.text}</p>
                            {
                                n.team && (
                                    <ul className="flex flex-wrap mt-4 gap-4">
                                        {
                                            n.team.map((i)=> (
                                                <li className="my- w-fit p-5 rounded-xl bg-white py-4" key={i.id}>
                                                    <h5>
                                                        <span className="font-semibold">
                                                            {i.fname.charAt(0).toUpperCase() + i.fname.slice(1)}
                                                        </span>
                                                        <span
                                                             className="font-bold text-medium"
                                                        > {i.lname.toUpperCase()}</span>
                                                    </h5>
                                                    <h6
                                                        className="font-medium text-skyBlue"
                                                    >{i.role}</h6>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                )
                            }
                            
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default AboutSection;