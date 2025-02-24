import React from "react";
import SummaryTable from "./SummaryTable";


const headTable = ["Client Name", "Amount", "Date"]
const data = [
    {"client": "zakaria", "amount": 10000, "date": "April 15, 2024"},
    {"client": "ahmed", "amount": 5000, "date": "April 20, 2024"},
]

interface SummaryProps { 
    title:string; 
    unpaid:string; nbrunpaid:number; 
    amount:string; nbramount:number; currency:string;
    deadline:string; dt:string;
    deadlinetxt:string; amountDue:number;
    paymentsReceived:string;
}
const Summary:React.FC<SummaryProps> = (
    {title, unpaid, nbrunpaid, amount, nbramount, currency, deadline, dt, deadlinetxt, amountDue, paymentsReceived}
    ) => {
    return (
        <div className="h-fit rounded-xl p-4 border bg-white w-1/2 max-md:w-full mt-4">
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
                unpaid ? 
                <p
                    className='font-normal text-medium text-black'
                >
                    - {unpaid + " : "} <span className="font-bold text-medium">{nbrunpaid}</span>
                </p> 
                : <div className="animate-pulse rounded-full bg-gray-300 p-2 w-[200px] mt-2"></div>
            }
            {
                amount ? 
                <p
                    className='font-normal text-medium text-black'
                >
                    - {amount + " : "} <span className="font-bold text-medium text-darkBlue">{nbramount + " " + currency}</span>
                </p> 
                : <div className="animate-pulse rounded-full bg-gray-300 p-2 w-[200px] mt-2"></div>
            }
            <div className="my-4"></div>
            {
                deadline ? 
                <p
                    className='font-normal text-medium text-black'
                >
                    - {deadline + " : "} <span className="font-bold text-medium">{dt}</span>
                </p> 
                : <div className="animate-pulse rounded-full bg-gray-300 p-2 w-[200px] mt-2"></div>
            }
            {
                deadlinetxt ? 
                <p
                    className='font-normal text-medium text-black'
                >
                    - {deadlinetxt + " : "} <span className="font-bold text-medium text-darkBlue">{amountDue + " " + currency}</span>
                </p> 
                : <div className="animate-pulse rounded-full bg-gray-300 p-2 w-[200px] mt-2"></div>
            }
            <div className="my-4"></div>
            {
                paymentsReceived  ? 
                <p
                    className="font-semibold text-medium text-black"
                >
                    {paymentsReceived} :
                </p> 
                : <div className="animate-pulse rounded-full bg-gray-300 p-2 w-[200px] mt-2"></div>
            }
            <SummaryTable
                headTable={headTable}
                data={data}
                currency={currency}
            />
        </div>
    )
}

export default Summary;