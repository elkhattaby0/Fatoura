import LeftSide from "./aside";
import Header from "./Header";

export default function AuthLayout({
    children,
    }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="bg-background flex w-full">
            <LeftSide />
            <div className="w-full mr-4 ">
                <Header />
                <div className="bg-white h- my-2 p-4 border rounded-xl ">
                    {children}
                </div>                
            </div>
        </div>
    )

}