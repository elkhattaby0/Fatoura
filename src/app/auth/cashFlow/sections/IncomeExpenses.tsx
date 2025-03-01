"use client"
import React, { useState } from "react"
import SalesChart from "./BarChart";
import TransactionTable from "./TransactionTable";
import PopUp from "../../components/PopUp";
import Title2 from "../../components/title2";
import BoldParagraph from "../../components/boldParagraph";
import Botton from "../../components/Button";

const headTable = ["Date", "Description", "Amount", "Category"]
const data = [
    {
      date: "2024-03-31",
      description: "Payment from Client X",
      amount: 5000,
      category: "Sales"
    },
    {
      date: "2024-03-15",
      description: "Payment from Client Y",
      amount: 3200,
      category: "Services"
    },
    {
      date: "2024-03-10",
      description: "Payment from Client Z",
      amount: 2500,
      category: "Sales"
    },
    {
      date: "2024-03-05",
      description: "Payment from Client A",
      amount: 1000,
      category: "Consulting"
    },
    {
      date: "2024-02-25",
      description: "Payment from Client B",
      amount: 7500,
      category: "Sales"
    }
];

  
interface IncomeExpensesProps {
    title:string;
    txt:string;
    btn:string;
}
const IncomeExpenses:React.FC<IncomeExpensesProps> = ({title,txt, btn}) => {
    const [isOpend, setIsOpend] = useState(false)
    const styles = {
        "paragrapgh": "font-semibold text-md text-black w-full ",
        "label": "w-full h-fit py-[3px] flex flex-col justify-between items-start",
        "input": "w-full mt-[1px] bg-lightGray rounded-xl px-4 py-2 outline-none border border-darkBlue"
    }
    return (
        <div className="h-full rounded-xl p-4 border bg-white w-1/2 max-md:w-full mt-4">
            <Title2 title={title} />
            <SalesChart />
            <BoldParagraph txt={txt} />
            <TransactionTable 
                headTable={headTable}
                data={data}
                pr="Previous"
                pg="Page"
                nt="Next"
                currency="MAD"

            />
            <Botton txt={btn} onClick={() => setIsOpend(!isOpend)} />
            {
                isOpend && (
                <PopUp>
                    <div className="bg-white shadow-2xl py-4 px-8 w-[500px] max-md:w-full h-full 
                   max-h-screen overflow-y-auto flex flex-col">
                        <div className="flex justify-between mb-4"> 
                            <Title2 title="New Transaction" />
                            <button
                                className="flex items-center justify-center bg-lightGray p-[4px] size-7 rounded-xl"
                                onClick={() => setIsOpend(!isOpend)}
                            >
                                <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z" fill="#ff0000"></path> </g></svg>
                            </button>
                        </div>

                        <form className="flex flex-col">
                            <label className={styles.label}>
                                <p className={styles.paragrapgh}>Description</p>
                                <input type="text" name="description" className={styles.input}/>
                            </label>

                            <label className={styles.label}>
                                <p className={styles.paragrapgh}>Amount</p>
                                <input type="number" name="price" className={styles.input} />
                            </label>

                            <label className={styles.label}>
                                <p className={styles.paragrapgh}>Category</p>
                                <input type="number" name="category" className={styles.input} />
                            </label>

                            <Botton txt="Add" />
                        </form>
                    </div>
                </PopUp>
                )
            }
        </div>
    )
} 

export default IncomeExpenses;