import React from "react";
import Title from "../components/title";
import PlatformRevenue from "./sections/platformRevenue";
import ExportFinancialData from "./sections/exportFinancialData";


export default function Reports() {
    return (
        <div>
            <Title 
                title="Financial Reports."
                txt="Generate and export your financial data."
            />
            <div className="flex w-full gap-4">
                <PlatformRevenue />
                <ExportFinancialData />                
            </div>
        </div>
    )
}