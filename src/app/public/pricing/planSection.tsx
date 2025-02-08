import React from "react";
import {data} from "../../../data"
const dt = data.pricingLayout.plan

const PlanSection:React.FC = () => {
    
    return (
        <div className="overflow-x-auto bg-lightGray mt-10 py-10 flex flex-col items-center w-full">
            <h2 className="text-3xl font-bold text-darkBlue text-center w-3/4 mb-10">{dt.title}</h2>
            <table className="w-4/5 bg-white border border-white mb-6 ">
                <thead className="divide-y divide-lightGray shadow">
                    <tr className="white">
                        {
                            dt.head.map(n=> (
                                <th key={n}
                                    className="px-6 py-3 text-center text-xs font-medium text-black uppercase tracking-wider border-b-[1px] border-lightGray">
                                    {n}
                                </th>
                            ))
                        }
                    </tr>
                </thead>
                <tbody className="bg-white">
          
                    {
                        dt.data.map(n=> (
                            <tr key={n.id}>
                                <td className="px-6 py-4 whitespace-nowrap text-md font-medium text-black border-b-[1px] border-lightGray">
                                {n.feature}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-md text-black text-center border-b-[1px] border-lightGray">
                                {n.basic}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-md text-black text-center border-b-[1px] border-lightGray">
                                {n.pro}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-md text-black text-center border-b-[1px] border-lightGray">
                                {n.advanced}
                            </td>
                        </tr>
                        ))
                    }

                </tbody>
            </table>
        </div>
    )
} 

export default PlanSection 