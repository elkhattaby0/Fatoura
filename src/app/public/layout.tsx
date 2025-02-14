import "../globals.css";
import Header from "./components/Header"
import Footer from "./components/Footer"

export default function PublicLayout({
    children,
    }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    )
}