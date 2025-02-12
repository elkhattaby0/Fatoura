import LeftSide from "./aside";
import Header from "./Header";

export default function AuthLayout({
    children,
    }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="bg-white flex flex-col w-full h-[100vh]">
            <Header />
            <div className="w-full flex h-full">
                <LeftSide />
                <div className="bg-lightGray p-4 w-10/12 max-md:w-full">
                    {children}
                </div>                
            </div>
        </div>
    )

}