"use client";
import React, { useState } from "react";
import Link from 'next/link';
import Image from 'next/image';

const currency = " DH";

interface Item {
    id: string;
    name: string;
    category: string;
    date: string;
    amount: number;
}

interface TableProps extends Item {
    link: string;
}

const TableRow: React.FC<TableProps> = ({ id, name, category, date, amount, link }) => {
    return (
        <tr className='text-[12px] border-b h-10 text-center'>
            <td className='px-5'>{id}</td>
            <td className='px-5'>{name}</td>
            <td className='px-5'>{category}</td>
            <td className='px-5 font-semibold'>{amount.toLocaleString("en-US") + currency}</td>
            <td className='px-5'>{date}</td>            
            <td className='px-5 flex justify-center items-center'>
                {link && (
                    <Link href={link} className='m-2'>
                        <Image src="/auth/edit.png" alt="edit" height={18} width={18} />
                    </Link>
                )}
                {link && (
                    <Link href={link} className='m-2'>
                        <Image src="/auth/delete.png" alt="delete" height={18} width={18} />
                    </Link>
                )}
            </td>
        </tr>
    );
};

interface TableExpensesProps {
    infoTable: Item[]; 
}

const TableExpenses: React.FC<TableExpensesProps> = ({ infoTable }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const totalPages = Math.ceil(infoTable.length / itemsPerPage);

    const displayedItems = infoTable.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    return (
        <>
            <div className='flex justify-between items-center mb-4'>
                <h2 className='font-medium text-xl'>All Expenses ({infoTable.length})</h2>
                <button className='bg-thirdcolor rounded-xl text-white py-2 px-4 flex items-center hover:bg-foreground'>
                    <span className='text-xl font-medium mr-2'>&#x2B;</span>
                    <span className='text-sm'>New Expense</span>
                </button>
            </div>
            <table className='w-full'>
                <thead className='text-sm'>
                    <tr className='text-gray-500 border-b h-10 bg-background'>
                        <th>#</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Amount</th>
                        <th>Date</th>
                        <th>Download</th>
                    </tr>
                </thead>
                <tbody>
                    {displayedItems.map((n) => (
                        <TableRow 
                            key={n.id}
                            id={n.id}
                            name={n.name}
                            category={n.category}
                            amount={n.amount}
                            date={n.date}
                            link="#"
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

export default TableExpenses;
