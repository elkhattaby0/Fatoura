import type { Metadata } from "next";
import LeftSide from "./components/aside";
import Header from "./components/Header";
export const metadata: Metadata = {
    title: "Fatoura - Dashboard",
    description: "Fatoura SaaS",
  };
  
export default function AuthLayout({
    children,
    }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="bg-white flex flex- col w-full h-screen">
            <LeftSide />
            
            <div className="w-full flex flex-col h-full">
                <Header />
                <div className="bg-lightGray p-4 w-full h-full max-md:h-fit">
                    {children}
                </div>                
            </div>
        </div>
    )
}