import React from "react";
import FormatDate from "../../components/FormatDate";


const data = [
    {"activity": "Invoice sent to Client X", "date": "2025-02-28"},
    {"activity": "Tax declaration submitted", "date": "2024-03-31"},
    {"activity": "Payment received from Client Y", "date": "2024-03-20"},
]

interface RecentActivityProps {
    title?:string;
}

const RecentActivity:React.FC<RecentActivityProps> = ({title}) => {
    return (
        <div className="h-fit rounded-xl p-4 border bg-white w-full mt-4">
            {
                title ?
                <h3
                    className='font-bold text-xl text-darkBlue mb-4'
                >
                    {title}
                </h3>
                : <div className="animate-pulse rounded-full bg-gray-300 p-2 w-[200px] mt-2"></div>
            }
            <ul>
                {
                    data.map(n=> <li key={n.activity} >- {n.activity}, {FormatDate(n.date)}.</li>)
                }
            </ul>
            
        </div>
    )
}

export default RecentActivity;