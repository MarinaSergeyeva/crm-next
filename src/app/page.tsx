import Link from "next/link";

export default function Home() {
  return (
    <div className="p-8 bg-slate-50 rounded-xl mb-4">
      <h1 className="text-xl font-bold">Sign In / Sign Up</h1>
      <Link href="/staff">Go to Staff</Link>
    </div>
  );
}
