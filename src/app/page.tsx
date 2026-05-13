import { Header } from "@/components/Header";
import { HomeClient } from "@/components/HomeClient";
import { fetchPosts } from "@/lib/data";

export default async function Home() {
  const initialPosts = await fetchPosts();

  return (
    <div className="min-h-screen bg-[#f8f9fa] flex flex-col">
      <Header />
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <HomeClient initialPosts={initialPosts} />
      </main>
    </div>
  );
}
