import { Header } from "@/components/Header";
import { Hexagon } from "lucide-react";
import Link from "next/link";

export default function StartPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] flex flex-col">
      <Header />
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex items-center justify-center">
        <div className="bg-white w-full max-w-md p-10 rounded-3xl shadow-xl shadow-gray-200/40 border border-gray-100 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-gray-900 text-white p-3 rounded-2xl">
              <Hexagon className="w-8 h-8 fill-current" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Create an account</h1>
          <p className="text-gray-500 mb-8">Join thousands of developers building the future.</p>
          
          <form className="space-y-5 text-left">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-900">Email Address</label>
              <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-900 transition-colors" placeholder="you@example.com" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-900">Password</label>
              <input type="password" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-900 transition-colors" placeholder="••••••••" />
            </div>
            <button className="w-full bg-gray-900 text-white font-semibold py-3.5 rounded-xl hover:bg-gray-800 transition-colors mt-4">
              Get Started
            </button>
          </form>
          
          <p className="mt-8 text-sm text-gray-500">
            Already have an account? <Link href="#" className="text-gray-900 font-semibold hover:underline">Log in</Link>
          </p>
        </div>
      </main>
    </div>
  );
}
