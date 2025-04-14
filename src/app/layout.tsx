import NavigationMenu from "@/components/NavigationMenu";
import BackToTopButton from "@/components/BackToTopButton";
import { Inter } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Solana Memecoin Launchpad Project",
  description: "A comprehensive solution for developing a memecoin launchpad on the Solana blockchain with an integrated custom crypto wallet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-gradient-to-r from-purple-600 to-blue-500 text-white p-4 shadow-md">
          <div className="container mx-auto">
            <h1 className="text-3xl font-bold">Solana Memecoin Launchpad</h1>
            <p className="text-lg">With Custom Crypto Wallet</p>
          </div>
        </header>
        <NavigationMenu />
        <main className="container mx-auto p-4 min-h-screen">
          {children}
        </main>
        <footer className="bg-gray-800 text-white p-6">
          <div className="container mx-auto">
            <p className="text-center">© 2025 Solana Memecoin Launchpad Project</p>
          </div>
        </footer>
        <BackToTopButton />
      </body>
    </html>
  );
}
