import type { Metadata } from "next";
import { Inter} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Briefly – AI Document Summarizer',
  description: 'Upload, search, and summarize text and PDF articles using AI.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased container mx-auto p-4 border-2 border-red-500`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
