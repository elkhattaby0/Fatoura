'use client';
import React from "react";
import Title2 from "../../components/title2";
import Button from "../../components/Button"
import BoldParagraph from "../../components/boldParagraph";

const ExportFinancialData = () => {
    return (
        <div className="h-full rounded-xl p-4 border bg-white w-full mt-4">
            <Title2 title="Export Financial Data" />
            <Button txt="Export as PDF" />
            <BoldParagraph txt="Proof of Income Generation"/>
            <Button txt="Generate Proof" />
        </div>
    )
}

export default ExportFinancialData;