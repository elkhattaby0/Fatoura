"use client";
import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import CardPrice from "../../components/cardPrice";

const PricingSection: React.FC = () => {
    const { t } = useLanguage();
    const txt = t.pricingLayout.pricing;
    const dt = t.pricing;

    return (
        <div className="w-full flex flex-col items-center">
            <h2 className="text-3xl font-bold text-darkBlue text-center w-3/4 my-6">
                {txt.title}
            </h2>
            <CardPrice
                data={dt.data}
                currency={dt.currency}
                btn={dt.btn}
            />
        </div>
    );
};

export default PricingSection;
