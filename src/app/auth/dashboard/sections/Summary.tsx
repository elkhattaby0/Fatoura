import React from "react";
import SummaryTable from "./SummaryTable";
import BoldParagraph from "../../components/boldParagraph";
import Title2 from "../../components/title2";
import SCard from "../../components/sCard";
import SCardTxt from "../../components/sCardTxt";

const headTable = ["Client Name", "Amount", "Date"]
const data = [
    {"client": "zakaria", "amount": 10000, "date": "April 15, 2024"},
    {"client": "ahmed", "amount": 5000, "date": "April 20, 2024"},
]



const Summary:React.FC = () => {
    return (
        <div className="h-fit rounded-xl p-4 border bg-white w-1/2 max-md:w-full mt-4">
            <div></div>
            <Title2 title="Summary Widgets" />
            <div className="flex flex-wrap  w-full col-2 gap-2">
                <SCard id={1} name="Unpaid Invoices" amount={3} currency="" />
                <SCard id={1} name="Total Amount Due" amount={15000} currency="MAD" />
                <SCardTxt id={1} name="Next Tax Deadlin" text="April 15, 2024" />
                <SCard id={1} name="Amount Due" amount={5000} currency="MAD" />
            </div>
            <BoldParagraph txt="Recent Payments Received" />
            <SummaryTable
                headTable={headTable}
                data={data}
                currency={"MAD"}
                pr="Previous"
                pg="Page"
                nt="Next"
            />
        </div>
    )
}

export default Summary;