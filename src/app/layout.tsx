import type { Metadata } from "next";
import { Nunito, Roboto_Mono } from "next/font/google";
import "./globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

// Fonts variable
const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito",
});

export const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto_mono.variable} ${nunito.variable} antialiased font-nunito bg-slate-100 text-gray-900`}>
        <SidebarProvider>
          <AppSidebar />
          <div className="flex flex-col flex-grow px-8">
            <header className="my-4">Header</header>
            <main className="flex-grow">
              <SidebarTrigger />
              {children}
            </main>
            <footer className="my-4">Footer</footer>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
