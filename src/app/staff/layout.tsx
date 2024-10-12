import Sidebar from "@/src/components/Sidebar/page";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex mb-4">
      <Sidebar />
      {children}
    </div>
  );
}
