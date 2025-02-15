"use client"
import React from "react";
import { useLanguage } from "@/context/LanguageContext";


const HowItWorks: React.FC = () => {
  const { t } = useLanguage();
  const dt = t.howItWorks
  const leftItems = dt.data.slice(0, 3); 
  const rightItems = dt.data.slice(3);  
  return (
    <div>
      <section className="py-20 overflow-hidden">
        <div className="container px-4 mx-auto">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-wrap items-start -mx-5">
              <div className="w-full lg:w-1/2 px-5 mb-20 max-md:mb-0 lg:mb-0">
                <div className="max-w-md">
                  <h2 className="font-bold text-darkBlue text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
                    {dt.title}
                  </h2>
                </div>
                <ul className="mt-8">
                  {leftItems.map((n) => (
                    <li
                      key={n.id}
                      className="flex pb-10 mb-8 border rounded-xl bg-lightGray"
                    >
                      <div className="mr-8">
                        <span className="flex justify-center items-center w-10 h-10 bg-darkBlue text-lg font-bold rounded-full text-white">
                          {n.id}
                        </span>
                      </div>
                      <div className="max-w-xs mt-2">
                        <h3 className="mb-2 text-lg font-bold text-darkBlue">
                          {n.name}
                        </h3>
                        <p className="text-lg text-black">{n.txt}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="w-full lg:w-1/2 px-5">
                <ul>
                  {rightItems.map((n) => (
                    <li
                      key={n.id}
                      className="flex pb-10 mb-8 border rounded-xl bg-lightGray"
                    >
                      <div className="mr-8">
                        <span className="flex justify-center items-center w-10 h-10 bg-darkBlue text-lg font-bold rounded-full text-white">
                          {n.id}
                        </span>
                      </div>
                      <div className="max-w-xs mt-2">
                        <h3 className="mb-2 text-lg font-bold text-darkBlue">
                          {n.name}
                        </h3>
                        <p className="text-lg text-black">{n.txt}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
