"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="min-w-80 bg-gray-50 text-black rounded-xl py-8 mr-4">
      <p className="mb-8 text-xl">Sidebar</p>
      <nav>
        <ul>
          <li
            className={`py-4 px-8 mb-4 link ${
              pathname === "/dashboard"
                ? "bg-slate-100 border-l-4 border-blue-500"
                : ""
            }`}>
            <Link href="/dashboard">Dashboard</Link>
          </li>
          <li
            className={`py-4 px-8 mb-4 link ${
              pathname === "/staff"
                ? "bg-slate-100 border-l-4 border-blue-500"
                : ""
            }`}>
            <Link href="/staff">Staff</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
