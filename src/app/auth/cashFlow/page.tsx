import React from "react";
import type { Metadata } from "next";
import Title from "../components/title";
import IncomeExpenses from "./sections/IncomeExpenses";
import PaymentAlerts from "./sections/PaymentAlerts";

export const metadata: Metadata = {
    title: "Fatoura - Cash Flow Management",
    description: "Fatoura SaaS",
};

export default function CashFlow() {
    return (
        <div>
            <Title 
                title="Cash Flow Management"
                txt="Track your income and expenses."
            />
            <div className='flex max-md:flex-col gap-4 max-md:gap-0'>
                <IncomeExpenses 
                    title="Income/Expense Tracking"
                    txt="Transaction List"
            
                    btn="Add New Transaction"
                />
                <PaymentAlerts 
                    title="Payment Alerts"
                    txt="Overdue Invoices"
                    txt1="Upcoming Payment Deadlines"
                />
            </div>
        </div>
    )
}