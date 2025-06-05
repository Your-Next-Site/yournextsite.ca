import type { Metadata } from "next";
import { Geist, Geist_Mono, Raleway } from "next/font/google";
import "./globals.css";
import Top from "./components/top";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Your Next site ",
  description: "Get a quote today!",
  icons: "/favicon.ico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>)
{

  return (
    <html lang="en" className="w-[full] h-min-[100vh] scrollbar-gutter-stable">
      <body
        className={`${raleway.variable} ${geistMono.variable} font-[var(--font-raleway)] antialiased `}
      >
        <Top/>
        {children}
      </body>
    </html>
  );
}
