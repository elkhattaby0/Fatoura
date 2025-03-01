"use client"
import React from "react"
import Title2 from "../../components/title2";
import BoldParagraph from "../../components/boldParagraph";

interface PaymentAlertsProps {
    title:string;
    txt:string;
    txt1:string;
}

const PaymentAlerts:React.FC<PaymentAlertsProps> = ({title, txt, txt1}) => {
    return (
        <div className="h-full rounded-xl p-4 border bg-white w-1/2 max-md:w-full mt-4">
            <Title2 title={title} />
            <BoldParagraph txt={txt} />
            <BoldParagraph txt={txt1} />
        </div>
    )
}


export default PaymentAlerts;