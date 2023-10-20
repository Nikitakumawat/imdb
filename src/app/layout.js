import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Providers from "./Providers";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IMDB app",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {/* Header */}
          <Header/>

          {/* Navbar */}
          <Navbar/>

          {/* Search box */}
          {children}
        </Providers>
      </body>
    </html>
  );
}
