"use client"
import React, { useState } from "react";
import Link from 'next/link';
import Image from 'next/image';
const currency = " DH";

interface TableProps {
    id: string;
    name: string;
    status: string;
    date: string;
    dueDate: string;
    amount: number;
    link: string;
    nbr: number;
}

const TableRow: React.FC<TableProps> = ({ id, name, status, date, dueDate, amount, link, nbr }) => {
    return (
        <tr className='text-[12px] border-b h-10 text-center'>
            <td className='px-5'>{nbr}</td>
            <td className='px-5 text-foreground font-medium'>{id}</td>
            <td className='px-5 text-foreground font-medium'>{name}</td>
            <td className='px-5 flex justify-center'>
                <div className={`flex justify-center items-center m-1 w-20 py-1 rounded-full border ${
                    status === 'Paid' ? 'bg-green-200 text-green-600' :
                    status === 'Due' ? 'bg-blue-200 text-blue-600' : 'bg-red-200 text-red-600'}`}>
                    {status}
                </div>
            </td>
            <td className='px-5'>{date}</td>
            <td className='px-5'>{dueDate}</td>
            <td className='px-5 font-semibold'>{amount.toLocaleString("en-US") + currency}</td>
            <td className='px-5'>
                {link && (
                    <Link href={link} className='flex justify-center items-center'>
                        <Image src="/auth/download.png" alt="Download" height={20} width={20} />
                    </Link>
                )}
            </td>
        </tr>
    );
};
interface Invoice {
    InvoicesNumber: string;
    CustomerName: string;
    Status: string;
    Date: string;
    DueDate: string;
    Amount: number;
    link: string;
}

const TableInvoices: React.FC<{infoTable: Invoice[]}> = ({ infoTable }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const totalPages = Math.ceil(infoTable.length / itemsPerPage);

    const displayedItems = infoTable.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    return (
        <>
            <div className='flex justify-between items-end mb-4 '>
                <h2 className='font-semibold text-md text-center'>All Invoices ({infoTable ? infoTable.length : ""})</h2>
                <button className='bg-thirdcolor rounded-xl text-white py-2 px-4 flex items-center hover:bg-foreground'>
                    <span className='text-2xl font-medium mr-2'>&#x2B;</span>
                    <span className='text-sm font-medium'>New Invoice</span>
                </button>
            </div>
            <table className='w-full border-collapse'>
                <thead className='rounded-xl'>
                    <tr className='h-10 font-thin text-sm text-thirdcolor border-b'>
                        <th>#</th>
                        <th>Invoice Number</th>
                        <th>Customer Name</th>
                        <th>Status</th>
                        <th>Date</th>
                        <th>Due Date</th>
                        <th>Amount</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {displayedItems.map((invoice: Invoice, index: number) => (
                        <TableRow 
                            key={invoice.InvoicesNumber} 
                            id={invoice.InvoicesNumber} 
                            name={invoice.CustomerName} 
                            status={invoice.Status} 
                            date={invoice.Date} 
                            dueDate={invoice.DueDate} 
                            amount={invoice.Amount} 
                            link={invoice.link} 
                            nbr={(currentPage - 1) * itemsPerPage + index + 1}
                        />
                    ))}
                </tbody>
            </table>
            <div className='flex justify-center mt-4'>
                <button 
                    className='mx-2 px-4 py-2 bg-gray-300 rounded disabled:opacity-50' 
                    disabled={currentPage === 1} 
                    onClick={() => setCurrentPage(prev => prev - 1)}>
                    Prev
                </button>
                <span className='mx-2 px-4 py-2'>{currentPage} / {totalPages}</span>
                <button 
                    className='mx-2 px-4 py-2 bg-gray-300 rounded disabled:opacity-50' 
                    disabled={currentPage === totalPages} 
                    onClick={() => setCurrentPage(prev => prev + 1)}>
                    Next
                </button>
            </div>
        </>
    );
};

export default TableInvoices;
