import type { Metadata } from "next";
import { Geist_Mono, Raleway } from "next/font/google";
import "./globals.css";
import Top from "../components/ui/top";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

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
   keywords: [
    "your next website",
    "build a site",
    "make your site",
    "launch a web site",
    "your next site"
   ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>)
{

  return (
    <html lang="en" className="min-w-full min-h-screen">
      <body
        className={`${raleway.variable} ${geistMono.variable} font-[var(--font-raleway)] antialiased min-w-full min-h-screen`}
      >
        <Top/>
        {children}
      </body>
    </html>
  );
}
