import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { StickyNavbar } from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Accueil - générateur de mèmes",
  description: "Générateur de mèmes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.className} bg-gray-100 min-h-full`} >
        <StickyNavbar />
        <div className="p-5">
        {children}
        </div>
      </body>
    </html>
  );
}
