import type { Metadata } from "next";
import Link from "next/link";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-200 text-gray-900 p-8`}>
        <header className="p-8 bg-slate-50 rounded-xl mb-4">
          <p>Header</p>
          <Link href="/">Go to Homepage</Link>
        </header>
        {children}
        <footer className="p-8 bg-slate-50 rounded-xl mb-4">
          <p>Footer</p>
        </footer>
      </body>
    </html>
  );
}