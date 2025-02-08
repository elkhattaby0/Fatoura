import React from 'react';
import Header from './Header';
import TableInvoices from './TableInvoices';

const infoTable = [
    {
        "InvoicesNumber": "INV-0001",
        "CustomerName": "Hassan Baladi",
        "Status": "Paid",
        "Date": "2021-01-01",
        "DueDate": "2021-01-31",
        "Amount": 1000,
        "link": "#"
    },
    {
        "InvoicesNumber": "INV-0002",
        "CustomerName": "Fatima Zahra",
        "Status": "Due",
        "Date": "2021-02-01",
        "DueDate": "2021-02-28",
        "Amount": 1500,
        "link": "#"
    },
    {
        "InvoicesNumber": "INV-0003",
        "CustomerName": "Youssef Amrani",
        "Status": "Overdue",
        "Date": "2021-03-01",
        "DueDate": "2021-03-31",
        "Amount": 2000,
        "link": "#"
    },
    {
        "InvoicesNumber": "INV-0004",
        "CustomerName": "Amina Bennani",
        "Status": "Paid",
        "Date": "2021-04-01",
        "DueDate": "2021-04-30",
        "Amount": 1200,
        "link": "#"
    },
    {
        "InvoicesNumber": "INV-0005",
        "CustomerName": "Karim El Fassi",
        "Status": "Due",
        "Date": "2021-05-01",
        "DueDate": "2021-05-31",
        "Amount": 1800,
        "link": "#"
    },
    {
        "InvoicesNumber": "INV-0006",
        "CustomerName": "Noura Cherkaoui",
        "Status": "Overdue",
        "Date": "2021-06-01",
        "DueDate": "2021-06-30",
        "Amount": 2500,
        "link": "#"
    },
    {
        "InvoicesNumber": "INV-0007",
        "CustomerName": "Mehdi Bouzidi",
        "Status": "Paid",
        "Date": "2021-07-01",
        "DueDate": "2021-07-31",
        "Amount": 1300,
        "link": "#"
    },
    {
        "InvoicesNumber": "INV-0008",
        "CustomerName": "Sanaa El Mansouri",
        "Status": "Due",
        "Date": "2021-08-01",
        "DueDate": "2021-08-31",
        "Amount": 1700,
        "link": "#"
    },
    {
        "InvoicesNumber": "INV-0009",
        "CustomerName": "Omar Khadiri",
        "Status": "Overdue",
        "Date": "2021-09-01",
        "DueDate": "2021-09-30",
        "Amount": 2200,
        "link": "#"
    },
    {
        "InvoicesNumber": "INV-0010",
        "CustomerName": "Leila El Harrak",
        "Status": "Paid",
        "Date": "2021-10-01",
        "DueDate": "2021-10-31",
        "Amount": 1400,
        "link": "#"
    },
    {
        "InvoicesNumber": "INV-0011",
        "CustomerName": "Rachid Benjelloun",
        "Status": "Due",
        "Date": "2021-11-01",
        "DueDate": "2021-11-30",
        "Amount": 1900,
        "link": "#"
    },
    {
        "InvoicesNumber": "INV-0012",
        "CustomerName": "Zineb El Alaoui",
        "Status": "Overdue",
        "Date": "2021-12-01",
        "DueDate": "2021-12-31",
        "Amount": 2600,
        "link": "#"
    },
    {
        "InvoicesNumber": "INV-0013",
        "CustomerName": "Khalid Berrada",
        "Status": "Paid",
        "Date": "2022-01-01",
        "DueDate": "2022-01-31",
        "Amount": 1100,
        "link": "#"
    },
    {
        "InvoicesNumber": "INV-0014",
        "CustomerName": "Nadia El Khatib",
        "Status": "Due",
        "Date": "2022-02-01",
        "DueDate": "2022-02-28",
        "Amount": 1600,
        "link": "#"
    },
    {
        "InvoicesNumber": "INV-0015",
        "CustomerName": "Adil Chraibi",
        "Status": "Overdue",
        "Date": "2022-03-01",
        "DueDate": "2022-03-31",
        "Amount": 2100,
        "link": "#"
    },
    {
        "InvoicesNumber": "INV-0016",
        "CustomerName": "Samira El Fahimi",
        "Status": "Paid",
        "Date": "2022-04-01",
        "DueDate": "2022-04-30",
        "Amount": 1250,
        "link": "#"
    },
    {
        "InvoicesNumber": "INV-0017",
        "CustomerName": "Younes El Amrani",
        "Status": "Due",
        "Date": "2022-05-01",
        "DueDate": "2022-05-31",
        "Amount": 1750,
        "link": "#"
    },
    {
        "InvoicesNumber": "INV-0018",
        "CustomerName": "Houda El Kadi",
        "Status": "Overdue",
        "Date": "2022-06-01",
        "DueDate": "2022-06-30",
        "Amount": 2400,
        "link": "#"
    },
    {
        "InvoicesNumber": "INV-0019",
        "CustomerName": "Fouad El Moutawakil",
        "Status": "Paid",
        "Date": "2022-07-01",
        "DueDate": "2022-07-31",
        "Amount": 1350,
        "link": "#"
    },
    {
        "InvoicesNumber": "INV-0020",
        "CustomerName": "Souad El Ghazi",
        "Status": "Due",
        "Date": "2022-08-01",
        "DueDate": "2022-08-31",
        "Amount": 1850,
        "link": "#"
    },
    {
        "InvoicesNumber": "INV-0021",
        "CustomerName": "Tariq El Filali",
        "Status": "Overdue",
        "Date": "2022-09-01",
        "DueDate": "2022-09-30",
        "Amount": 2300,
        "link": "#"
    },
    {
        "InvoicesNumber": "INV-0022",
        "CustomerName": "Asmae El Haddad",
        "Status": "Paid",
        "Date": "2022-10-01",
        "DueDate": "2022-10-31",
        "Amount": 1450,
        "link": "#"
    },
    {
        "InvoicesNumber": "INV-0023",
        "CustomerName": "Anas El Ouazzani",
        "Status": "Due",
        "Date": "2022-11-01",
        "DueDate": "2022-11-30",
        "Amount": 1950,
        "link": "#"
    },
    {
        "InvoicesNumber": "INV-0024",
        "CustomerName": "Hafsa El Moussaoui",
        "Status": "Overdue",
        "Date": "2022-12-01",
        "DueDate": "2022-12-31",
        "Amount": 2700,
        "link": "#"
    },
    {
        "InvoicesNumber": "INV-0025",
        "CustomerName": "Hamza El Khayat",
        "Status": "Paid",
        "Date": "2023-01-01",
        "DueDate": "2023-01-31",
        "Amount": 1150,
        "link": "#"
    },
    {
        "InvoicesNumber": "INV-0026",
        "CustomerName": "Imane El Kabbaj",
        "Status": "Due",
        "Date": "2023-02-01",
        "DueDate": "2023-02-28",
        "Amount": 1650,
        "link": "#"
    },
    {
        "InvoicesNumber": "INV-0027",
        "CustomerName": "Reda El Fassi",
        "Status": "Overdue",
        "Date": "2023-03-01",
        "DueDate": "2023-03-31",
        "Amount": 2150,
        "link": "#"
    },
    {
        "InvoicesNumber": "INV-0028",
        "CustomerName": "Lina El Mernissi",
        "Status": "Paid",
        "Date": "2023-04-01",
        "DueDate": "2023-04-30",
        "Amount": 1300,
        "link": "#"
    },
    {
        "InvoicesNumber": "INV-0029",
        "CustomerName": "Yassine El Gharbi",
        "Status": "Due",
        "Date": "2023-05-01",
        "DueDate": "2023-05-31",
        "Amount": 1800,
        "link": "#"
    },
    {
        "InvoicesNumber": "INV-0030",
        "CustomerName": "Nabil El Khamlichi",
        "Status": "Overdue",
        "Date": "2023-06-01",
        "DueDate": "2023-06-30",
        "Amount": 2450,
        "link": "#"
    },
    {
        "InvoicesNumber": "INV-0031",
        "CustomerName": "Sanaa El Khalfi",
        "Status": "Paid",
        "Date": "2023-07-01",
        "DueDate": "2023-07-31",
        "Amount": 1400,
        "link": "#"
    },
    {
        "InvoicesNumber": "INV-0032",
        "CustomerName": "Othman El Hassani",
        "Status": "Due",
        "Date": "2023-08-01",
        "DueDate": "2023-08-31",
        "Amount": 1900,
        "link": "#"
    },
    {
        "InvoicesNumber": "INV-0033",
        "CustomerName": "Khadija El Moustaghfir",
        "Status": "Overdue",
        "Date": "2023-09-01",
        "DueDate": "2023-09-30",
        "Amount": 2350,
        "link": "#"
    },
    {
        "InvoicesNumber": "INV-0034",
        "CustomerName": "Mounir El Boukili",
        "Status": "Paid",
        "Date": "2023-10-01",
        "DueDate": "2023-10-31",
        "Amount": 1500,
        "link": "#"
    },
    {
        "InvoicesNumber": "INV-0035",
        "CustomerName": "Naima El Farouki",
        "Status": "Due",
        "Date": "2023-11-01",
        "DueDate": "2023-11-30",
        "Amount": 2000,
        "link": "#"
    },
    {
        "InvoicesNumber": "INV-0036",
        "CustomerName": "Abdelkrim El Moutaouakil",
        "Status": "Overdue",
        "Date": "2023-12-01",
        "DueDate": "2023-12-31",
        "Amount": 2800,
        "link": "#"
    },
    {
        "InvoicesNumber": "INV-0037",
        "CustomerName": "Rachida El Khayari",
        "Status": "Paid",
        "Date": "2024-01-01",
        "DueDate": "2024-01-31",
        "Amount": 1200,
        "link": "#"
    },
    {
        "InvoicesNumber": "INV-0038",
        "CustomerName": "Said El Fahmi",
        "Status": "Due",
        "Date": "2024-02-01",
        "DueDate": "2024-02-29",
        "Amount": 1700,
        "link": "#"
    },
    {
        "InvoicesNumber": "INV-0039",
        "CustomerName": "Zakaria El Amraoui",
        "Status": "Overdue",
        "Date": "2024-03-01",
        "DueDate": "2024-03-31",
        "Amount": 2250,
        "link": "#"
    },
    {
        "InvoicesNumber": "INV-0040",
        "CustomerName": "Hanae El Kettani",
        "Status": "Paid",
        "Date": "2024-04-01",
        "DueDate": "2024-04-30",
        "Amount": 1550,
        "link": "#"
    }
];


const Invoices: React.FC = () => {
    
    const TotalAmount =  infoTable.reduce((sum, item)=> sum + item.Amount, 0)
    const TotalPaidAmount = infoTable.filter(item=> item.Status === "Paid").reduce((sum, item)=> sum + item.Amount, 0)
    const TotalPendingAmount = infoTable.filter(item=> item.Status === "Due").reduce((sum, item)=> sum + item.Amount, 0)
    
    return (
        <div>
            <Header 
                TotalAmount={TotalAmount}
                TotalPaidAmount={TotalPaidAmount}
                TotalPendingAmount={TotalPendingAmount}
            />            
            <TableInvoices 
                infoTable={infoTable} 
            />   
        </div>
    )
}

export default Invoices;