import React from "react";
import Botton from "../../components/Button";
import Title2 from "../../components/title2";

interface QuickActionsProps {
    title:string;
}


const QuickActions:React.FC<QuickActionsProps> = ({title}) => {
    return (
        <div className="h-fit rounded-xl p-4 border bg-white w-full mt-4">
            <Title2 title={title} />
            <div className="flex flex-wrap gap-x-4">
                <Botton txt="Create Invoice" />
                <Botton txt="Submit Tax Declaration" />
                <Botton txt="Generate Report" />
            </div>
        </div>
    )
}

export default QuickActions;