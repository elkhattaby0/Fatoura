import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Fatoura",
  description: "Fatoura SaaS",
};

export default function RootLayout({ children, }: Readonly<{  children: React.ReactNode; }>) 
{
  return (
    <html >
      <body
        className={`${inter.variable} ${inter.variable} antialiased`}
      > 
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
