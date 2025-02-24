import React from "react";
import type { Metadata } from "next";
import Title from "../components/title";
import CreateInvoice from "./sections/createInvoice";
import InvoiceReminders from "./sections/invoiceReminders";
import YourInvoices from "./sections/yourInvoices";
import en from "@/translation/en";
const dt = en.dashboard.invoicingLayout

export const metadata: Metadata = {
    title: "Fatoura - Invoicing",
    description: "Fatoura SaaS",
};


export default function Invoicing () {
    return (
        <div>
            <Title 
                title={dt.header.title}
                txt={dt.header.txt}
            />
            <div className='flex max-md:flex-col gap-4 max-md:gap-0'>
                <div className="w-1/3 max-md:w-full">
                    <CreateInvoice 
                        title={dt.c1.title}
                        btn={dt.c1.btn}
                        title1={dt.c1.card.title}
                        name={dt.c1.card.name}
                        invoiceDate={dt.c1.card.invoiceDate}
                        dueDate={dt.c1.card.dueDate}
                        description={dt.c1.card.description}
                        quantity={dt.c1.card.quantity}
                        price={dt.c1.card.price}
                        total={dt.c1.card.total}
                        notes={dt.c1.card.notes}
                        btn1={dt.c1.card.btn}
                    />  
                    <InvoiceReminders 
                        title={dt.c2.title}
                    />
                </div>
                <YourInvoices 
                    title={dt.c3.title}
                    headTable={dt.c3.headTable}
                    data={dt.c3.data}
                    sts={dt.c3.sts}
                    pr={dt.c3.pr}
                    pg={dt.c3.pg}
                    nt={dt.c3.nt}
                    currency={dt.c3.currency}
                />
            </div>
        </div>
    )
}