import { Header } from "@/components/Header";
import { HomeClient } from "@/components/HomeClient";

async function getPosts() {
  // Using an absolute URL for SSR fetch. In production, this would be your real API URL.
  // We use localhost:3000 here assuming it runs on default port.
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
  const res = await fetch(`${baseUrl}/api/posts`, {
    cache: 'no-store' // Ensure it's SSR, not static
  });
  if (!res.ok) {
    // If build fails or server isn't up, return empty array to prevent crash during build
    return [];
  }
  return res.json();
}

export default async function Home() {
  const initialPosts = await getPosts();

  return (
    <div className="min-h-screen bg-[#f8f9fa] flex flex-col">
      <Header />
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <HomeClient initialPosts={initialPosts} />
      </main>
    </div>
  );
}
