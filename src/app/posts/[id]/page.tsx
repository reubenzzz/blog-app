import { Header } from "@/components/Header";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { fetchPost, getAllPostIds } from "@/lib/data";

export async function generateStaticParams() {
  const ids = await getAllPostIds();
  return ids;
}

export default async function PostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = await fetchPost(id);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#f8f9fa] flex flex-col">
      <Header />
      <main className="flex-1 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to all posts
        </Link>
        
        <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100">
          <div className="aspect-[21/9] relative">
            <img 
              src={post.image} 
              alt={post.title} 
              className="absolute inset-0 w-full h-full object-cover"
            />
            {post.category && (
               <div className="absolute top-6 left-6">
                 <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-sm font-medium">
                    {post.category}
                 </span>
               </div>
            )}
          </div>
          
          <div className="p-8 sm:p-12 lg:p-16">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              {post.title}
            </h1>
            
            {post.author && (
              <div className="flex items-center gap-4 mb-10 pb-10 border-b border-gray-100">
                <img 
                  src={post.author.avatar} 
                  alt={post.author.name} 
                  className="w-12 h-12 rounded-full object-cover bg-gray-100"
                />
                <div className="flex flex-col">
                  <span className="font-bold text-gray-900">{post.author.name}</span>
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                </div>
              </div>
            )}
            
            <div className="max-w-none text-gray-600">
              <p className="text-xl leading-relaxed">
                {post.excerpt || 'This is a mock post content. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}
              </p>
              <p className="mt-6 text-lg leading-relaxed">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}
