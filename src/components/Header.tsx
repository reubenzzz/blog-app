import Link from "next/link";
import { Hexagon } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-gray-900 text-white p-1.5 rounded-lg group-hover:bg-gray-800 transition-colors">
            <Hexagon className="w-5 h-5 fill-current" />
          </div>
          <span className="font-bold text-xl tracking-tight text-gray-900">Beyond UI</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <Link href="/" className="text-gray-900 font-semibold">Homepage</Link>
          <Link href="/about" className="hover:text-gray-900 transition-colors">About us</Link>
          <Link href="/features" className="hover:text-gray-900 transition-colors">Features</Link>
          <Link href="/blog" className="hover:text-gray-900 transition-colors">Blog</Link>
          <Link href="/contact" className="hover:text-gray-900 transition-colors">Contact us</Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/demo" className="hidden md:block text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
            Demo
          </Link>
          <Link 
            href="/start" 
            className="bg-gray-900 text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-gray-800 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}
