import "../globals.css";
import Header from "./Header"
import Footer from "./Footer"

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