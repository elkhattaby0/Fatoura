import "../globals.css";
import Header from "./components/Header"
import Footer from "./components/Footer"
import { LanguageProvider } from "@/context/LanguageContext";


export default function PublicLayout({ children, }: Readonly<{ children: React.ReactNode; }>) 
{
    return (
        <LanguageProvider>
            <Header />
            {children}
            <Footer />
        </LanguageProvider>
    )
}