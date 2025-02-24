"use client"
import React, { useState } from "react"
import SalesChart from "./BarChart";
import TransactionTable from "./TransactionTable";
import PopUp from "../../components/PopUp";

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
        "paragrapgh": "font-semibold text-md text-black 1/3",
        "label": "w-full h-fit py-2 flex max-md:flex-col justify-between items-center max-md:items-start bg- red-500",
        "input": "w-2/3 max-md:w-full max-md:mt-2 bg-lightGray rounded-xl p-2 outline-none border border-darkBlue"
    }
    return (
        <div className="h-full rounded-xl p-4 border bg-white w-1/2 max-md:w-full mt-4">
            {
                title ? 
                <h3
                    className='font-bold text-xl text-darkBlue mb-4'
                >
                    {title}
                </h3> 
                : <div className="animate-pulse rounded-full bg-gray-300 p-2 w-[200px] mt-2"></div>
            }
            <SalesChart />
            {
                txt ? 
                <p
                    className="font-semibold text-medium text-black"
                >
                    {txt} :
                </p> 
                : <div className="animate-pulse rounded-full bg-gray-300 p-2 w-[200px] mt-2"></div>
            }
            <TransactionTable 
                headTable={headTable}
                data={data}
                pr="Previous"
                pg="Page"
                nt="Next"
                currency="MAD"

            />
            {
                btn ?
                    <button
                        onClick={() => setIsOpend(!isOpend)}
                        className='bg-darkBlue hover:bg-skyBlue hover:shadow text-white px-4 py-2 rounded-xl my-2 text-md'
                    >
                        {btn}
                    </button>
                    : <div className="animate-pulse rounded-full bg-gray-300 p-4 w-[150px] mt-2"></div>
            }

            {
                isOpend && (
                <PopUp>
                    <div className="bg-white rounded-xl shadow-2xl  p-8 border w-[600px] max-md:w-full h-fit ">
                        <div className="flex justify-between items-start"> 
                            <h3 className="font-semibold text-darkBlue text-xl mb-3">New Transaction</h3>
                            <button
                                className="text-red-500 font-bold text-[20px] hover:bg-lightGray size-8 rounded-xl"
                                onClick={() => setIsOpend(!isOpend)}
                            >X</button>
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

                            <button type="submit"
                                className="bg-darkBlue hover:bg-skyBlue text-white p-2 mt-2 rounded-xl outline-none"
                            >Add</button>
                        </form>
                    </div>
                </PopUp>
                )
            }
        </div>
    )
} 

export default IncomeExpenses;