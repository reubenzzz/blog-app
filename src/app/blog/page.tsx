import { Header } from "@/components/Header";
import Link from "next/link";
import { fetchPosts } from "@/lib/data";

export default async function BlogLandingPage() {
  const posts = await fetchPosts();
  
  return (
    <div className="min-h-screen bg-[#f8f9fa] flex flex-col">
      <Header />
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">Latest from the blog</h1>
          <p className="text-xl text-gray-600">
            Design tips, technical tutorials, and product updates straight from the Beyond UI team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link key={post.id} href={`/posts/${post.id}`} className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {post.category && (
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-gray-900 text-xs font-semibold">
                      {post.category}
                    </span>
                  </div>
                )}
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{post.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3 flex-1">{post.excerpt}</p>
                {post.author && (
                  <div className="flex items-center gap-3 mt-auto pt-6 border-t border-gray-100">
                    <img src={post.author.avatar} alt={post.author.name} className="w-8 h-8 rounded-full" />
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold text-gray-900">{post.author.name}</span>
                      <span className="text-xs text-gray-500">{post.readTime}</span>
                    </div>
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
