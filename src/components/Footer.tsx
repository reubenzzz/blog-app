import { Hexagon } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-12 md:py-16 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4 group inline-flex">
              <div className="bg-gray-900 text-white p-1.5 rounded-lg group-hover:bg-gray-800 transition-colors">
                <Hexagon className="w-5 h-5 fill-current" />
              </div>
              <span className="font-bold text-xl tracking-tight text-gray-900">Beyond UI</span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Empowering designers and developers to build stunning interfaces with next-generation tools and insights.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Product</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><Link href="/features" className="hover:text-gray-900 transition-colors">Features</Link></li>
              <li><Link href="/demo" className="hover:text-gray-900 transition-colors">Interactive Demo</Link></li>
              <li><Link href="#" className="hover:text-gray-900 transition-colors">Pricing</Link></li>
              <li><Link href="#" className="hover:text-gray-900 transition-colors">Changelog</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><Link href="/about" className="hover:text-gray-900 transition-colors">About Us</Link></li>
              <li><Link href="/blog" className="hover:text-gray-900 transition-colors">Our Blog</Link></li>
              <li><Link href="/contact" className="hover:text-gray-900 transition-colors">Contact</Link></li>
              <li><Link href="#" className="hover:text-gray-900 transition-colors">Careers</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Legal</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><Link href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-gray-900 transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-gray-900 transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-100 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Beyond UI. All rights reserved.
          </p>
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer flex items-center justify-center text-gray-500">𝕏</div>
            <div className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer flex items-center justify-center text-gray-500">in</div>
            <div className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer flex items-center justify-center text-gray-500">GH</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
