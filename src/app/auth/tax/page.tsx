import React from 'react';
import type { Metadata } from "next";
import TaxOverview from './sections/taxOverview';
import TaxDeclaration from './sections/taxDeclaration';
import TaxAuthorities from './sections/taxAuthorities';
import Title from '../components/title';
import en from '@/translation/en';
const dt = en.dashboard.taxLayout

export const metadata: Metadata = {
    title: "Fatoura - Tax Management",
    description: "Fatoura SaaS",
  };

const TaxManagement: React.FC = () => {    
    return (
        <div>
            <Title 
                title={dt.header.title} 
                txt={dt.header.txt} 
            />
            <div className='flex max-md:flex-col gap-4 max-md:gap-0'>
                <TaxOverview 
                    title={dt.c1.title} 
                    estimated={dt.c1.estimated}
                    amount={dt.c1.amount}
                    currency={dt.c1.currency}
                    breakdown={dt.c1.breakdown}
                    vat={dt.c1.vat}
                    vatAmount={dt.c1.vatAmount}
                    income={dt.c1.income}
                    incomeAmount={dt.c1.incomeAmount}
                />
                <TaxDeclaration 
                    title={dt.c2.title}
                    btn={dt.c2.btn}
                    txt1={dt.c2.txt1}
                    dt1={dt.c2.dt1}
                    txt2={dt.c2.txt2}
                    head={dt.c2.table.head}
                    body={dt.c2.table.body}
                />
                <TaxAuthorities 
                    title={dt.c3.title}
                    statustxt={dt.c3.statustxt}
                    status={dt.c3.status}
                    btn={dt.c3.btn}
                    note={dt.c3.note}
                />
            </div>
        </div>
    )
}

export default TaxManagement;