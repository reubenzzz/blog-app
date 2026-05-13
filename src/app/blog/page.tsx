import { Header } from "@/components/Header";

export default function BlogLandingPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] flex flex-col">
      <Header />
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          Welcome to our main blog landing page. (This is a placeholder page!)
        </p>
        <a href="/" className="text-blue-600 hover:underline">Return to homepage to see posts</a>
      </main>
    </div>
  );
}
