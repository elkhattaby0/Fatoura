import React from "react"
import Title2 from "../../components/title2";
import BoldParagraph from "../../components/boldParagraph";
import Button from "../../components/Button";
import SCard from "../../components/sCard";

const info = [
    {"id":1, "nm": "Assets", "amount": 50000},
    {"id":2, "nm": "Liabilities", "amount": 20000},
    {"id":3, "nm": "Equity", "amount": 30000},
]
const info2 = [
    {"id":1, "nm": "Revenue", "amount":  100000},
    {"id":2, "nm": "Expenses", "amount": 60000},
    {"id":3, "nm": "Net Profit", "amount": 40000},
]

const PlatformRevenue= () => {
    return (
        <div className="h-full rounded-xl p-4 border bg-white w-full mt-4">
            <Title2 title="Automatic Financial Reports" />
            <BoldParagraph txt="Simplified Balance Sheet" />
            <div className="flex flex-warp gap-4">
                {
                    info.map(n=> <SCard key={n.id} id={n.id} name={n.nm} amount={n.amount} currency="MAD" />)
                }
            </div>
            <BoldParagraph txt="Income Statement" />
            <div className="flex flex-warp gap-4">
                {
                    info2.map(n=> <SCard key={n.id} id={n.id} name={n.nm} amount={n.amount} currency="MAD" />)
                }
            </div>
            <div className="flex flex-wrap gap-4">
                <Button txt="Generate Balance Sheet" />
                <Button txt="Generate Income Statement" />
            </div>
        </div>
    )
}

export default  PlatformRevenue