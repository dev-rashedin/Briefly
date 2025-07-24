import type { Metadata } from "next";
import { Inter} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Briefly – AI Document Summarizer',
  description: 'Upload, search, and summarize text and PDF articles using AI.',
};

{/* <div className='min-h-screen w-full relative'>
  <div
    className='absolute inset-0 z-0'
    style={{
      background:
        'radial-gradient(125% 125% at 50% 100%, #000000 40%, #010133 100%)',
    }}
  />
</div>; */}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      suppressHydrationWarning
      className='[scrollbar-gutter:stable]'
    >
      <body className={`${inter.className} antialiased container mx-auto p-4 `}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
