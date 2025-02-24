import React from "react"
import Welcoming from "./sections/Welcoming"
import Summary from "./sections/Summary"
import QuickActions from "./sections/QuickActions"
import RecentActivity from "./sections/RecentActivity"

export default function Dashboard() {

    return (
        <div>
            <Welcoming 
                txt="Welcome back"
                name="Mo Salah"
            />
            <div className="w-full flex gap-4 max-md:flex-col max-md:gap-0"> 
                <Summary 
                    title="Summary Widgets"
                    unpaid="Unpaid Invoices" 
                    nbrunpaid={3}
                    amount="Total Amount Due"
                    nbramount={15000}
                    currency="MAD"
                    deadline="Next Tax Deadline"
                    dt="April 15, 2024"
                    deadlinetxt="Amount Due"
                    amountDue={5000}
                    paymentsReceived="Recent Payments Received"
                />
                <div className="w-1/2 max-md:w-full">
                    <QuickActions 
                        title="Quick Actions"
                    />
                    <RecentActivity 
                        title="Recent Activity"
                    />
                </div>
            </div>
        </div>
    )
}


