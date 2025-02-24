import React from "react";
import Botton from "../../components/Button";

interface QuickActionsProps {
    title:string;
}


const QuickActions:React.FC<QuickActionsProps> = ({title}) => {
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
            <div className="flex flex-wrap gap-x-4">
                <Botton txt="Create Invoice" />
                <Botton txt="Submit Tax Declaration" />
                <Botton txt="Generate Report" />
            </div>
        </div>
    )
}

export default QuickActions;