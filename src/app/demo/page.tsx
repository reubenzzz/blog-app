import { Header } from "@/components/Header";
import { PlayCircle } from "lucide-react";

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] flex flex-col">
      <Header />
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">See Beyond UI in Action</h1>
          <p className="text-xl text-gray-600">
            Take a guided tour of our platform and discover how we can help you build interfaces 10x faster.
          </p>
        </div>

        <div className="w-full max-w-5xl mx-auto relative group cursor-pointer">
          <div className="aspect-video bg-gray-900 rounded-3xl overflow-hidden shadow-2xl relative">
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80" 
              alt="Platform Demo" 
              className="absolute inset-0 w-full h-full object-cover opacity-50 transition-opacity duration-500 group-hover:opacity-40"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <PlayCircle className="w-10 h-10 text-white" />
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <button className="bg-gray-900 text-white font-semibold px-8 py-4 rounded-full hover:bg-gray-800 transition-colors">
              Request a Live Demo
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
