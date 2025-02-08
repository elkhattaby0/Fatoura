import React from "react";
import TableExpenses from "./TableExpenses";
import LineChart from "./Chart";
import Header from "./Header";

const expenses = [
    { id: 1, name: "Office Rent", category: "Rent", amount: 1200, date: "2024-01-01" },
    { id: 2, name: "Employee Salaries", category: "Salaries", amount: 5000, date: "2024-01-05" },
    { id: 3, name: "Internet Bill", category: "Utilities", amount: 100, date: "2024-01-07" },
    { id: 4, name: "Electricity Bill", category: "Utilities", amount: 200, date: "2024-01-10" },
    { id: 5, name: "Office Supplies", category: "Equipment", amount: 150, date: "2024-01-12" },
    { id: 6, name: "Marketing Ads", category: "Marketing", amount: 700, date: "2024-01-15" },
    { id: 7, name: "Cloud Hosting", category: "Software", amount: 300, date: "2024-01-18" },
    { id: 8, name: "Client Meeting", category: "Travel", amount: 80, date: "2024-01-20" },
    { id: 9, name: "Coffee & Snacks", category: "Food", amount: 50, date: "2024-01-22" },
    { id: 10, name: "Software Licenses", category: "Software", amount: 500, date: "2024-01-25" },
    { id: 11, name: "Phone Bill", category: "Utilities", amount: 120, date: "2024-02-01" },
    { id: 12, name: "Website Maintenance", category: "Software", amount: 250, date: "2024-02-03" },
    { id: 13, name: "Tax Payment", category: "Taxes", amount: 1800, date: "2024-02-07" },
    { id: 14, name: "Printing & Stationery", category: "Office", amount: 90, date: "2024-02-10" },
    { id: 15, name: "Team Lunch", category: "Food", amount: 200, date: "2024-02-14" },
    { id: 16, name: "Freelancer Payment", category: "Salaries", amount: 400, date: "2024-02-18" },
    { id: 17, name: "Conference Tickets", category: "Education", amount: 600, date: "2024-02-20" },
    { id: 18, name: "Gasoline", category: "Travel", amount: 75, date: "2024-02-22" },
    { id: 19, name: "New Office Chairs", category: "Equipment", amount: 900, date: "2024-02-25" },
    { id: 20, name: "Cleaning Services", category: "Maintenance", amount: 150, date: "2024-03-01" },
    { id: 21, name: "Legal Fees", category: "Legal", amount: 1300, date: "2024-03-05" },
    { id: 22, name: "Security Software", category: "Software", amount: 220, date: "2024-03-08" },
    { id: 23, name: "Courier Services", category: "Logistics", amount: 100, date: "2024-03-11" },
    { id: 24, name: "HR Training", category: "Education", amount: 350, date: "2024-03-14" },
    { id: 25, name: "Social Media Ads", category: "Marketing", amount: 800, date: "2024-03-18" },
    { id: 26, name: "Water Bill", category: "Utilities", amount: 80, date: "2024-03-21" },
    { id: 27, name: "Office Decorations", category: "Office", amount: 200, date: "2024-03-24" },
    { id: 28, name: "Annual Domain Renewal", category: "Software", amount: 30, date: "2024-03-28" },
    { id: 29, name: "IT Support", category: "Maintenance", amount: 500, date: "2024-04-01" },
    { id: 30, name: "Printer Ink", category: "Office", amount: 120, date: "2024-04-04" },
    { id: 31, name: "Networking Event", category: "Marketing", amount: 450, date: "2024-04-07" },
    { id: 32, name: "Remote Work Stipend", category: "Salaries", amount: 600, date: "2024-04-10" },
    { id: 33, name: "Office Insurance", category: "Legal", amount: 1000, date: "2024-04-15" },
    { id: 34, name: "Air Conditioning Repair", category: "Maintenance", amount: 350, date: "2024-04-18" },
    { id: 35, name: "Donation to Charity", category: "Other", amount: 500, date: "2024-04-20" }
];


export default function Expenses () {
    const TotalAmount =  expenses.reduce((sum, item)=> sum + item.amount, 0)
    return (
        <div>
            <Header TotalAmount={TotalAmount} infoTable={expenses} />
            <div className='my-4'>
                <LineChart infoTable={expenses}/>
            </div>
            <TableExpenses infoTable={expenses} />
        </div>
    )
}