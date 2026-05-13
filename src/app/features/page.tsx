import { Header } from "@/components/Header";

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] flex flex-col">
      <Header />
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Features</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Discover all the amazing tools and features we offer to help you build better interfaces faster.
        </p>
      </main>
    </div>
  );
}
