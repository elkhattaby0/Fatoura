"use client"
import React from "react"

interface PaymentAlertsProps {
    title:string;
    txt:string;
    txt1:string;
}

const PaymentAlerts:React.FC<PaymentAlertsProps> = ({title, txt, txt1}) => {
    return (
        <div className="h-full rounded-xl p-4 border bg-white w-1/2 max-md:w-full mt-4">
            {
                title ? 
                <h3
                    className='font-bold text-xl text-darkBlue mb-4'
                >
                    {title}
                </h3> 
                : <div className="animate-pulse rounded-full bg-gray-300 p-2 w-[200px] mt-2"></div>
            }
            {
                txt ? 
                <p
                    className="font-semibold text-medium text-black"
                >
                    {txt} :
                </p> 
                : <div className="animate-pulse rounded-full bg-gray-300 p-2 w-[200px] mt-2"></div>
            }
            {
                txt1 ? 
                <p
                    className="font-semibold text-medium text-black"
                >
                    {txt1} :
                </p> 
                : <div className="animate-pulse rounded-full bg-gray-300 p-2 w-[200px] mt-2"></div>
            }
        </div>
    )
}


export default PaymentAlerts;